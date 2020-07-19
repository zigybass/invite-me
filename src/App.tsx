import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Assets/MuiTheme/MuiTheme";
import MainRoutes from "./Router/MainRoutes";
import Nav from "./components/NavBar/Nav";
import { Typography } from "@material-ui/core";

function App() {
  const [events, setEvents] = useState();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header style={styles.nav}>
          <div style={styles.title}>
            <Typography variant="h5">Invite Me</Typography>
          </div>
          <Nav />
        </header>
        <MainRoutes />
      </ThemeProvider>
    </div>
  );
}

const styles = {
  title: {
    padding: ".5rem 3rem",
  },
  nav: {
    margin: "3rem auto",
  },
};

export default App;
