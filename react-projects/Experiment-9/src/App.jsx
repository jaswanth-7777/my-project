import { useState } from "react";

// ================= Classes =================
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getInfo() {
    return `${super.getInfo()}, Course: ${this.course}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getInfo() {
    return `${super.getInfo()}, Subject: ${this.subject}`;
  }
}

// ================= App Component =================
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [students, setStudents] = useState([
    new Student("Jaswanth", 20, "AIML"),
    new Student("Rohith", 22, "Cyber"),
    new Student("Sai", 19, "AIDS"),
  ]);

  const addStudent = () => {
    if (name && age && course) {
      const newStudent = new Student(name, parseInt(age), course);
      setStudents([...students, newStudent]);
      setName("");
      setAge("");
      setCourse("");
    }
  };

  const teacher = new Teacher("HariKrishna", 40, "Full Stack");

  return (
    <div className="app-container">
      <h1>Person Class Hierarchy</h1>

      <h2>Teacher Example</h2>
      <p>{teacher.getInfo()}</p>

      <h2>Add Student</h2>
      <div className="input-row">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.getInfo()}</li>
        ))}
      </ul>

      {/* Inline CSS */}
      <style>{`
        body, html, #root {
          height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #0f172a;
          color: #e0f7fa;
          font-family: Arial, sans-serif;
        }

        .app-container {
          background-color: #1e293b;
          padding: 2rem 3rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
          max-width: 700px;
          width: 90%;
          text-align: left;
        }

        h1 {
          text-align: center;
          font-size: 2.5rem;
          color: #38bdf8;
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.5rem;
          color: #f97316;
          border-bottom: 1px solid #334155;
          padding-bottom: 0.5rem;
          margin-top: 2rem;
        }

        p {
          color: #94a3b8;
        }

        .input-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        input {
          flex-grow: 1;
          padding: 10px;
          border: 1px solid #334155;
          border-radius: 5px;
          background-color: #334155;
          color: #e0f7fa;
        }

        input::placeholder {
          color: #94a3b8;
        }

        button {
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          background-color: #22c55e;
          color: #0f172a;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #16a34a;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          background-color: #334155;
          padding: 10px 15px;
          margin-bottom: 8px;
          border-left: 4px solid #22c55e;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}

export default App;
