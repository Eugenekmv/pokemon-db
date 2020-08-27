import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import ShowPokemons from "./ShowPokemons";
import { GetPokemonList } from "../actions/pokemonActions";

import { CircularProgress } from "@material-ui/core";
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
    console.log(page);
    FetchData(page || 1);
    // eslint-disable-next-line
  }, []);

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
    return (
      <ShowPokemons
        data={pokemonList.data}
        details={pokemonList.details}
        FetchData={FetchData}
      />
    );
  }
  if (pokemonList.error !== "") {
    return pokemonList.error;
  }
  return null;
}
