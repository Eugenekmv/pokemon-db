import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import Navbar from "./components/Navbar";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[600],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: "#333",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route path="/:page" exact component={Home} />
          <Route path="/pokemon/:pokemon" exact component={Pokemon} />
          <Redirect to="/1" />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
