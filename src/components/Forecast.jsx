import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';

const ForecastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

const ForecastItem = styled.div`
  flex: 1;
  min-width: 100px;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 10px;
  text-align: center;
  color: white;
`;

const FallbackMessage = styled.p`
  color: white;
  text-align: center;
`;

export default function Forecast() {
  const { forecast, units, loading } = useWeather();

  if (loading) return <FallbackMessage>Loading forecast...</FallbackMessage>;
  if (!forecast || forecast.length === 0)
    return <FallbackMessage>No forecast data available.</FallbackMessage>;

  return (
    <ForecastRow>
      {forecast.map((item, index) => {
        const date = new Date(item.dt_txt);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
        const fullDate = date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
        });

        return (
          <ForecastItem key={index}>
            <p>{weekday}</p>
            <p style={{ fontSize: '0.9rem' }}>{fullDate}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="icon"
              width="50"
            />
            <p>
              {Math.round(item.main.temp)}°{units === 'metric' ? 'C' : 'F'}
            </p>
            <p style={{ fontSize: '0.8rem' }}>{item.weather[0].main}</p>
          </ForecastItem>
        );
      })}
    </ForecastRow>
  );
}
