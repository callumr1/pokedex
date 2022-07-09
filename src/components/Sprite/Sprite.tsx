import { PokemonSprites } from "pokenode-ts";
import { Image } from "react-bulma-components"
import './Sprite.scss';

function PokemonSprite(sprite: PokemonSprites){
    return (
        <div className="pokemon-sprite-container">
            <Image className="pokemon-sprite" src={sprite.front_default ? sprite.front_default : ""}></Image>
        </div>
    )
}

export default PokemonSprite;