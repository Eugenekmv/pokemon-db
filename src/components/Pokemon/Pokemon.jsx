import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { GetPokemonCard } from "../../actions/pokemonActions";
import {
  Container,
  Grid,
  Fade,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as pics from "../../imgs/index";
import Abilities from "./Abilities";
import Types from "./Types";
import PokemonPics from "./PokemonPics";
import Stats from "./Stats";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "30px",
  },
  chip: {
    margin: "3px",
  },
  card: {
    maxWidth: "600px",
    border: "1px solid #000",
  },
  loader: {
    margin: "200px auto",
  },
  abilities: {
    display: "block",
    margin: "0 auto",
  },
  paperImg: {
    display: "inline-block",
    padding: "5px",
  },
  img: {
    maxHeight: "auto",
    maxWidth: "250px",
    minWidth: "120px",
  },
  imgs: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  stat: {
    padding: "25px",
  },
  statPaper: {
    backgroundColor: "#EDEBEA",
    padding: "10px 0 10px",
  },
  title: {
    color: "#333",
    marginTop: "15px",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      textTransform: "capitalize",
    },
  },
}));

const Pokemon = (props) => {
  const classes = useStyles();

  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  React.useEffect(() => {
    dispatch(GetPokemonCard(pokemonName));
    // eslint-disable-next-line
  }, [pokemonName]);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <Fade in={pokeData && true} timeout={1100}>
          <Container maxWidth="lg">
            <Typography
              className={classes.title}
              variant="h5"
              component="h2"
              noWrap>
              {pokemonName}
            </Typography>
            <div className={classes.root}>
              <Grid justify="center" container spacing={3}>
                <Grid
                  item
                  alignItems="center"
                  spacing={2}
                  container
                  xs={12}
                  sm={7}>
                  <Grid
                    xs={12}
                    item
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={2}>
                    <PokemonPics
                      classes={classes}
                      pokeData={pokeData}
                      pokemonName={pokemonName}
                    />
                  </Grid>
                  <Grid xs={12} item container spacing={2}>
                    <Abilities pokeData={pokeData} classes={classes} />
                    <Types pokeData={pokeData} classes={classes} pics={pics} />
                  </Grid>
                </Grid>
                <Grid item sm={5} xs={12}>
                  <Stats
                    classes={classes}
                    pokeData={pokeData}
                    open={open}
                    handleClick={handleClick}
                  />
                </Grid>
              </Grid>
            </div>
          </Container>
        </Fade>
      );
    }

    if (pokemonState.loading) {
      return (
        <div className={classes.loader}>
          <CircularProgress color="secondary" />
        </div>
      );
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return <div>{ShowData()}</div>;
};

export default Pokemon;
