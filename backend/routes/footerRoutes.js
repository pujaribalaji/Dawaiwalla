// Import necessary modules and models
import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createFooterContent,
  getFooterContent,
} from "../controllers/footerController.js";

const router = express.Router();

// Update content in the database
router.post("/footer-content", requireSignIn, isAdmin, createFooterContent);

// Retrieve content from the database by content type
router.get("/footer-content/:contentType", getFooterContent);

export default router;