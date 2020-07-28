import React, { useState } from "react";
import "../stylesheets/app.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

const App = () => {
  const [pokemons, setPokemons] = useState(data);

  return (
    <div className="app">
      <h1>Mi lista de Pokemon</h1>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
