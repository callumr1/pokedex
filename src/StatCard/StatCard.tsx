import { PokemonStat } from "pokenode-ts";
import { Box, Container, Form, Progress } from "react-bulma-components";
import './StatCard.scss';

function PokemonStatCard(pokeStats: PokemonStat[]){
    return (
      <Container>
        {pokeStats ? Object.keys(pokeStats).map(
          function(x: string){
            let stat = pokeStats[Number(x)];
            return <PokemonStatBar {...stat}/>;
          }
          ) : null}
      </Container>
    )
  }
  
  function PokemonStatBar(stat: PokemonStat){
    let maxValue = 0;
    switch(stat.stat.name){
      case "hp":
        maxValue = 255; break;
      case "attack":
        maxValue = 190; break;
      case "defense":
        maxValue = 230; break;
      case "special-attack":
        maxValue = 194; break;
      case "special-defense":
        maxValue = 230; break;
      case "speed":
        maxValue = 180; break;
      default:
        maxValue = 255; break;
    }
    return (
      <div>
        <div className='statbar-label-container'>
          <Form.Field.Label textAlign="left">{stat.stat.name}</Form.Field.Label>
          <Form.Field.Label textAlign="right">{stat.base_stat}/{maxValue}</Form.Field.Label>
        </div>
        <Progress value={stat.base_stat} max={maxValue}></Progress>
      </div>
    )
    
  }

  export default PokemonStatCard;