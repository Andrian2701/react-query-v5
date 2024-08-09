import { IWeather } from "../types/weather.types";

export const WeatherDetails = ({ data }: { data: IWeather | undefined }) => {
  return (
    <>
      <div className="top">
        <p>{data?.name}</p>
        <h1>{data && Math.round(data?.main.temp - 273)}°C</h1>
        <p>{data?.weather[0].description}</p>
      </div>
      <ul className="bottom">
        <li>
          <span>Feels like:</span>{" "}
          {data && Math.round(data?.main.feels_like - 273)}°C
        </li>
        <li>
          <span>Wind:</span> {data?.wind.speed}km/h
        </li>
        <li>
          <span>Pressure:</span> {data?.main.pressure}hPa
        </li>
        <li>
          <span>Humidity:</span> {data?.main.humidity}%
        </li>
      </ul>
    </>
  );
};
