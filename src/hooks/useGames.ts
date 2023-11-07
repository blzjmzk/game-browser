import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //problem designu tego api, ze wyglada w ten sposób
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre.id}, [selectedGenre?.id]});

export default useGames;
