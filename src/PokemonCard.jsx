import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import { toFirstCharUpperCase } from "./constants";

const useStyles = makeStyles({
  media: {
    height: "130px",
    width: "130px",
    margin: "auto",
  },
  content: {
    textAlign: "center",
  },
});



const PokemonCard = ({keyPokemon, id, name, imageUrl, history }) => {
  const classes = useStyles();
  return (
    <Card onClick={()=>history.push(`/${keyPokemon}`)}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={name} />
        <CardContent className={classes.content}>
          <Typography>{`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
