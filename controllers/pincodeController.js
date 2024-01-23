import pincodeModel from "../models/pincodeModel.js";
import slugify from "slugify";
export const createPincodeController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Pincode is required" });
    }
    const existingPincode = await pincodeModel.findOne({ name });
    if (existingPincode) {
      return res.status(200).send({
        success: false,
        message: "Pincode Already Exists",
      });
    }
    const pincode = await new pincodeModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new pincode created",
      pincode,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Pincode",
    });
  }
};

//update pincode
export const updatePincodeController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const pincode = await pincodeModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Pincode Updated Successfully",
      pincode,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating pincode",
    });
  }
};

// get all pincodes
export const pincodeControlller = async (req, res) => {
  try {
    const pincode = await pincodeModel.find({});
    res.status(200).send({
      success: true,
      message: "All Pincode List",
      pincode,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all pincodes",
    });
  }
};

// single pincode
export const singlePincodeController = async (req, res) => {
  try {
    const pincode = await pincodeModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get Single Pincode Successfully",
      pincode,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Pincode",
    });
  }
};

//delete pincode
export const deletePincodeController = async (req, res) => {
  try {
    const { id } = req.params;
    await pincodeModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Pincode Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting pincode",
      error,
    });
  }
};
