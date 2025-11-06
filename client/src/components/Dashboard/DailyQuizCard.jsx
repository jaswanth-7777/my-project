import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DailyQuizCard() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(null);
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("luna_user") || "{}");

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/quiz/daily`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setQuestions(data);
      } catch {
        console.error("Could not load quiz");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSelect = (i) => {
    const updated = [...answers];
    updated[index] = i;
    setAnswers(updated);
  };

  const handleNext = async () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      await finishQuiz();
    }
  };

  const finishQuiz = async () => {
    setFinished(true);
    setOpen(false);

    const payload = {
      userId: user._id,
      answers: questions.map((q, i) => ({
        questionId: q._id,
        selectedIndex: answers[i],
      })),
    };

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/quiz/submit`, payload, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setScore(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading quiz...</p>;

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Daily Quiz</h3>
          <p className="text-sm text-gray-500">{questions.length} questions loaded</p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          disabled={!questions.length}
        >
          Start
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl">
            <h4 className="font-semibold mb-3">
              Q{index + 1}: {questions[index]?.text}
            </h4>
            {questions[index]?.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`block w-full text-left p-3 my-1 rounded border ${
                  answers[index] === i ? "border-indigo-400 bg-indigo-50" : "border-gray-200"
                }`}
              >
                {opt.text}
              </button>
            ))}
            <div className="mt-4 flex justify-between">
              <button onClick={() => setOpen(false)} className="px-3 py-1 border rounded">
                Close
              </button>
              <button onClick={handleNext} className="px-4 py-2 bg-indigo-600 text-white rounded">
                {index < questions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        </div>
      )}

      {finished && score && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-700 mb-1">Quiz Completed 🎉</h4>
          <p>
            You got {score.correct} out of {score.total} correct.
          </p>
        </div>
      )}
    </div>
  );
}
