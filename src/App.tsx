import { useEffect, useState } from 'react';
import './App.scss';
import pokeball from './images/pokeball.svg';
import { Container, Form, Button, Image, Panel } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {

  const [search, setSearch] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('pikachu');
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    (async function getPokemon() {
      const api = new PokemonClient();
      await api.getPokemonByName(searchTerm)
                .then((data) => {
                    setPokemon(data);
                })
                .catch((error) => console.error(error));
    })();
  }, [searchTerm]);

  function handleSubmit(){
      setSearchTerm(search);
  } 

  return (
    <div className="App">
      <Container className='pokedex-container'>
        <Panel className='pokedex-body'>
          <Panel.Header className="bg-red">Pokedex</Panel.Header>
          <Panel.Block className="bg-grey">
            <Form.Field kind="addons">
              <Form.Control fullwidth>
                <Form.Input placeholder="search pokemon" type="text" onChange={e => setSearch(e.target.value)}>
                </Form.Input>
              </Form.Control>
              <Form.Control>
                <Button onClick={handleSubmit}>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Button>
              </Form.Control>
            </Form.Field>
          </Panel.Block>
          <Panel.Block className='bg-grey pokedex-content'>
            {pokemon != null ? <PokemonCard {...pokemon} /> : <p>Loading...</p>}
          </Panel.Block>
          <Panel.Block className='bg-red pokedex-footer'>
            <Image src={pokeball} className="pokeball"></Image>
          </Panel.Block>
        </Panel>
      </Container>
    </div>
  );
}

export default App;
