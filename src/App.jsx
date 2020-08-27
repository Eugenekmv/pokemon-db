import React from "react";

import Routing from "./routing/Routing";
import Navbar from "./components/Navbar";

import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { pink, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[600],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: "#EDEBEA",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;
