import Footer from "../models/footerModel.js";

export const createFooterContent = async (req, res) => {
  const { content } = req.body;

  try {
    const existingContent = await Footer.findOne();
    if (existingContent) {
      existingContent.content = content;
      await existingContent.save();
    } else {
      const newContent = new Footer({ content });
      await newContent.save();
    }

    res.status(200).json({ message: "Content updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getFooterContent = async (req, res) => {
  try {
    const content = await Footer.findOne();
    res.status(200).json({ content: content ? content.content : "" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
