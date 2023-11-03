import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
        {/* aplikujemy te same style co do karty  */}
      <Skeleton height="200px" />
      {/* ten komponent jest wbudowany do chakra  */}
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
