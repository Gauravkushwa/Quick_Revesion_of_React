import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_EMBED_API_KEY';

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        setError('');
      })
      .catch((err) => {
        setError('City not found.');
        setWeather(null);
      });
  }, [city]);

  if (error) return <p style={{ padding: '20px', color: 'red' }}>{error}</p>;
  if (!weather) return <p style={{ padding: '20px' }}>Loading weather...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Weather in {weather.name}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
      <p><strong>Humidity:</strong> {weather.main.humidity} %</p>
      <p><strong>Condition:</strong> {weather.weather[0].description}</p>

      {/* Bonus: Google Map Embed */}
      <h3>Location on Map:</h3>
      <iframe
        title="map"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${city}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WeatherDetails;
