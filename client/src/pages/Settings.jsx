// client/src/pages/Settings.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Settings() {
  const { theme, toggle } = useTheme();

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Appearance</h4>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Theme</div>
            <div className="text-xs text-gray-500">Switch between light and dark UI</div>
          </div>
          <div>
            <button
              onClick={toggle}
              className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
              {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-slate-800 p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Account</h4>
        <p className="text-sm text-gray-500">(Account settings / logout can be added here.)</p>
      </div>
    </div>
  );
}
