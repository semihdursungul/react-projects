import React from 'react';

const DailyForecast = ({ dailyData }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      <h2>Daily Forecast</h2>
      {dailyData && dailyData.map((forecast) => (
        <div key={forecast.dt}>
          <div>Date: {new Date(forecast.dt * 1000).toLocaleDateString()}</div>
          <div>Temperature: {forecast.temp.day}°C</div>
          <div>Weather: {forecast.weather[0].description}</div>
          <div>Humidity: {forecast.humidity}%</div>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
