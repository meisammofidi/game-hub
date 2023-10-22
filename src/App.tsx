import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navbar/NavBar';
import GameGrid from './components/game-grid/GameGrid';
import GenreList from './components/genres/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/platform/PlatformSelector';
import { Platform } from './hooks/useGames';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <GridItem p={2} area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem paddingEnd={3} area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
