// src/data.js
export const TOPICS = ["Math", "CS"];

export const QUESTIONS = [
  // difficulty: "easy" | "medium" | "hard"
  { id: "m1", topic: "Math", difficulty: "easy",    stem: "2 + 3 = ?", options: ["4","5","6","7"], answer: 1, hint: "Think basic addition." },
  { id: "m2", topic: "Math", difficulty: "medium",  stem: "Derivative of x^2?", options: ["x","2x","x^2","2"], answer: 1, hint: "Power rule." },
  { id: "m3", topic: "Math", difficulty: "hard",    stem: "∫ (2x) dx =", options: ["x^2 + C","2x + C","x + C","x^2"], answer: 0, hint: "Reverse power rule." },

  { id: "c1", topic: "CS",   difficulty: "easy",    stem: "DFA accepts?", options: ["Regular","Context-free","Decidable only","Non-regular"], answer: 0, hint: "DFA ↔ regular languages." },
  { id: "c2", topic: "CS",   difficulty: "medium",  stem: "Time for binary search?", options: ["O(n)","O(1)","O(log n)","O(n log n)"], answer: 2, hint: "Halving each step." },
  { id: "c3", topic: "CS",   difficulty: "hard",    stem: "Stack used by?", options: ["DFA","NFA","PDA","TM"], answer: 2, hint: "Pushdown automata." },
];

export const DIFFICULTY_ORDER = ["easy", "medium", "hard"];
