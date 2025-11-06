import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Week1", mastery: 20 },
  { name: "Week2", mastery: 35 },
  { name: "Week3", mastery: 50 },
  { name: "Week4", mastery: 65 },
  { name: "Week5", mastery: 75 }
];

export default function MasteryChart(){
  return (
    <div style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="mastery" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
