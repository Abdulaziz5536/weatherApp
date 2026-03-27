import React,{ useState } from 'react'
import './App.css'
import { getWeather } from './weather'

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    const data = await getWeather(city);
    setWeather(data);
  };

  return (
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city"/>
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App
