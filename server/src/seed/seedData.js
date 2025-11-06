import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Question from "../models/Question.js";
import User from "../models/User.js";

dotenv.config();

const sampleQuestions = [
  {
    text: "What is 2 + 2?",
    options: [{ text: "3", correct: false }, { text: "4", correct: true }],
    topic: "Math",
    difficulty: 1
  },
  {
    text: "Which language runs in a browser?",
    options: [{text:"Python",correct:false},{text:"JavaScript",correct:true}],
    topic: "Programming",
    difficulty: 1
  }
];

const seed = async () => {
  try {
    await connectDB();
    await Question.deleteMany();
    await Question.insertMany(sampleQuestions);
    await User.deleteMany();
    await User.create({ name: "Demo Student", email: "student@luna.test", password: "password" });
    console.log("Seeded DB");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
