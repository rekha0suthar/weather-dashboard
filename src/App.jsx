import { WeatherProvider } from './context/WeatherContext';
import GlobalStyle from './styles/GlobalStyle';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import WeatherDashboard from './components/WeatherDashboard';
import styled from 'styled-components';

const CenterContainer = styled.div`
  height: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SearchCard = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: white;
  padding: 10px;
  text-align: center;
`;

const App = () => {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <CenterContainer>
        <Title>Weather Dashboard</Title>
        <SearchCard>
          <SearchBar />
        </SearchCard>
        <ErrorMessage />
        <WeatherDashboard />
      </CenterContainer>
    </WeatherProvider>
  );
};

export default App;
