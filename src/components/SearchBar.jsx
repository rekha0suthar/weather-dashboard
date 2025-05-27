import { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 300px;
  margin: 10px;
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
