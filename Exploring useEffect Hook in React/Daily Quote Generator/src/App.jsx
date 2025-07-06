import React, { useEffect, useState } from "react";
import "./App.css";

const QuoteViewer = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initially and every 30 seconds
  useEffect(() => {
    fetchQuote(); // initial
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="container">
      <h1>Daily Quote Viewer</h1>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        quote && (
          <div className="quote-box">
            <p className="quote">"{quote.content}"</p>
            <p className="author">- {quote.author}</p>
          </div>
        )
      )}

      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "Loading..." : "Get New Quote"}
      </button>
    </div>
  );
};

export default QuoteViewer;
