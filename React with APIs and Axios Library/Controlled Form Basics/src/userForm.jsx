import React, { useState } from "react";
import './App.css'

function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (error) setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username cannot be empty!");
    } else {
      alert(`Submitted username: ${username}`);
      setUsername(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UsernameForm;
