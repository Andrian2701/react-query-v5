import axios from "axios";
import { API_KEY, API_URL } from "../API";
import { useQuery } from "@tanstack/react-query";
import { IWeather } from "../weather.types";

const getWeatherData = async (city: string) => {
  return axios.get<IWeather>(`${API_URL}${city}&appid=${API_KEY}`);
};

export const useGetWeather = (city: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherData(city),
    select: (data) => data.data,
    enabled: !!city,
    staleTime: 10000,
    retry: 2,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
