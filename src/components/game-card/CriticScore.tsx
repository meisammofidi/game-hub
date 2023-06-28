import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? 'green' : score > 75 ? 'yellow' : '';
  return (
    <Badge color={color} fontSize="16px" paddingX={2} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
