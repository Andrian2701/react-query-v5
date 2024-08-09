import { Link, useParams } from "react-router-dom";
import { useGetWeather } from "../hooks/useGetWeather";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const WeatherPage = () => {
  const { city } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetWeather(city ?? "");

  const addLocation = async (location: string) => {
    await setDoc(doc(db, "saved-locations", location), {
      location: location,
    });
  };

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
        <Link
          to="#"
          className="add-location"
          onClick={() => {
            if (!data) return;
            addLocation(data?.name);
          }}
        >
          Add
        </Link>
      </div>
    </div>
  );
};
