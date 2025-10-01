// App.jsx
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { id: 1, name: "Hackathon", date: "2025-10-10" },
    { id: 2, name: "Conference", date: "2025-11-01" },
  ]);

  const [form, setForm] = useState({ name: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date) return;

    const newEvent = {
      id: events.length + 1,
      name: form.name,
      date: form.date,
    };
    setEvents([...events, newEvent]);
    setForm({ name: "", date: "" });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Events</h1>

      {/* Event List */}
      <ul className="mb-6">
        {events.map((ev) => (
          <li key={ev.id} className="border p-2 rounded mb-2">
            <strong>{ev.name}</strong> — {ev.date}
          </li>
        ))}
      </ul>

      {/* Add Event Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}

export default App;
