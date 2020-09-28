import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Assets/MuiTheme/MuiTheme";
import Nav from "./components/NavBar/Nav";
import { Home } from "./views/Home";
import { Typography, Grid, Snackbar } from "@material-ui/core";
import { EventsContext } from "./EventContext/EventsContext";

type Snack = {
  open: boolean;
  message: string;
  duration: number;
};

function App() {
  const [snack, setSnack] = useState<Snack>({
    open: false,
    message: "",
    duration: 4000,
  });
  const [events, setEvents] = useState<Array<any>>([]);

  const openSnack = (msg: string): void => {
    setSnack({ ...snack, open: true, message: msg });
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
          <EventsContext.Provider
            value={{
              events: events,
              setEvents: setEvents,
              openSnack: openSnack,
            }}
          >
            <Grid container>
              <Grid item md={12}>
                <Nav />
              </Grid>
            </Grid>
            <Home />
            <Snackbar
              message={snack.message}
              open={snack.open}
              onClose={() => {
                setSnack({ ...snack, open: false, message: "" });
              }}
              autoHideDuration={snack.duration}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            />
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
