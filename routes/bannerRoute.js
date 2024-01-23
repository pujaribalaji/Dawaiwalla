// routes/bannerRoutes.js
import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createBannerController,
  updateBannerController,
  getBannersController,
  deleteBannerController,
  getSingleBannerController,
  bannerImageController,
} from "../controllers/bannerController.js";

const router = express.Router();

// Routes for banner operations
router.post("/create-banner", requireSignIn, isAdmin, createBannerController);
router.put(
  "/update-banner/:id",
  requireSignIn,
  isAdmin,
  updateBannerController
);
router.get("/get-banners", getBannersController);
router.get("/get-banner/:id", getSingleBannerController);
router.get("/banner-image/:id", bannerImageController);
router.delete(
  "/delete-banner/:id",
  requireSignIn,
  isAdmin,
  deleteBannerController
);

export default router;
