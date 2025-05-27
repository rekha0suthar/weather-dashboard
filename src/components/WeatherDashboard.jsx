import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';
import Forecast from './Forecast';
import WeatherInfo from './WeatherInfo';

const DashboardCard = styled.div`
  width: 90%;
  max-width: 720px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 20px;
  color: #fff;
  background: linear-gradient(to bottom, #5e8ecf, #6fc182);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  opacity: 0.9;
`;

const WeatherDashboard = () => {
  const { weather, city } = useWeather();

  if (!weather) return null;

  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const formatCity = (city) =>
    city
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <DashboardCard>
      <TopRow>
        <div>{formatCity(city)}</div>
        <div>{time}</div>
      </TopRow>

      <WeatherInfo />

      <Forecast />
    </DashboardCard>
  );
};

export default WeatherDashboard;
