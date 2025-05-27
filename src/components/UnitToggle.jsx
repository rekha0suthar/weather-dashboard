import styled from 'styled-components';
import { useWeather } from '../context/WeatherContext';

const ToggleWrapper = styled.div`
  display: flex;
  margin: 15px auto;
  flex: 1;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 20px;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  color: ${({ active }) => (active ? '#333' : '#fff')};
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: 0.3s;

  &:hover {
    background-color: ${({ active }) =>
      active ? '#fff' : 'rgba(255,255,255,0.2)'};
  }
`;

export default function UnitToggle() {
  const { units, toggleUnits } = useWeather();

  return (
    <ToggleWrapper>
      <ToggleButton
        onClick={() => units !== 'metric' && toggleUnits()}
        active={units === 'metric'}
      >
        °C
      </ToggleButton>
      <ToggleButton
        onClick={() => units !== 'imperial' && toggleUnits()}
        active={units === 'imperial'}
      >
        °F
      </ToggleButton>
    </ToggleWrapper>
  );
}
