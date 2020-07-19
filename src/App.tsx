import React from "react";
import "./App.css";
import MainRoutes from "./Router/MainRoutes";
import Nav from "./components/NavBar/Nav";

function App() {
  return (
    <div className="App">
      <header style={styles.nav}>
        <Nav />
      </header>
      <MainRoutes />
    </div>
  );
}

const styles = {
  nav: {
    width: "100%",
  },
};

export default App;
