import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredText = inputRef.current.value;

    if (enteredText.trim() === "") {
      alert("Please enter a value!");
    } else {
      alert(`Submitted: ${enteredText}`);
      inputRef.current.value = ""; // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text:
        <input type="text" ref={inputRef} placeholder="Type something..." />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
