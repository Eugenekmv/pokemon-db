import React from "react";
import {
  Chip,
  Card,
  Grid,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";

const Types = ({ pokeData, classes, pics }) => {
  return (
    <Grid xs={6} item>
      <Card>
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" component="h2" noWrap paragraph>
            Type:
          </Typography>
          <Typography
            style={{ marginLeft: "10px" }}
            variant="subtitle2"
            component="p">
            {pokeData.types.map((type) => (
              <Chip
                key={type.type.name}
                color="secondary"
                className={classes.chip}
                avatar={<Avatar alt="Remy Sharp" src={pics[type.type.name]} />}
                label={type.type.name}
                variant="outlined"
              />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Types;
