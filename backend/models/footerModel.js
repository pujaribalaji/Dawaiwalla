import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
  content: String,
  contentType: String
});

const Footer = mongoose.model("Footer", footerSchema);

export default Footer;