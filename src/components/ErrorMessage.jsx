import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';

const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.2);
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-bottom: 15px;
  border-radius: 10px;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
`;

export default function WeatherDashboard() {
  const { error } = useWeather();

  if (error) {
    return (
      <ErrorMessage>
        🚫{' '}
        {error.response?.data?.message ||
          'Something went wrong. Try another city.'}
      </ErrorMessage>
    );
  }
}
