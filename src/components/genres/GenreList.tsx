import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../../hooks/useGenres';

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <List>
      {genres &&
        genres.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack>
              <Image src={genre.image_background} boxSize='32px' borderRadius={8}/>
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
