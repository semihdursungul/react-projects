import React from 'react';

const HourlyForecast = ({ hourlyData }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      <h2>Hourly Forecast</h2>
      {hourlyData && hourlyData.map((forecast) => (
        <div key={forecast.dt}>
          <div>Time: {new Date(forecast.dt * 1000).toLocaleTimeString()}</div>
          <div>Temperature: {forecast.temp}°C</div>
          <div>Weather: {forecast.weather[0].description}</div>
          <div>Humidity: {forecast.humidity}%</div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
