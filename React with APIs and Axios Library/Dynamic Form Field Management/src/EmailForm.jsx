import React, { useState } from "react";

function EmailForm() {
  const [emails, setEmails] = useState([{ value: "", isValid: true }]);

  const handleAddEmail = () => {
    setEmails([...emails, { value: "", isValid: true }]);
  };

  const handleChange = (index, e) => {
    const newEmails = [...emails];
    const newValue = e.target.value;
    const isValidEmail = validateEmail(newValue);
    newEmails[index] = { value: newValue, isValid: isValidEmail };
    setEmails(newEmails);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div style={styles.container}>
      <h2>Add Multiple Emails</h2>
      <form>
        {emails.map((emailObj, index) => (
          <div key={index} style={styles.inputGroup}>
            <input
              type="email"
              value={emailObj.value}
              onChange={(e) => handleChange(index, e)}
              placeholder={`Email ${index + 1}`}
              style={{
                ...styles.input,
                borderColor: emailObj.isValid ? "#ccc" : "red"
              }}
            />
            {!emailObj.isValid && (
              <p style={styles.error}>Invalid email format</p>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddEmail} style={styles.button}>
          Add Email
        </button>
      </form>

      <h3>Entered Emails:</h3>
      <ul>
        {emails.map((email, index) =>
          email.value ? <li key={index}>{email.value}</li> : null
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    fontFamily: "Arial, sans-serif"
  },
  inputGroup: {
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginTop: "5px"
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px"
  }
};

export default EmailForm;
