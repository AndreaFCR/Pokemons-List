import React, { useState } from "react";
import "../stylesheets/App.css";
import data from "../data/data.json";
import PokeList from "./PokeList";

const App = () => {
  const [pokemons, setPokemons] = useState(data);

  return (
    <div className="App">
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
