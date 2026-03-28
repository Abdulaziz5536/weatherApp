import React from "react";
import "./card.css";

interface Props {
  weather: any;
}

const WeatherCard: React.FC<Props> = ({ weather }) => {
  return (
    <div className="weather-card">
      <h1 id="degree">{weather.main.temp}°C</h1>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}</p>
      <p>Wind: {weather.wind.speed}</p>
    </div>
  );
};

export default WeatherCard;