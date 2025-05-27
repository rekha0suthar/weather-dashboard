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

      const now = new Date();
      const todayDate = now.toLocaleDateString();
      const targetHour = Math.round(now.getHours() / 3) * 3;

      const daily = [];
      const seenDays = new Set();

      for (let item of list) {
        const date = new Date(item.dt_txt);
        const dateStr = date.toLocaleDateString();
        const hour = date.getHours();

        if (
          dateStr !== todayDate &&
          hour === targetHour &&
          !seenDays.has(dateStr)
        ) {
          daily.push(item);
          seenDays.add(dateStr);
        }

        if (daily.length === 5) break;
      }

      setForecast(daily);
    } catch (err) {
      console.error('Error fetching forecast:', err);
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
