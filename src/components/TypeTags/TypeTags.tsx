import { PokemonType } from "pokenode-ts";
import { Container, Tag } from "react-bulma-components";
import { capitalise } from "../../services/sharedUtils";
import './TypeTags.scss';

function PokemonTypeTags(pokeTypes: PokemonType[]){
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
        <Tag className={type.type.name} size={'large'} rounded>{capitalise(type.type.name)}</Tag>
    )
}

export default PokemonTypeTags;