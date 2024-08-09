import { useQuery } from "@tanstack/react-query";
import { weatherService } from "../weather.service";

export const useGetWeather = (city: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => weatherService.getWeatherData(city),
    select: (data) => data.data,
    enabled: !!city,
    staleTime: 300000,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
