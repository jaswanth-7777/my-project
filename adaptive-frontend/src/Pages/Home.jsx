// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { TOPICS } from "../data";
import { loadProgress, saveProgress } from "../storage";
import { Link } from "react-router-dom";

export default function Home() {
  const [topic, setTopic] = useState(TOPICS[0]);

  useEffect(() => {
    const s = loadProgress();
    if (s.lastTopic && TOPICS.includes(s.lastTopic)) setTopic(s.lastTopic);
  }, []);

  function handleStart() {
    const s = loadProgress();
    s.lastTopic = topic;
    saveProgress(s);
  }

  return (
    <div className="card">
      <h1>Adaptive Learning Platform</h1>
      <p>Select a topic and start a short adaptive practice session.</p>

      <label>Topic</label>
      <select value={topic} onChange={e=>setTopic(e.target.value)}>
        {TOPICS.map(t => <option key={t}>{t}</option>)}
      </select>

      <Link to="/practice">
        <button onClick={handleStart} className="primary">Start Practice</button>
      </Link>
      <p style={{marginTop:16,fontSize:12,opacity:.7}}>
        Mock frontend only — no backend required.
      </p>
    </div>
  );
}
