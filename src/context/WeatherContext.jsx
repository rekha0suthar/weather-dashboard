import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const WeatherContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(localStorage.getItem('city') || 'Bangalore');
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setError(null);
    } catch (err) {
      setError('Could not fetch Weather. Please check city name.');
      console.log(err);
      setWeather(null);
    }
  };

  const fetchForecast = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const list = res.data.list;
      const today = new Date().toLocaleDateString();

      const dailyMap = new Map();

      for (const item of list) {
        const date = new Date(item.dt_txt);
        const dateStr = date.toLocaleDateString();

        if (dateStr !== today && !dailyMap.has(dateStr)) {
          dailyMap.set(dateStr, item);
        }

        if (dailyMap.size === 5) break;
      }

      setForecast(Array.from(dailyMap.values()));
    } catch (err) {
      console.error('Forecast error:', err);
    }
  };

  useEffect(() => {
    localStorage.setItem('city', city);
  }, [city]);

  useEffect(() => {
    fetchWeather();
    fetchForecast();
    const interval = setInterval(() => {
      fetchWeather();
      fetchForecast();
    }, 30000);
    return () => clearInterval(interval);
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{ weather, city, error, setCity, forecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
