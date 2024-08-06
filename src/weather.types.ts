export interface IWeather {
  name: string;
  weather: [
    {
      description: string;
    }
  ];
  main: {
    feels_like: number;
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}
