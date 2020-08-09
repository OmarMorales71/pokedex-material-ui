import React from "react";

import { useState } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { toFirstCharUpperCase } from "./constants";
import axios from "axios";
import { useEffect } from "react";
const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;

  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    ).then(response=>{
        const { data } = response;
        setPokemon(data);
    }).catch(error=>{
        setPokemon(false)
    }) 
  }, [])
  //pokemon=undefined

  //pokemon=good data

  //pokemon = not found
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
        {types.map((typeInfo) => {
          return (
            <Typography key={typeInfo.type.name}>
              {typeInfo.type.name}
            </Typography>
          );
        })}
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          Back to Pokedex
        </Button>
      )}
    </>
  );
};

export default Pokemon;
