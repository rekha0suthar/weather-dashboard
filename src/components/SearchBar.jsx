import { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border-radius: 50px;
  border: none;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setCity } = useWeather();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setCity(searchTerm);
    }
  };

  return (
    <div>
      <Input
        placeholder="Enter city name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
    </div>
  );
};

export default SearchBar;
