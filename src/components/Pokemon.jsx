import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonCard } from "../actions/pokemonActions";
import _ from "lodash";
import {
  Chip,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
  Avatar,
  Fade,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import pink from "@material-ui/core/colors/pink";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";

import Collapse from "@material-ui/core/Collapse";

import Typography from "@material-ui/core/Typography";
import * as pics from "../imgs/index";

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

  img: {
    maxHeight: "auto",
    maxWidth: "250px",
  },
  imgs: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  stat: {
    padding: "25px",
  },
  title: {
    color: "#fff",
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
  }, [pokemonName]);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <Fade in={pokeData} timeout={1100}>
          <Container maxWidth="lg">
            <Typography
              className={classes.title}
              variant="h5"
              component="h2"
              noWrap>
              {pokemonName}
            </Typography>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item direction="column" spacing={10} container xs={7}>
                  <Grid spacing={3} item>
                    <Paper className={classes.imgs}>
                      {pokeData.sprites.other.dream_world.front_default && (
                        <CardMedia
                          className={classes.img}
                          component="img"
                          alt={pokemonName}
                          image={
                            pokeData.sprites.other.dream_world.front_default
                          }
                          title="Contemplative Reptile"
                        />
                      )}
                      {pokeData.sprites.other["official-artwork"]
                        .front_default && (
                        <CardMedia
                          className={classes.img}
                          component="img"
                          alt={pokemonName}
                          image={
                            pokeData.sprites.other["official-artwork"]
                              .front_default
                          }
                          title="Contemplative Reptile"
                        />
                      )}
                    </Paper>
                  </Grid>
                  <Grid item container spacing={3}>
                    <Grid item>
                      <Card className={classes.root} raised>
                        <CardContent style={{ display: "flex" }}>
                          <Typography variant="h5" component="h2" noWrap>
                            Abilities:
                          </Typography>
                          <Typography
                            style={{ marginLeft: "10px" }}
                            variant="body2"
                            component="p">
                            {pokeData.abilities.map((el) => {
                              return (
                                <Chip
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
                    <Grid item spacing={3}>
                      <Card className={classes.root} raised>
                        <CardContent style={{ display: "flex" }}>
                          <Typography variant="h5" component="h2" noWrap>
                            Type:
                          </Typography>
                          <Typography
                            style={{ marginLeft: "10px" }}
                            variant="body2"
                            component="p">
                            {pokeData.types.map((type) => (
                              <Chip
                                color="secondary"
                                className={classes.chip}
                                avatar={
                                  <Avatar
                                    alt="Remy Sharp"
                                    src={pics[type.type.name]}
                                  />
                                }
                                label={type.type.name}
                                variant="outlined"
                              />
                            ))}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Paper className={classes.paper}>
                    <Typography
                      style={{ paddingTop: "7px" }}
                      variant="h5"
                      component="h2"
                      noWrap>
                      Base characteristics
                    </Typography>
                    <List
                      component="nav"
                      className={classes.list}
                      aria-label="mailbox folders">
                      <ListItem>
                        <ListItemText primary={`Height: ${pokeData.height}`} />
                      </ListItem>
                      <Divider light />
                      <ListItem divider>
                        <ListItemText
                          primary={`Base experience: ${pokeData.base_experience}`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary={`Weight: ${pokeData.weight}`} />
                      </ListItem>
                      <Divider light />
                      <ListItem button onClick={handleClick}>
                        <ListItemText primary="Stats" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Grid className={classes.stat} container spacing={3}>
                          {pokeData.stats.map((stat) => (
                            <Grid item md={6}>
                              <Paper>
                                <Typography
                                  color="primary"
                                  variant="h6"
                                  style={{
                                    textTransform: "capitalize",
                                  }}>
                                  {`${stat.stat.name}: ${stat.base_stat}`}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Collapse>
                    </List>
                  </Paper>
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
