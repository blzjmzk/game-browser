import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient
      .get<FetchResponse<Genre>>('/genres')
      //korzystamy z apiClient
      //wykorzystujemy obiekt FetchResponse, który mapuje strukturę odpowiedzi serwera
      .then(res=>res.data),
  staleTime: 24 * 60 * 50 * 1000, //24 godziny
  initialData: { count: genres.length, results: genres }
})

export default useGenres;
