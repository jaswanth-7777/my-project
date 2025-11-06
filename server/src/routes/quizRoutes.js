import express from "express";
import { getDailyQuiz, submitQuiz } from "../controllers/quizController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET daily quiz questions
router.get("/daily", protect, getDailyQuiz);

// POST quiz submission
router.post("/submit", protect, submitQuiz);

export default router;
