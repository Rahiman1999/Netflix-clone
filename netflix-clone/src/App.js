import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <h1>Rahiman</h1>
      <Row title="Netflix Originals" fetchurl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
    </div>
  );
}

export default App;
