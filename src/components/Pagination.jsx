import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    text: {
      color: "white",
    },
  },
}));

export default function PokePagination({ FetchData, count }) {
  const classes = useStyles();
  const { page } = useParams();
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(page || 1);

  useEffect(() => {
    if (currentPage !== page) {
      FetchData(currentPage);
      history.push(`/pokemon-db/${currentPage}`);
      console.log(currentPage);
    }
  });

  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(count / 12 - 1)}
        page={parseInt(currentPage, 10)}
        color="primary"
        onChange={(e, p) => setCurrentPage(p)}
      />
    </div>
  );
}
