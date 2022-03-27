import { Pokemon, PokemonClient } from "pokenode-ts";

export async function getPokemon(pokemon: string){
    const api = new PokemonClient();
    await api.getPokemonByName(pokemon)
                .then((data) => console.log(data))
                .catch((error) => console.error(error))
}