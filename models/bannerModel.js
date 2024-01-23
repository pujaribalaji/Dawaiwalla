import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  altText: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
