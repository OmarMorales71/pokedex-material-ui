import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    padding: "20px 50px",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(undefined);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=807"
    );

    const { data } = response;
    const { results } = data;
        console.log("getting Data...")
    const newPokemonData = {};
    results.forEach((pokemon, index) => {
      newPokemonData[index + 1] = {
        id: index + 1,
        name: pokemon.name,
        sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      };
    });

    setPokemonData(newPokemonData);
  }, []);

  const getPokemonCard = (pokemonId) => {
    const pokemon = pokemonData[pokemonId];
    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <PokemonCard
          keyPokemon={pokemonId}
          id={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.sprites}
          history={history}
        />
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
              className={classes.searchInput}
            />
          </div>
        </Toolbar>
      </AppBar>

      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) => {
            if (pokemonData[pokemonId].name.includes(filter)) {
              //filtar los pokemons
              return getPokemonCard(pokemonId);
            }
          })}
        </Grid>
      ) : (
        <>
          <CircularProgress />
          Cargando
        </>
      )}
    </>
  );
};

export default Pokedex;
