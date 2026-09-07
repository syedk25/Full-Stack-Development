import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Import the new CSS file

const API_KEY = "5cff51d283e8d1a40252ad144b8cdbcd";

// Helper function to get weather icon and background class
const getWeatherDisplay = (weatherCondition) => {
  const condition = weatherCondition ? weatherCondition.toLowerCase() : '';
  let icon = '❓'; // Default icon
  let className = '';

  if (condition.includes('clear')) { icon = '☀️'; className = 'clear'; }
  else if (condition.includes('cloud')) { icon = '☁️'; className = 'clouds'; }
  else if (condition.includes('rain')) { icon = '🌧️'; className = 'rain'; }
  else if (condition.includes('drizzle')) { icon = '🌦️'; className = 'drizzle'; }
  else if (condition.includes('thunderstorm')) { icon = '⛈️'; className = 'thunderstorm'; }
  else if (condition.includes('snow')) { icon = '❄️'; className = 'snow'; }
  else if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) { icon = '🌫️'; className = 'mist'; }

  return { icon, className };
};

function App() {
  const [weather, setWeather] = React.useState(null);
  const [city, setCity] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const API_KEY = "5cff51d283e8d1a40252ad144b8cdbcd";

  async function getWeather() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        setWeather(null);
        toast.error(data.message);
      }
    } catch (error) {
      setWeather(null);
      toast.error("Failed to fetch weather data");
    } finally {
      setIsLoading(false);
    }
  }

  const handleSearch = () => {
    if (city.trim() !== "") {
      getWeather();
    } else {
      toast.warn("Please enter a city name");
    }
  };

  const { icon, className } = getWeatherDisplay(weather?.weather[0]?.main);

  return (
    <div className={`weather-app-container ${className}`}>
      <h1>Weather App</h1>
      <form className="search-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }} autoCapitalize=''>
        <input type="text" placeholder="Enter city name" value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Get Weather"}
        </button>
      </form>

      {weather && (
        <div className="weather-info">
          <div className="weather-icon">{icon}</div>
          <h2>City : {weather.name}</h2>
          <h3>Feels Like : {weather.main.feels_like} °C</h3>
          <h3>Temperature: {weather.main.temp} °C</h3>
          <h3>Humidity: {weather.main.humidity} %</h3>
          <h3>Wind Speed: {weather.wind.speed} m/s</h3>
          <h3>Weather: {weather.weather[0].description}</h3>
        </div>
      )}
      <ToastContainer position="bottom-center" autoClose={3000} theme="dark" />
    </div>
  )
}

export default App