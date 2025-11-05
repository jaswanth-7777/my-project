// src/pages/Instructor.jsx
import { loadProgress, resetProgress, saveProgress } from "../storage";
import { TOPICS, DIFFICULTY_ORDER, QUESTIONS } from "../data";
import { useState } from "react";

export default function Instructor() {
  const [state, setState] = useState(loadProgress());

  function clearAll() {
    resetProgress();
    const fresh = loadProgress();
    setState(fresh);
  }

  function setDifficultyBand(topic, band) {
    // Demo only: pretend we nudge mastery by band selection
    // low → 0.25, medium → 0.6, high → 0.85
    const mapping = { low: 0.25, medium: 0.6, high: 0.85 };
    state.topics[topic] = state.topics[topic] || { correct:0,total:0,streak:0,mastery:0 };
    state.topics[topic].mastery = mapping[band];
    saveProgress(state);
    setState({ ...state });
  }

  const rows = TOPICS.map(t => {
    const s = state.topics[t] || { correct:0,total:0,streak:0,mastery:0 };
    return { topic: t, ...s };
  });

  const itemStats = QUESTIONS.map(q => {
    const a = state.attempts[q.id] || { tries: 0, correct: 0 };
    const rate = a.tries ? Math.round((a.correct / a.tries) * 100) : 0;
    return { ...q, tries: a.tries, correct: a.correct, rate };
  });

  return (
    <div className="card">
      <h2>Instructor Console (Demo)</h2>

      <h3>Topic Mastery</h3>
      <table className="table">
        <thead>
          <tr><th>Topic</th><th>Mastery</th><th>Correct/Total</th><th>Streak</th><th>Adjust</th></tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.topic}>
              <td>{r.topic}</td>
              <td>{Math.round(r.mastery*100)}%</td>
              <td>{r.correct}/{r.total}</td>
              <td>{r.streak}</td>
              <td>
                <div className="btnrow">
                  <button onClick={()=>setDifficultyBand(r.topic,"low")}>Low</button>
                  <button onClick={()=>setDifficultyBand(r.topic,"medium")}>Mid</button>
                  <button onClick={()=>setDifficultyBand(r.topic,"high")}>High</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{marginTop:24}}>Item Stats (by Difficulty)</h3>
      <div className="chiprow">
        {DIFFICULTY_ORDER.map(d => (
          <span key={d} className={`chip ${d}`}>{d}</span>
        ))}
      </div>
      <table className="table">
        <thead>
          <tr><th>ID</th><th>Topic</th><th>Diff</th><th>Tries</th><th>Correct</th><th>Rate</th></tr>
        </thead>
        <tbody>
          {itemStats.map(x => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.topic}</td>
              <td>{x.difficulty}</td>
              <td>{x.tries}</td>
              <td>{x.correct}</td>
              <td>{x.rate}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{marginTop:16, display:"flex", gap:12}}>
        <button onClick={clearAll} className="danger">Reset All Progress</button>
      </div>
    </div>
  );
}
