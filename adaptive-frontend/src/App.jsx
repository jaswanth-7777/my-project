// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import Instructor from "./Pages/Instructor";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/instructor" element={<Instructor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
