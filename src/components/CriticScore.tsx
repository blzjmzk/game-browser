import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {/* vertical padding */}
      {/* colorScheme rózni sie od kolor tym, ze dot. wszystkich kolorów elementu, ktory dotyczy: border, background, etc  */}
      {score}
    </Badge>
  );
};

export default CriticScore;
