import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  //odtwarzamy obiekt response z wybranymi własnościami tak, jak jest w dokumentacji
  count: number;
  results: Game[];
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort(); //cleanup function
  }, []);
  return { games, error }; //zwracamy te własności by wykorzystać w aplikacji
};

export default useGames;
