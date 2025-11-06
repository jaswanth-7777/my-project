import Progress from "../models/Progress.js";
import asyncHandler from "express-async-handler";

// POST /api/progress/report
export const reportProgress = asyncHandler(async (req, res) => {
  const { userId, topic, attempts, correct } = req.body;
  let p = await Progress.findOne({ user: userId, topic });
  if (!p) {
    p = new Progress({ user: userId, topic });
  }
  p.attempts += attempts || 0;
  p.correct += correct || 0;
  p.mastery = p.attempts ? Math.round((p.correct / p.attempts) * 100) : 0;
  p.lastAttemptAt = new Date();
  await p.save();
  res.json(p);
});
