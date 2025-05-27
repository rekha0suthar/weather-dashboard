import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';

const ErrorBox = styled.div`
  color: red;
  margin-top: 10px;
  text-align: center;
`;

const ErrorMessage = () => {
  const { error } = useWeather();
  return error ? <ErrorBox>{error}</ErrorBox> : null;
};

export default ErrorMessage;
