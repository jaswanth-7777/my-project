import Question from "../models/Question.js";
import Progress from "../models/Progress.js";

export const getDailyQuiz = async (req, res) => {
  try {
    // Fetch 5 random questions for demo
    const count = await Question.countDocuments();
    const random = Math.floor(Math.random() * Math.max(count - 5, 1));
    const questions = await Question.find().skip(random).limit(5);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Failed to load quiz" });
  }
};

export const submitQuiz = async (req, res) => {
  try {
    const { userId, answers } = req.body;
    if (!userId || !answers) return res.status(400).json({ message: "Missing data" });

    const questions = await Question.find({ _id: { $in: answers.map(a => a.questionId) } });
    let correct = 0;

    answers.forEach(a => {
      const q = questions.find(q => q._id.toString() === a.questionId);
      if (q && q.options[a.selectedIndex]?.correct) correct++;
    });

    // Update user progress
    await Progress.findOneAndUpdate(
      { userId },
      { $inc: { attempts: answers.length, correct } },
      { upsert: true, new: true }
    );

    res.json({ total: answers.length, correct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit quiz" });
  }
};
