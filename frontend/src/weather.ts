import axios from "axios";

const API_KEY = "2a752eeed8f0420ca2fe630bff01876b";
const BASE_URL = "https://api.weatherbit.io/v2.0/current";

interface WeatherResponse {
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
  name: string;
}

export const getWeather = async (city: string): Promise<WeatherResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};