import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Priority Rank
  const priorityRank = { High: 3, Medium: 2, Low: 1 };

  // Add Task
  const addTask = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      priority,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    sortAndSetTasks(updatedTasks);
    setTitle('');
    setPriority('Medium');
  };

  // Sort tasks by priority
  const sortAndSetTasks = (tasksList) => {
    const sorted = [...tasksList].sort(
      (a, b) => priorityRank[b.priority] - priorityRank[a.priority]
    );
    setTasks(sorted);
  };

  // Toggle Completion
  const toggleCompletion = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    sortAndSetTasks(updated);
  };

  // Delete Task
  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    sortAndSetTasks(updated);
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      priorityFilter === 'All' || task.priority === priorityFilter;
    const matchesStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Completed' && task.completed) ||
      (statusFilter === 'Incomplete' && !task.completed);

    return matchesPriority && matchesStatus;
  });

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>📝 Advanced Task Manager</h2>

      {/* Task Input */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          style={{ flex: 1, padding: '6px' }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: '6px' }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask} style={{ padding: '6px 10px' }}>
          Add
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          style={{ padding: '6px' }}
        >
          <option value="All">All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: '6px' }}
        >
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.length === 0 && (
          <p style={{ textAlign: 'center' }}>No tasks to display.</p>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              backgroundColor: task.priority === 'High' ? '#ffe5e5' : '#f4f4f4',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderLeft:
                task.priority === 'High' ? '4px solid red' : '4px solid gray',
            }}
          >
            <div
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                flex: 1,
                cursor: 'pointer',
              }}
              onClick={() => toggleCompletion(task.id)}
              title="Click to toggle completion"
            >
              <strong>{task.title}</strong> {' '}
              <span style={{ fontSize: '0.9em', color: 'gray' }}>
                ({task.priority})
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                background: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 8px',
                borderRadius: '4px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
