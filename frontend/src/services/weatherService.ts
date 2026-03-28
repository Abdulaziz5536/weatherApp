import axios from "axios";

const API_KEY = "2d56abc0e7c61bf5d885f0b9984cc83a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};