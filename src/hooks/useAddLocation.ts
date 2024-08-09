import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addLocation = async (location: string) => {
  await setDoc(doc(db, "saved-locations", location), {
    location: location,
  });
};

export const useAddLocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (city: string) => addLocation(city),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["saved-locations"] });
      alert("Location successfully added");
    },
    onError: () => {
      alert("Failed to add location");
    },
  });
};
