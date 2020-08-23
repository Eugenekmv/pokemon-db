import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory, useParams } from "react-router-dom";

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

  const handleChange = (e, v) => {
    setCurrentPage(v);
    FetchData(v);
    history.push(`/${v}`);
    console.log(page);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(count / 12 - 1)}
        page={parseInt(currentPage, 10)}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
}
