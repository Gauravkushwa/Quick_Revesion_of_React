import React from "react";

const ThemedBox = ({ theme, text }) => {
  const styles = {
    padding: "2rem",
    width: "150px",
    borderRadius: "8px",
    backgroundColor: theme === "light" ? "#fff" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  return <div style={styles}>{text}</div>;
};

export default ThemedBox;
