import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Assets/MuiTheme/MuiTheme";
import Nav from "./components/NavBar/Nav";
import { Home } from "./views/Home";
import { Typography, Grid } from "@material-ui/core";

function App() {
  const [events, setEvents] = useState<Array<string> | null>([
    "Ultimate Frisbee",
    "Soccer",
    "Baseball",
  ]);

  const addEvent = (event: string): void => {
    console.log(event);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header style={styles.nav}>
          <Grid container justify="center" style={styles.title}>
            <Grid item>
              <div>
                <Typography variant="h5">Invite Me</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <Nav />
            </Grid>
          </Grid>
          <Home list={events} />
        </header>
      </ThemeProvider>
    </div>
  );
}

const styles = {
  title: {
    padding: "1.5rem 0rem",
  },
  nav: {
    margin: "3rem auto",
  },
};

export default App;
