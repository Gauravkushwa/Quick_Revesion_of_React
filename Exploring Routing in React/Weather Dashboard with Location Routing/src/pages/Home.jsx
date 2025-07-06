import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city.trim()}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Weather by City</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Search</button>
      </form>
    </div>
  );
};
 
export default Home;
