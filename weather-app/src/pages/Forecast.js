import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import weatherService from '../services/weatherService';

const Forecast = () => {
  const [hourlyData, setHourlyData] = useState(null);
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    // Fetch hourly forecast data
    const fetchHourlyForecast = async () => {
      try {
        const data = await weatherService.fetchHourlyForecast();
        setHourlyData(data);
      } catch (error) {
        console.error('Error fetching hourly forecast:', error);
      }
    };
    fetchHourlyForecast();

    // Fetch daily forecast data
    const fetchDailyForecast = async () => {
      try {
        const data = await weatherService.fetchDailyForecast();
        setDailyData(data);
      } catch (error) {
        console.error('Error fetching daily forecast:', error);
      }
    };
    fetchDailyForecast();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <Header />
        <h1>Weather Forecast</h1>
        <HourlyForecast hourlyData={hourlyData} />
        <DailyForecast dailyData={dailyData} />
      </div>
    </div>
  );
};

export default Forecast;
