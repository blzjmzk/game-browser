import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreID = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* lista bez punktorów */}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => setSelectedGenreID(genre.id)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
