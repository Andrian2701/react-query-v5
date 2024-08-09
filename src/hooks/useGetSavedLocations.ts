import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ISavedLocation } from "../types/saved-location.types";

const getSavedLocationsData = async (): Promise<ISavedLocation[]> => {
  const querySnapshot = await getDocs(collection(db, "saved-locations"));

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const useGetSavedLocations = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["saved-locations"],
    queryFn: () => getSavedLocationsData(),
    refetchInterval: 300000,
    staleTime: 300000,
  });

  return {
    savedLocations: data,
    isLoading,
    isError,
    isSuccess,
  };
};
