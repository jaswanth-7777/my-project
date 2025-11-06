import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "../models/Question.js";
dotenv.config();

const questions = [
  {
    text: "What is 2 + 2?",
    topic: "Math",
    difficulty: 1,
    options: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
    ],
  },
  {
    text: "Which keyword declares a variable in JavaScript?",
    topic: "Programming",
    difficulty: 1,
    options: [
      { text: "int", correct: false },
      { text: "let", correct: true },
      { text: "const", correct: false },
    ],
  },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Question.deleteMany();
  await Question.insertMany(questions);
  console.log("✅ Seeded questions");
  process.exit();
});
