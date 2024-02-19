import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Assuming you have a User model
    required: true,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"], // Customize based on your needs
    default: "Pending",
  },
  user: {
    type: String,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User", // Assuming your User model is named "User"
  //   required: true,
  // },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
