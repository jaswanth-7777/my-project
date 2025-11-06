// client/src/pages/Subjects.jsx
import React from "react";

const subjects = [
  { id: "python", label: "Python", desc: "Data structures, scripting, ML basics" },
  { id: "c", label: "C", desc: "Low-level programming & memory" },
  { id: "cpp", label: "C++", desc: "OOP, STL, performance" },
  { id: "web", label: "Web Development", desc: "HTML, CSS, JS, frontend basics" },
  { id: "fullstack", label: "Full Stack", desc: "MERN + deployment & best practices" }
];

export default function Subjects() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Subjects</h2>
        <p className="text-sm text-gray-500">Choose a subject to start learning.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((s) => (
          <div key={s.id} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{s.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{s.desc}</p>
              </div>
              <div>
                <button
                  className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  onClick={() => alert(`Open ${s.label} learning path (TODO: implement).`)}
                >
                  Open
                </button>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                className="text-sm px-2 py-1 border rounded text-gray-600 dark:text-gray-200"
                onClick={() => alert(`View topics for ${s.label} (TODO).`)}
              >
                Topics
              </button>
              <button
                className="text-sm px-2 py-1 border rounded text-gray-600 dark:text-gray-200"
                onClick={() => alert(`Take practice quiz for ${s.label} (TODO).`)}
              >
                Practice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
