import { SavedLocation } from "../components/SavedLocation";
import { SearchFiled } from "../components/SearchField";
import { useGetSavedLocationsWeather } from "../hooks/useGetSavedLocationsWeather";
import { useGetSavedLocations } from "../hooks/useGetSavedLocations";

export const HomePage = () => {
  const { savedLocations } = useGetSavedLocations();
  const { savedLocationWeather, isPending, isError } =
    useGetSavedLocationsWeather(
      savedLocations?.map((item) => item.location) ?? []
    );

  return (
    <div className="home-page">
      <SearchFiled />
      <div className="saved-locations">
        {!isPending ? (
          savedLocationWeather.map((item) => (
            <SavedLocation item={item} key={item && item.id} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
        {isError && <h2>Failed to load data</h2>}
      </div>
    </div>
  );
};
