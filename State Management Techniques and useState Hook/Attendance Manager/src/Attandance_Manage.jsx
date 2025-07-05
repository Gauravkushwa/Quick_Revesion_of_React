import React, { useState } from 'react';
import './App.css'

function AttendanceManager() {
  // Sample students
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', present: true },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: true },
    { id: 4, name: 'David', present: false },
    { id: 5, name: 'Eva', present: true },
    { id: 6, name: 'Gaurav', present: true },
    { id: 7, name: 'Shiv', present: true },
    { id: 8, name: 'Seet', present: true },
  ]);

  const [filter, setFilter] = useState('All');

  // Toggle attendance
  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  // Filtered list
  const filteredStudents = students.filter((student) => {
    if (filter === 'All') return true;
    return filter === 'Present' ? student.present : !student.present;
  });

  // Count present students
  const presentCount = students.filter((s) => s.present).length;

  return (
    <div className="attendance-container">
      <h2>🎓 Attendance Manager</h2>

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option>All</option>
        <option>Present</option>
        <option>Absent</option>
      </select>

      {/* Student List */}
      <ul className="student-list">
        {filteredStudents.map((student) => (
          <li
            key={student.id}
            className={`student-item ${student.present ? 'present' : 'absent'}`}
          >
            <span>{student.name}</span>
            <span>Status: {student.present ? 'Present' : 'Absent'}</span>
            <button onClick={() => toggleAttendance(student.id)}>Toggle</button>
          </li>
        ))}
      </ul>

      {/* Summary */}
      <div className="summary">
        Total Present: <strong>{presentCount}</strong> / {students.length}
      </div>
    </div>
  );
}

export default AttendanceManager;
