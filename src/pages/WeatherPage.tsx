import { useParams } from "react-router-dom";
import { useGetWeather } from "../hooks/useGetWeather";

export const WeatherPage = () => {
  const { city } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetWeather(city ?? "");

  return (
    <div className="weather-page">
      <div className="data">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to load</p>}
        {isSuccess && (
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
        )}
      </div>
    </div>
  );
};
