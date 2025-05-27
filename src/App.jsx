import { WeatherProvider } from './context/WeatherContext';
import GlobalStyle from './styles/GlobalStyle';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import WeatherDashboard from './components/WeatherDashboard';

const App = () => {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <ErrorMessage />
        <WeatherDashboard />
      </div>
    </WeatherProvider>
  );
};

export default App;
