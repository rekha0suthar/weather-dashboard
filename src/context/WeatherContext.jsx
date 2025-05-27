import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const WeatherContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem('city') || 'London');
  const [units, setUnits] = useState('metric'); // 'metric' for °C, 'imperial' for °F

  const toggleUnits = () => {
    setUnits((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  const fetchWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    return res.data;
  };

  const fetchForecast = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`
    );
    const list = res.data.list;
    const today = new Date().toLocaleDateString();

    const dailyMap = new Map();
    for (const item of list) {
      const dateStr = new Date(item.dt_txt).toLocaleDateString();
      if (dateStr !== today && !dailyMap.has(dateStr)) {
        dailyMap.set(dateStr, item);
      }
      if (dailyMap.size === 5) break;
    }

    return Array.from(dailyMap.values());
  };

  const {
    data: weather,
    isLoading: weatherLoading,
    error: weatherError,
  } = useQuery({
    queryKey: ['weather', city, units],
    queryFn: fetchWeather,
    refetchInterval: 30000,
  });

  const {
    data: forecast,
    isLoading: forecastLoading,
    error: forecastError,
  } = useQuery({
    queryKey: ['forecast', city, units],
    queryFn: fetchForecast,
    refetchInterval: 30000,
  });

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        forecast,
        units,
        toggleUnits,
        error: weatherError || forecastError,
        loading: weatherLoading || forecastLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
