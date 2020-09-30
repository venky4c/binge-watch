import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { SearchMovies } from "./components/SearchMovies";

function App() {
  return (
    <div className="App">
      <h1 className="title">Binge Watch</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
