import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Assets/MuiTheme/MuiTheme";
import Nav from "./components/NavBar/Nav";
import { Home } from "./views/Home";
import { Typography } from "@material-ui/core";

function App() {
  const [events, setEvents] = useState<string>("Ultimate Frisbee");

  const addEvent = (event: string): void => {
    setEvents(event);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header style={styles.nav}>
          <div style={styles.title}>
            <Typography variant="h5">Invite Me</Typography>
          </div>
          <Nav />
          <Home list={events} />
        </header>
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
