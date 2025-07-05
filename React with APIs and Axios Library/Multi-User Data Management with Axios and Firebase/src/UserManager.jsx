import React, { useEffect, useState } from "react";
import axios from "axios";

const FIREBASE_URL = "https://movies-api-8387a-default-rtdb.asia-southeast1.firebasedatabase.app/users";

function UserManager() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${FIREBASE_URL}.json`);
      const data = response.data;

      if (data) {
        const loadedUsers = Object.entries(data).map(([id, user]) => ({
          id,
          ...user,
        }));
        setUsers(loadedUsers);
      } else {
        setUsers([]);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const validate = (name, email) => {
    if (!name || !email) return "Name and Email are required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate(formData.name, formData.email);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      if (editId) {
        // Edit user
        await axios.patch(`${FIREBASE_URL}/${editId}.json`, formData);
        setEditId(null);
      } else {
        // Add new user
        await axios.post(`${FIREBASE_URL}.json`, formData);
      }

      setFormData({ name: "", email: "" });
      setError("");
      fetchUsers();
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditId(user.id);
    setError("");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${FIREBASE_URL}/${id}.json`);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Management System</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          {editId ? "Update User" : "Add User"}
        </button>
      </form>

      <ul style={styles.userList}>
        {users.map((user) => (
          <li key={user.id} style={styles.userItem}>
            <div>
              <strong>{user.name}</strong> — {user.email}
            </div>
            <div>
              <button onClick={() => handleEdit(user)} style={styles.editBtn}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  userList: {
    listStyle: "none",
    padding: 0,
  },
  userItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#f9f9f9",
  },
  editBtn: {
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: "#ffa000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 10px",
    backgroundColor: "#d32f2f",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default UserManager;
