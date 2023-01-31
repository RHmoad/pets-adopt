import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./FetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery([animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
