import React, { useEffect, useState } from 'react';
import './App.scss';
import pokeball from './images/pokeball.svg';
import { Container, Form, Button, Image, Panel, Card, Box, Progress, Columns } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Pokemon, PokemonClient, PokemonStat } from 'pokenode-ts';
import PokemonStatCard from './components/StatCard/StatCard';
import PokemonTypeTags from './components/TypeTags/TypeTags';
import PokemonSprite from './components/Sprite/Sprite';
import PokemonBiometricTags from './components/BiometricTags/BiometricTags';
import { capitalise } from './services/sharedUtils';

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

function PokemonCard(pokemon: Pokemon){
  return (
    <Card className='pokemon-card'>
      <Card.Header>
        <Card.Header.Title>{capitalise(pokemon.name)}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Columns>
          <Columns.Column>
            <PokemonSprite {...pokemon.sprites} />
          </Columns.Column>
          <Columns.Column>
            <PokemonStatCard {...pokemon.stats} />
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <PokemonTypeTags {...pokemon.types} />
          </Columns.Column>
          <Columns.Column>
            <PokemonBiometricTags {...pokemon} />
          </Columns.Column>
        </Columns>
      </Card.Content>
    </Card>
    
  )
}


export default App;
