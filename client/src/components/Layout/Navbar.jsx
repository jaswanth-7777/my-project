import React from "react";

export default function Navbar(){
  return (
    <header className="h-16 bg-white/60 backdrop-blur-md border-b border-gray-200 flex items-center px-6">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-semibold text-indigo-700 flex items-center gap-2">
          <span className="rounded-full w-9 h-9 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-sky-400 text-white">🌙</span>
          <div>
            <div className="text-sm">LUNA</div>
            <div className="text-xs text-gray-500 -mt-1">Adaptive Platform</div>
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <input placeholder="Search topics..." className="hidden md:block px-3 py-2 rounded-md border bg-white/80" />
        <button className="px-3 py-2 text-sm">Notifications</button>
        <div className="w-9 h-9 rounded-full bg-gray-200" />
      </div>
    </header>
  );
}
