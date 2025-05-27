import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';

const CenterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0;
`;

const TempBlock = styled.div`
  font-size: 44px;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const WeatherInfo = () => {
  const { weather } = useWeather();

  if (!weather) {
    return null;
  }
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  return (
    <CenterBlock>
      <TempBlock>
        {Math.round(weather?.main.temp)}°
        <br />
        <small>{date}</small>
      </TempBlock>
      <Icon
        src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt="icon"
      />
    </CenterBlock>
  );
};

export default WeatherInfo;
