import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createOrderController,
  // getAllOrdersController,
  getOrdersController,
  // orderStatusController,
  getSingleOrderController,
  deleteOrderController,
  updateOrderStatusController,
} from "../controllers/ordersControllers.js";

const router = express.Router();

//orders
router.post("/create-orders", requireSignIn, createOrderController);

router.get("/get-orders", requireSignIn, getOrdersController);
router.post("/order-status",updateOrderStatusController)
router.get("/:orderId", requireSignIn, getSingleOrderController);

router.delete("/delete-order/:id", requireSignIn, deleteOrderController);
//all orders
// router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
// router.put(
//   "/order-status/:orderId",
//   requireSignIn,
//   isAdmin,
//   orderStatusController
// );

export default router;
