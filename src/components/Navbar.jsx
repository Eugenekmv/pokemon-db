import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  SvgIcon,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchBtn: {
    color: "#fff",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function Navbar() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    const pok = e.target.value.toLowerCase().trim();
    setName(pok);
  };

  const handleBtn = () => {
    setName("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/pokemon-db/pokemon/${name}`);
    setName("");
  };
  const handleHome = () => {
    history.push("/pokemon-db/1");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleHome}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            PokeBase
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
              <InputBase
                value={name}
                onChange={handleChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <Button
                className={classes.searchBtn}
                onClick={handleBtn}
                component={Link}
                to={`/pokemon-db/pokemon/${name}`}
              >
                Search
              </Button>
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
