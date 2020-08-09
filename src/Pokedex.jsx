import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "./mockData";
import { useState } from "react";
import PokemonCard from "./PokemonCard";

const useStyles = makeStyles({
  pokedexContainer: {
    padding: "20px 50px",
  },
  
});



const Pokedex = (props) => {
   const {history} = props
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);

  const getPokemonCard = (pokemonId) => {
    const pokemon = pokemonData[pokemonId];
    return (
        
      <Grid item xs={12} sm={4} key={pokemonId}>
          <PokemonCard keyPokemon={pokemonId} id={pokemon.id} name={pokemon.name} imageUrl={pokemon.sprites.front_default} history={history} />
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>

      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) =>
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
