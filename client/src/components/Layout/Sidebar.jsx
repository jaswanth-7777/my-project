import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => (
  <NavLink className={({isActive}) => `block px-4 py-2 rounded-md ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`} to={to}>
    {label}
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white/80 border-r border-gray-200 p-6 hidden lg:block">
      <nav className="space-y-2">
        <NavItem to="/dashboard" label="Dashboard" />
        <NavItem to="/subjects" label="Subjects" />
        <NavItem to="/performance" label="Performance" />
        <NavItem to="/settings" label="Settings" />
      </nav>
    </aside>
  );
}
