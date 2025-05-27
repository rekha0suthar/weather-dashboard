import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';

const CenterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0;
  flex-wrap: wrap;
  gap: 30px;
  color: white;
`;

const TempBlock = styled.div`
  font-size: 44px;
  font-weight: bold;
  text-align: center;
`;

const IconBlock = styled.div`
  text-align: center;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const DetailBlock = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #eee;
`;

const WeatherInfo = () => {
  const { weather, units } = useWeather();

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  const temperature = Math.round(weather.main.temp);

  const description = weather.weather[0].main;
  const icon = weather.weather[0].icon;

  return (
    <CenterBlock>
      <TempBlock>
        {temperature}°{units === 'metric' ? 'C' : 'F'}
        <br />
        <small>{date}</small>
      </TempBlock>

      <IconBlock>
        <Icon
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <DetailBlock>
          <p style={{ textTransform: 'capitalize' }}>{description}</p>
        </DetailBlock>
      </IconBlock>
    </CenterBlock>
  );
};

export default WeatherInfo;
