import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres from '../../hooks/useGenres';

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();
  const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (isLoading) {
    return genreSkeletons.map((genre) => (
      <Box key={genre} padding="6" boxShadow="lg" bg="dark">
        <SkeletonCircle size="5" />
        <SkeletonText mt="4" noOfLines={1} />
      </Box>
    ));
  }
  return (
    <List>
      {genres &&
        genres.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
