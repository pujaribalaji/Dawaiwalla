import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  pincodeControlller,
  createPincodeController,
  deletePincodeController,
  singlePincodeController,
  updatePincodeController,
} from "./../controllers/pincodeController.js";

const router = express.Router();

//routes
// create pincode
router.post("/create-pincode", requireSignIn, isAdmin, createPincodeController);

//update pincode
router.put(
  "/update-pincode/:id",
  requireSignIn,
  isAdmin,
  updatePincodeController
);

//getAll pincode
router.get("/get-pincode", pincodeControlller);

//single pincode
router.get("/single-pincode/:slug", singlePincodeController);

//delete pincode
router.delete(
  "/delete-pincode/:id",
  requireSignIn,
  isAdmin,
  deletePincodeController
);

export default router;
