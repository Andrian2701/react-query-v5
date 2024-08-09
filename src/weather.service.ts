import axios from "axios";
import { IWeather } from "./types/weather.types";

class WeatherService {
  private URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  private KEY = "f6b45147f93f6c3d4c36c4d9eb17b126";

  getWeatherData(city: string) {
    return axios.get<IWeather>(`${this.URL}${city}&appid=${this.KEY}`);
  }
}

export const weatherService = new WeatherService();
