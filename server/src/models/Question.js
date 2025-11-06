import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: String,
  correct: Boolean,
});

const questionSchema = new mongoose.Schema({
  text: String,
  topic: String,
  difficulty: Number,
  options: [optionSchema],
});

export default mongoose.model("Question", questionSchema);
