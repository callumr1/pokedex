import { PokemonType } from "pokenode-ts";
import { Container, Tag } from "react-bulma-components";
import './TypeTags.scss';

function PokemonTypeTags(pokeTypes: PokemonType[]){
    console.log(pokeTypes);
    return (
        <Container className="type-tags-container">
            {pokeTypes ? Object.keys(pokeTypes).map(
                function(x: string){
                    let type = pokeTypes[Number(x)];
                    return <TypeTag {...type}/>;
                }
            ) : null}
        </Container>
    )
}

function TypeTag(type: PokemonType){
    return (
        <Tag size={'large'}>{type.type.name}</Tag>
    )
}

export default PokemonTypeTags