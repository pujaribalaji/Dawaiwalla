// controllers/orderController.js
import Order from "../models/orderModel.js";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// Create a new order
export const createOrderController = async (req, res) => {
  console.log("Order Started");
  try {
    const { items, totalPrice, username } = req.body;
    console.log("User is : ", username);
    // Calculate the total price based on the quantity of each item
    let calculatedTotalPrice = 0;
    items.forEach((item) => {
      calculatedTotalPrice += item.price * item.quantity;
    });

    const order = new Order({
      items,
      totalPrice: calculatedTotalPrice, // Save the calculated total price
      user: username,
    });
    console.log(order);
    await order.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: {
        _id: order._id,
        items,
        totalPrice: calculatedTotalPrice,
        status: "Pending",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while creating order",
      error,
    });
    console.log("Order Startedhjbjhbjb");
  }
  console.log("Order Started");
};



export const createOrderController_old = async (req, res) => {
  console.log("Order Started")
  try {
    const { items, totalPrice ,username} = req.body;
    console.log("User is : ",username)
    const order = new Order({
      items,
      totalPrice,
      user: username,
    });
    console.log(order)
    await order.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: {
        _id: order._id, // Return the generated order ID in the response
        items,
        totalPrice,
        status: "Pending",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while creating order",
      error,
    });
    console.log("Order Startedhjbjhbjb")
  }
  console.log("Order Started")
};




// Get all orders
export const getOrdersController = async (req, res) => {
  const {userId}=req.query
  console.log("Req is ",req.query.userId)
  try {
    if(req.query.userId){
      console.log("Fetching user one",req.query.userId)
      const fetchData=await Order.find({user:req.query.userId})
      const orders = await Order.find({user:req.query.userId}).select("items");
      console.log("The fetch is : ",fetchData)
      console.log(orders)

      res.status(200).json({
        messages:"jksdnfksdnfk",
        success: true,
        countTotal: orders.length,
        message: "All Orders",
        orders,
        fetchData
        
      });
    }
    else{
      console.log("Fetching All!")
      const fetchData=await Order.find()
      const orders = await Order.find().select("items");
      console.log("The fetch is : ",fetchData)
      console.log(orders)

      res.status(200).json({
        messages:"jksdnfksdnfk",
        success: true,
        countTotal: orders.length,
        message: "All Orders",
        orders,
        fetchData
        
      });
    }
    
   
    
    console.log("Fetched!!!")
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in getting orders",
      error: error.message,
    });
  }
};

// Get a single order by ID
export const getSingleOrderController = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate({
        path: "items", // Assuming 'items' is the name of the field in Order model that references the Item model
        select: "name quantity price", // Select the fields you want from the related Item model
      })
      .exec();

    console.log("Fetching order with ID:", req.params.orderId);
    res.status(200).json({
      success: true,
      message: "Single Order Fetched",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while getting single order",
      error,
    });
  }
};

// Update an order
export const updateOrderController = async (req, res) => {
  try {
    const { items, totalPrice, status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    // Update fields
    order.items = items;
    order.totalPrice = totalPrice;
    order.status = status || order.status; // Update status if provided

    await order.save();

    res.status(201).json({
      success: true,
      message: "Order Updated Successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: "Error in updating order",
    });
  }
};

// Delete an order
export const deleteOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Order Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while deleting order",
      error,
    });
  }
};
