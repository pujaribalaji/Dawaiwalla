// Import Footer model
import Footer from "../models/footerModel.js";

// Controller function to update content in the database
export const createFooterContent = async (req, res) => {
  console.log("Received request to update footer content:", req.body);
  const { content, contentType } = req.body;

  try {
    const existingContent = await Footer.findOne({ contentType });

    if (existingContent) {
      existingContent.content = content;
      await existingContent.save();
    } else {
      const newContent = new Footer({ content, contentType });
      await newContent.save();
    }
    console.log("Content updated successfully.");

    res.status(200).json({ message: "Content updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to retrieve content from the database by content type
export const getFooterContent = async (req, res) => {
  console.log("Received request to get footer content:", req.params);

  const { contentType } = req.params;

  try {
    const content = await Footer.findOne({ contentType });
    console.log("Content retrieved successfully.");

    res.status(200).json({ content: content ? content.content : "" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};