// src/pages/Practice.jsx
import { useEffect, useMemo, useState } from "react";
import { QUESTIONS } from "../data";
import { loadProgress, saveProgress } from "../storage";
import { pickNextQuestion, updateTopicStats } from "../rules";

export default function Practice() {
  const [state, setState] = useState(loadProgress());
  const [current, setCurrent] = useState(null);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const topic = useMemo(() => state.lastTopic ?? "Math", [state.lastTopic]);
  const mastery = state.topics[topic]?.mastery ?? 0;

  useEffect(() => {
    const next = pickNextQuestion(QUESTIONS, topic, mastery, current?.id ?? null);
    setCurrent(next);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]); // run when topic changes (first mount)

  function submit() {
    if (selected === null || current == null) return;

    const wasCorrect = selected === current.answer;
    setFeedback(wasCorrect ? "✅ Correct!" : `❌ Incorrect. Hint: ${current.hint}`);

    // update attempts
    state.attempts[current.id] = state.attempts[current.id] || { tries: 0, correct: 0 };
    state.attempts[current.id].tries += 1;
    if (wasCorrect) state.attempts[current.id].correct += 1;

    // update topic stats & mastery
    state.topics[topic] = updateTopicStats(state.topics[topic], wasCorrect);

    saveProgress(state);
    setState({ ...state });

    // schedule next question after a short pause
    setTimeout(() => {
      const next = pickNextQuestion(QUESTIONS, topic, state.topics[topic].mastery, current.id);
      setCurrent(next);
      setSelected(null);
      setFeedback("");
    }, 700);
  }

  if (!current) return <p>No questions for topic: {topic}</p>;

  return (
    <div className="card">
      <h2>{topic} Practice</h2>
      <small>Estimated mastery: {(mastery * 100).toFixed(0)}%</small>

      <div className="qbox">
        <div className="qmeta">
          <span className={`badge ${current.difficulty}`}>{current.difficulty}</span>
          <span className="qid">#{current.id}</span>
        </div>
        <div className="stem">{current.stem}</div>

        <div className="options">
          {current.options.map((opt, idx) => (
            <label key={idx} className={`opt ${selected===idx ? "selected":""}`}>
              <input
                type="radio"
                name="opt"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
              />
              {opt}
            </label>
          ))}
        </div>

        <button className="primary" onClick={submit}>Submit</button>
        {feedback && <div className="feedback">{feedback}</div>}
      </div>
    </div>
  );
}
