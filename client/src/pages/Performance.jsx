// client/src/pages/Performance.jsx
import React, { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import axios from "axios";

const sampleLineData = [
  { name: "Week1", mastery: 20 },
  { name: "Week2", mastery: 35 },
  { name: "Week3", mastery: 50 },
  { name: "Week4", mastery: 65 },
  { name: "Week5", mastery: 75 }
];

const subjectBars = [
  { subject: "Python", score: 78 },
  { subject: "C", score: 65 },
  { subject: "C++", score: 58 },
  { subject: "Web", score: 82 },
  { subject: "FullStack", score: 72 }
];

export default function Performance() {
  const [lineData, setLineData] = useState(sampleLineData);
  const [barData, setBarData] = useState(subjectBars);

  // Optional: fetch real progress data if you have an endpoint
  useEffect(() => {
    // example: GET /api/progress/summary (implement server-side if desired)
    // axios.get(`${import.meta.env.VITE_API_BASE_URL}/progress/summary`, { headers: { Authorization: ... }})
    //   .then(res => { setLineData(res.data.line); setBarData(res.data.bySubject) })
    //   .catch(()=> {});
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Performance</h2>
        <p className="text-sm text-gray-500">Your learning progress and subject performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Mastery Over Time</h3>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="mastery" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Performance by Subject</h3>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <BarChart data={barData}>
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
