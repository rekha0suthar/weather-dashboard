import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';
import Forecast from './Forecast';
import WeatherInfo from './WeatherInfo';

const DashboardCard = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 20px;
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
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
        <h2>{formatCity(city)}</h2>
        <h2>{time}</h2>
      </TopRow>

      <WeatherInfo />

      <Forecast />
    </DashboardCard>
  );
};

export default WeatherDashboard;
