import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherMap = ({ weatherData }) => {
  const labels = weatherData.map((data) =>
    new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const temperatureData = weatherData.map((data) => data.temp);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        min: Math.min(...temperatureData) - 1,
        max: Math.max(...temperatureData) + 1,
      },
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      <h2>Weather Map</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeatherMap;
