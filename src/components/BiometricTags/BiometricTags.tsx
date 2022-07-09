import { Pokemon } from "pokenode-ts";
import { Container, Tag } from "react-bulma-components";
import './BiometricTags.scss';

function PokemonBiometricTags(pokemon: Pokemon){
    return (
        <Container className="bio-tags-container">
            <Tag size={"large"} rounded>Height: {pokemon.height/10}m</Tag>
            <Tag size={"large"} rounded>Weight: {pokemon.weight/10}kg</Tag>
        </Container>
    )
}

export default PokemonBiometricTags;