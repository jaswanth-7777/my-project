// src/storage.js
const KEY = "alp_progress_v1";

export function loadProgress() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : { // per-topic stats
    topics: {}, // topic -> { correct, total, streak, mastery }
    attempts: {}, // questionId -> { tries, correct }
    lastTopic: null,
  };
}

export function saveProgress(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function resetProgress() {
  localStorage.removeItem(KEY);
}
