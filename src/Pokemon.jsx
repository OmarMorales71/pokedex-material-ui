import React from "react";
import mockData from "./mockData";
import { useState } from "react";
import { Typography, Link } from "@material-ui/core";
import { toFirstCharUpperCase } from "./constants";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;

  const [pokemon, setPokemon] = useState(mockData[pokemonId]);
  console.log(pokemon);
  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return (
      <>
        <Typography variant="h1">
          {`${id}.`} {toFirstCharUpperCase(name)}
          <img src={sprites.front_default} alt={name} />
        </Typography>
        <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          Species:
          {console.log(species.url)}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
    <Typography>Height: {height}</Typography>
    <Typography>Weight: {weight}</Typography>
    <Typography variant="h6">Types:</Typography>
    {types.map(typeInfo=>{
        return <Typography key={typeInfo.type.name}>{typeInfo.type.name}</Typography>
    })}
      </>
    );
  };

  return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
