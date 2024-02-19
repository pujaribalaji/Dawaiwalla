import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createFooterContent,
  getFooterContent,
} from "../controllers/footerController.js"; // Import the controller functions

const router = express.Router();

// Update content in the database
router.post("/footer-content", requireSignIn, isAdmin, createFooterContent);

// Retrieve content from the database
router.get("/footer-content", getFooterContent);

export default router;
