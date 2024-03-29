import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/spinner";
import { Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAtrributes from "../components/GameAtrributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //dodają ! zaznaczamy, ze nigdy nie będzie null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAtrributes game={game} />
    </>
  );
};

export default GameDetailPage;
