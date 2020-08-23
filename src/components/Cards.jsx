import React, { useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";
import PokeCard from "./Card";
import PokePagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loader: {
    margin: "200px auto",
  },
}));

export default function Cards() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  const { page } = useParams();

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  useEffect(() => {
    FetchData(page || 1);
  }, []);

  const ShowPokemons = (data, details) => (
    <>
      <Grid container spacing={5} style={{ padding: "24px" }}>
        {details.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <PokeCard details={pokemon} />
          </Grid>
        ))}
      </Grid>
      <PokePagination count={data.count} FetchData={FetchData} />
    </>
  );

  const ShowData = () => {
    if (pokemonList.loading) {
      return (
        <div className={classes.loader}>
          <CircularProgress color="secondary" />
        </div>
      );
    }
    if (
      !_.isEmpty(pokemonList.data.results) &&
      !_.isEmpty(pokemonList.details) &&
      pokemonList.details.length > 11
    ) {
      return ShowPokemons(pokemonList.data, pokemonList.details);
    }
    if (pokemonList.error !== "") {
      return pokemonList.error;
    }
    return null;
  };

  return <div className="App">{ShowData()}</div>;
}
