import { StarIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";

type RatingProps = {
  value: number;
  max?: number;
};

const Rating = ({ value, max = 5 }: RatingProps) => {
  return (
    <Box display="flex">
      {Array(max)
        .fill("")
        .map((_, i) => (
          <Icon key={i} as={StarIcon} color={i < Math.floor(value) ? "yellow.400" : "gray.300"} />
        ))}
    </Box>
  );
};

export default Rating;
