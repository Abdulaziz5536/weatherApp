import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import WeatherCard from "./components/weatherCard";
import { getWeather } from "./services/weatherService";

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (city: string) => {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App ☁️</h1>

      <SearchBar onSearch={handleSearch} />

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;


