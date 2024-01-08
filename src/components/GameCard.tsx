import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

//zapewniamy game object jako prop do tego komponentu z effect hook
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={/games/ + game.slug}>
            {game.name} <Emoji rating={game.rating_top} />
          </Link>
          {game.esrb_rating && game.esrb_rating.name && (
            <p>Ocena ESRB: {game.esrb_rating.name}</p>
          )}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
