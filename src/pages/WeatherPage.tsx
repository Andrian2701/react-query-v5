import { Link, useParams } from "react-router-dom";
import { useGetWeather } from "../hooks/useGetWeather";
import { useAddLocation } from "../hooks/useAddLocation";
import { WeatherDetails } from "../components/WeatherDetails";

export const WeatherPage = () => {
  const { city } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetWeather(city ?? "");
  const { mutate: addLocation } = useAddLocation();

  return (
    <div className="weather-page">
      <div className="data">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to load</p>}
        {isSuccess && (
          <>
            <WeatherDetails data={data} />
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
          </>
        )}
      </div>
    </div>
  );
};
