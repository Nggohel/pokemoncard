import React from "react";
import "./App.css";
import HeadingComponent from "./Component/HeadingCpm";
import PokemonContainer from "./Component/PokemonContainer";

function App() {
  return (
    <div className="App">
      <HeadingComponent />
      <PokemonContainer />
    </div>
  );
}

export default App;
