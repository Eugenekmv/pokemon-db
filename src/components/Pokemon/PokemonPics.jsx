import React from "react";
import { Card, Grid, CardMedia } from "@material-ui/core";

const PokemonPics = ({ classes, pokeData, pokemonName }) => {
  return (
    <>
      <Grid item sm={6} xs={6}>
        <Card className={classes.paperImg}>
          {pokeData.sprites.other.dream_world.front_default && (
            <CardMedia
              className={classes.img}
              component="img"
              alt={pokemonName}
              image={pokeData.sprites.other.dream_world.front_default}
              title={pokemonName}
            />
          )}
        </Card>
      </Grid>
      <Grid item sm={6} xs={6}>
        <Card className={classes.paperImg}>
          {pokeData.sprites.other["official-artwork"].front_default && (
            <CardMedia
              className={classes.img}
              component="img"
              alt={pokemonName}
              image={pokeData.sprites.other["official-artwork"].front_default}
              title={pokemonName}
            />
          )}
        </Card>
      </Grid>
    </>
  );
};

export default PokemonPics;
