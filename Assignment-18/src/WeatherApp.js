import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Mumbai');

  useEffect(() => {
    // Basic fetch using free Open-Meteo API
    fetch('https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current_weather=true')
      .then(res => res.json())
      .then(data => {
        setWeather(data.current_weather);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ border: '1px solid #007bff', padding: '15px', width: '300px', margin: '20px auto', textAlign: 'center', background: '#eef7ff' }}>
      <h3>2. Weather Data</h3>
      <p><b>City:</b> {city}</p>
      {weather ? (
        <div>
          <h2>{weather.temperature}°C</h2>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherApp;
