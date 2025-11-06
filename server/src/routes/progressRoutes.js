import express from "express";
import { reportProgress } from "../controllers/progressController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/report", protect, reportProgress);
export default router;
