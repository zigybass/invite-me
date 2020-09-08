import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Assets/MuiTheme/MuiTheme";
import Nav from "./components/NavBar/Nav";
import { Home } from "./views/Home";
import { Typography, Grid } from "@material-ui/core";
import { EventsContext } from "./EventContext/EventsContext";

function App() {
  const [events, setEvents] = useState<Array<any>>([]);

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
          <EventsContext.Provider
            value={{ events: events, setEvents: setEvents }}
          >
            <Grid container>
              <Grid item md={12}>
                <Nav />
              </Grid>
            </Grid>
            <Home />
          </EventsContext.Provider>
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
