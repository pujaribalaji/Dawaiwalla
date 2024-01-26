// controllers/bannerController.js
import fs from "fs";
import Banner from "../models/bannerModel.js";
import dotenv from "dotenv";

dotenv.config();

// Create a new banner
// controllers/bannerController.js
export const createBannerController = async (req, res) => {
  try {
    const { altText, caption } = req.fields;
    const { photo } = req.files;

    // Validation
    if (!altText || !caption) {
      return res
        .status(500)
        .send({ error: "Alt text and caption are required fields" });
    }

    const banner = new Banner({ altText, caption });

    if (photo) {
      banner.image.data = fs.readFileSync(photo.path);
      banner.image.contentType = photo.type;
    }

    await banner.save();

    res.status(201).send({
      success: true,
      message: "Banner Created Successfully",
      banner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating banner",
    });
  }
};

// Get all banners
export const getBannersController = async (req, res) => {
  try {
    const banners = await Banner.find({}).select("-image");
    res.status(200).send({
      success: true,
      countTotal: banners.length,
      message: "All Banners",
      banners,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting banners",
      error: error.message,
    });
  }
};

// Get a single banner by ID
export const getSingleBannerController = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id).select("-image");
    res.status(200).send({
      success: true,
      message: "Single Banner Fetched",
      banner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single banner",
      error,
    });
  }
};

// Get banner image
export const bannerImageController = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id).select("image");
    if (banner.image.data) {
      res.set("Content-type", banner.image.contentType);
      return res.status(200).send(banner.image.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting banner image",
      error,
    });
  }
};

// Update a banner
export const updateBannerController = async (req, res) => {
  try {
    const { altText, caption } = req.fields;
    const { photo } = req.files;

    // Validation
    if (!altText || !caption) {
      return res
        .status(500)
        .send({ error: "Alt text and caption are required fields" });
    }

    const banner = await Banner.findById(req.params.id);

    if (!banner) {
      return res
        .status(404)
        .send({ success: false, message: "Banner not found" });
    }

    // Update fields
    banner.altText = altText;
    banner.caption = caption;

    // If a new image is provided, update the image
    if (photo) {
      banner.image.data = fs.readFileSync(photo.path);
      banner.image.contentType = photo.type;
    }

    await banner.save();

    res.status(201).send({
      success: true,
      message: "Banner Updated Successfully",
      banner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating banner",
    });
  }
};

// Delete a banner
export const deleteBannerController = async (req, res) => {
  try {
    const { id } = req.params;
    await Banner.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Banner Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting banner",
      error,
    });
  }
};
