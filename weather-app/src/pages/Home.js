import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import WeatherCard from '../components/WeatherCard';
import weatherService from '../services/weatherService';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';


const Home = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    if (location) {
      weatherService.getCurrentWeather(location)
        .then((data) => setWeatherData(data))
        .catch((error) => console.error('Error fetching current weather:', error));
  
      weatherService.getHourlyForecast(location)
        .then((data) => setHourlyForecast(data))
        .catch((error) => console.error('Error fetching hourly forecast:', error));
  
      weatherService.getDailyForecast(location)
        .then((data) => setDailyForecast(data))
        .catch((error) => console.error('Error fetching daily forecast:', error));
    }
  }, [location]);

  const handleSubmit = (location) => {
    setLocation(location);
  };

  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>React Weather App by semihdursungul</h1>
      <SearchForm onSubmit={handleSubmit} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {hourlyForecast.length > 0 && dailyForecast.length > 0 && (
        <>
          <HourlyForecast hourlyForecast={hourlyForecast} />
          <DailyForecast dailyForecast={dailyForecast} />
        </>
      )}
    </div>
  );
};

export default Home;
