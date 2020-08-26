import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Assets/MuiTheme/MuiTheme";
import Nav from "./components/NavBar/Nav";
import { Home } from "./views/Home";
import { Typography, Grid } from "@material-ui/core";

function App() {
  const [events, setEvents] = useState<Array<string>>([
    "Ultimate Frisbee",
    "Soccer",
    "Baseball",
  ]);

  const addEvent = (event: any): void => {
    const newEvents = events;
    newEvents?.push(event);
    setEvents([...newEvents]);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div style={styles.nav}>
          <Grid container justify="center" style={styles.title}>
            <Grid item>
              <div>
                <Typography variant="h5">Invite Me</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <Nav addEvent={addEvent} />
            </Grid>
          </Grid>
          <Home list={events} />
        </div>
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
