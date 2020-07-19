import React from "react";
import "./App.css";
import MainRoutes from "./Router/MainRoutes";
import Nav from "./components/NavBar/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainRoutes />
    </div>
  );
}

export default App;
