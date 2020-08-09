import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pokedexContainer: {
    padding: "20px 50px",
  },
});

const getPokemonCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardMedia></CardMedia>
        <CardContent>Hi</CardContent>
      </Card>
    </Grid>
  );
};

const Pokedex = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <Grid container spacing={2} className={classes.pokedexContainer}>
       
          {getPokemonCard()}
       
          {getPokemonCard()}
        
        
          {getPokemonCard()}
        
      </Grid>
    </>
  );
};

export default Pokedex;
