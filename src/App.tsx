import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navbar/NavBar';
import GameGrid from './components/game-grid/GameGrid';
import GenreList from './components/genres/GenreList';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem p={2} area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem paddingEnd={3} area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
