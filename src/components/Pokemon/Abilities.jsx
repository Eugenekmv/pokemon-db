import React from "react";
import { Chip, Card, Grid, CardContent, Typography } from "@material-ui/core";

const Abilities = ({ pokeData, classes }) => {
  return (
    <Grid xs={6} item>
      <Card>
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" component="h2" paragraph noWrap>
            Abilities:
          </Typography>
          <Typography
            style={{ marginLeft: "10px" }}
            variant="subtitle2"
            component="p">
            {pokeData &&
              pokeData.abilities.map((el) => {
                return (
                  <Chip
                    key={el.ability.name}
                    label={el.ability.name}
                    variant="outlined"
                    color="secondary"
                    className={classes.chip}
                  />
                );
              })}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Abilities;
