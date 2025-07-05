import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    const trimmedInput = input.trim();
    if (trimmedInput !== '') {
      setTasks([...tasks, { text: trimmedInput, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Correct index logic
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
        style={{ padding: '5px', width: '70%' }}
      />
      <button onClick={addTask} style={{ padding: '5px 10px', marginLeft: '5px' }}>
        Add Task
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '8px 0',
              background: '#f4f4f4',
              padding: '8px',
              borderRadius: '5px',
            }}
          >
            <span
              onClick={() => toggleComplete(i)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                flex: 1,
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(i)}
              style={{ marginLeft: '10px', background: 'red', color: 'white', border: 'none', padding: '5px 8px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
