import { Link } from "react-router-dom";
import { IWeather } from "../types/weather.types";

export const SavedLocation = ({ item }: { item: IWeather | undefined }) => {
  return (
    <Link to={`weather/${item?.name}`} className="saved-location">
      <h2>{item?.name}</h2>
      <h2>{item && Math.round(item.main.temp - 273)}°C</h2>
    </Link>
  );
};
