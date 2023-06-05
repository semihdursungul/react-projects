import React from 'react';
import Header from '../components/Header';
import WeatherMap from '../components/WeatherMap';

const Map = ({ weatherData }) => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <h1>Weather Map</h1>
        <WeatherMap weatherData={weatherData} />
      </div>
    </div>
  );
};

export default Map;
