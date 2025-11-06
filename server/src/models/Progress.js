import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  topic: String,
  attempts: { type: Number, default: 0 },
  correct: { type: Number, default: 0 },
  mastery: { type: Number, default: 0 }, // 0-100
  lastAttemptAt: Date
});

export default mongoose.model("Progress", progressSchema);
