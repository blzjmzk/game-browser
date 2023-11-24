import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        //korzystamy z apiClient
        //wykorzystujemy obiekt FetchResponse, który mapuje strukturę odpowiedzi serwera
        .then(res=>res.data),
    staleTime: 24 * 60 * 50 * 1000, //24 godziny
    initialData: { count: platforms.length, results: platforms }
  })

export default usePlatforms;