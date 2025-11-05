// src/rules.js
import { DIFFICULTY_ORDER } from "./data";

// Very small “mastery” estimate: correct/total with streak bonus.
export function updateTopicStats(topicStats, wasCorrect) {
  const s = topicStats || { correct: 0, total: 0, streak: 0, mastery: 0 };
  s.total += 1;
  if (wasCorrect) {
    s.correct += 1;
    s.streak += 1;
  } else {
    s.streak = 0;
  }
  const base = s.correct / s.total;
  const bonus = Math.min(0.2, s.streak * 0.02);
  s.mastery = Math.min(1, base + bonus);
  return s;
}

// Pick next difficulty based on current mastery
// <0.4 → easy, <0.75 → medium, else hard; avoid repeating last question id.
export function pickNextQuestion(questions, topic, mastery, lastId) {
  const targetDifficulty =
    mastery < 0.4 ? "easy" : mastery < 0.75 ? "medium" : "hard";

  const pool = questions.filter(
    q => q.topic === topic && q.difficulty === targetDifficulty && q.id !== lastId
  );

  if (pool.length) return pool[Math.floor(Math.random() * pool.length)];

  // fallback: try other difficulties nearest to target
  const order = [...DIFFICULTY_ORDER];
  order.sort((a,b)=>Math.abs(DIFFICULTY_ORDER.indexOf(a)-DIFFICULTY_ORDER.indexOf(targetDifficulty))-
                    Math.abs(DIFFICULTY_ORDER.indexOf(b)-DIFFICULTY_ORDER.indexOf(targetDifficulty)));
  for (const d of order) {
    const alt = questions.filter(q=>q.topic===topic && q.difficulty===d && q.id!==lastId);
    if (alt.length) return alt[Math.floor(Math.random()*alt.length)];
  }
  return null;
}
