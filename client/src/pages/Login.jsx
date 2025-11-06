import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("student@luna.test");
  const [password, setPassword] = useState("password");
  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`, { email, password });
      localStorage.setItem("luna_user", JSON.stringify(data));
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-50">
      <form className="bg-white p-8 rounded-lg shadow-md w-96" onSubmit={login}>
        <h2 className="text-2xl mb-4 font-semibold">LUNA Login</h2>
        <input className="w-full p-2 mb-3 border rounded" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 mb-4 border rounded" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="w-full p-2 bg-indigo-500 text-white rounded">Login</button>
      </form>
    </div>
  );
}
