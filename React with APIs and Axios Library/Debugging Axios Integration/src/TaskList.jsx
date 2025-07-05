import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const fetchData = () => {
    axios
      .get("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        const data = response.data;

        if (data) {
       
          const tasksArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setTasks(tasksArray);
        } else {
          setTasks([]); 
        }

        setError("");
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        setError("Failed to fetch tasks. Please try again later.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto" }}>
      <h1>Task List</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
