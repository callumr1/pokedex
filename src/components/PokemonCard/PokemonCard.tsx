import { Pokemon } from "pokenode-ts";
import { Card, Columns } from "react-bulma-components";
import { capitalise } from "../../services/sharedUtils";
import PokemonBiometricTags from "../BiometricTags/BiometricTags";
import PokemonSprite from "../Sprite/Sprite";
import PokemonStatCard from "../StatCard/StatCard";
import PokemonTypeTags from "../TypeTags/TypeTags";

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

  export default PokemonCard;