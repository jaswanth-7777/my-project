import React, { useEffect, useState } from "react";
import axios from "axios";
import MasteryChart from "../components/Dashboard/MasteryChart.jsx";
import DailyQuizCard from "../components/Dashboard/DailyQuizCard.jsx";

export default function Dashboard(){
  const [questions, setQuestions] = useState([]);
  useEffect(()=>{
    const fetch = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("luna_user"))?.token;
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users`, { // fallback harmless endpoint
          headers: { Authorization: token ? `Bearer ${token}` : "" },
        }).catch(()=> null);

        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/quiz/daily`, {
          headers: { Authorization: token ? `Bearer ${token}` : "" }
        });
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  },[]);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <DailyQuizCard questions={questions} />
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-3">Mastery Over Time</h3>
            <MasteryChart />
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="font-semibold mb-2">Recent Activity</h4>
            <p className="text-sm text-gray-500">Recent Activity / Badges (stub)</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="font-semibold mb-2">Overall Progress</h4>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-gray-500">Overall mastery</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="col-span-12">
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="font-semibold">Recommended Topics</h4>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 border rounded">Calculus: Derivatives</div>
              <div className="p-3 border rounded">Python: Data Structures</div>
              <div className="p-3 border rounded">History: WW2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
