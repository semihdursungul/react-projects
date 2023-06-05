import axios from 'axios';

const API_KEY = 'ENTER-YOUR-API-KEY-HERE';

const weatherService = {
  getCurrentWeather: async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  },

  getHourlyForecast: async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
      );
      return response.data.list;
    } catch (error) {
      console.error('Error fetching hourly forecast:', error);
      throw error;
    }
  },

  getDailyForecast: async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=${API_KEY}&units=metric&cnt=7`
      );
      return response.data.list;
    } catch (error) {
      console.error('Error fetching daily forecast:', error);
      throw error;
    }
  },
};

export default weatherService;
