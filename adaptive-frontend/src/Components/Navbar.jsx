// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const Item = ({ to, children }) => (
    <Link
      to={to}
      style={{
        padding: "8px 12px",
        borderRadius: 10,
        textDecoration: "none",
        background: pathname === to ? "#111827" : "#e5e7eb",
        color: pathname === to ? "white" : "#111827",
        fontWeight: 600
      }}
    >
      {children}
    </Link>
  );
  return (
    <div style={{display:"flex", gap:12, alignItems:"center", marginBottom:16}}>
      <Item to="/">Home</Item>
      <Item to="/practice">Student</Item>
      <Item to="/instructor">Instructor</Item>
    </div>
  );
}
