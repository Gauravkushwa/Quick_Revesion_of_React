import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle search
  useEffect(() => {
    const filteredList = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredList);
  }, [search, users]);

  return (
    <div className="app">
      <h1>User Profiles</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />

          <div className="user-list">
            {filtered.length > 0 ? (
              filtered.map((user) => <UserCard key={user.id} user={user} />)
            ) : (
              <p>No users found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
