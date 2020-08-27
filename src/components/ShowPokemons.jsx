import React from "react";
import { Grid } from "@material-ui/core";
import PokeCard from "./Card";
import PokePagination from "./Pagination";

const ShowPokemons = ({ data, details, FetchData }) => {
  return (
    <>
      <Grid container spacing={5} style={{ padding: "24px" }}>
        {details.map((pokemon, i) => (
          <Grid key={i + 1} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <PokeCard details={pokemon} />
          </Grid>
        ))}
      </Grid>
      <PokePagination count={data.count} FetchData={FetchData} />
    </>
  );
};

export default ShowPokemons;
