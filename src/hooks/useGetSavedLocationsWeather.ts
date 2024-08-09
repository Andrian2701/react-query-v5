import { useQueries } from "@tanstack/react-query";
import { weatherService } from "../weather.service";

export const useGetSavedLocationsWeather = (cities: string[]) => {
  const weatherQueries = useQueries({
    queries: cities.map((city) => ({
      queryKey: ["saved-locations-weather", city],
      queryFn: () => weatherService.getWeatherData(city),
      enabled: !!cities,
      staleTime: 300000,
    })),
  });

  return {
    isPending: weatherQueries.some((query) => query.isPending),
    isError: weatherQueries.some((query) => query.isError),
    savedLocationWeather: weatherQueries.map((query) => query.data?.data),
  };
};
