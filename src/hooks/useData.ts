import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
//FetchResponse mapuje odpowiedź serwera

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  //generyczny parametr typu
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false); //potrzebne do wyświetlania szkieletów kard przy ładowaniu

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig }) //drugi argument to axios request config object
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort(); //cleanup function
  }, deps ? [...deps] : []);
  //jesli jest truthy spread, jesli nie pusta -> musimy to dodac bo jest optional, więc moze byc undefined a nie mozna spread undefined
  return { data, error, isLoading }; //zwracamy te własności by wykorzystać w aplikacji
};

export default useData;
