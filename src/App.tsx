import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Assets/MuiTheme/MuiTheme";
import Nav from "./components/NavBar/Nav";
import { Home } from "./views/Home";
import { Typography, Grid } from "@material-ui/core";
import { addEventToAPI } from "./utils/API";

function App() {
  const addEvent = (event: any): void => {
    const eventData = {
      name: event,
      onGoing: false,
    };
    addEventToAPI(eventData)
      .then((res): void => {
        console.log(res);
      })
      .catch((err): void => {
        console.log(err);
      });
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
          <Home />
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
