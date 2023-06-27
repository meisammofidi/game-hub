import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem pl={2} area="nav">
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem pl={2} bg="gold" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem pl={2} bg="dodgerblue" area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
