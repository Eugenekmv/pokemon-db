import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import { pink } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Avatar, Chip, Fade } from "@material-ui/core";

import * as pics from "../imgs/index";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  title: {
    display: "flex",

    justifyContent: "space-around",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  chip: {
    margin: "3px",
  },
  name: {
    textTransform: "capitalize",
    color: pink[600],
  },
}));

export default function PokeCard({ details }) {
  const classes = useStyles();
  // console.log(details);

  useEffect(() => {}, []);

  return (
    <Fade in={details}>
      <Card raised className={classes.root}>
        <CardActionArea
          className={classes.title}
          component={Link}
          to={`/pokemon/${details.name}/`}>
          <Avatar
            width={1 / 2}
            alt="Remy Sharp"
            src={details.sprites.front_default}
            className={classes.large}
          />
          <CardContent>
            <Typography
              className={classes.name}
              width={1 / 2}
              gutterBottom
              variant="h5"
              component="h2">
              {details.name}
            </Typography>
            <div className="">
              {details.types.map((type) => (
                <Chip
                  className={classes.chip}
                  avatar={
                    <Avatar alt="Remy Sharp" src={pics[type.type.name]} />
                  }
                  label={type.type.name}
                  variant="outlined"
                />
              ))}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fade>
  );
}
