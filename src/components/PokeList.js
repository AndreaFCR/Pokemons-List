import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokeList.scss";

const PokeList = (props) => {
  const items = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon
          name={pokemon.name}
          photo={pokemon.url}
          types={pokemon.types}
        />
      </li>
    );
  });

  return <ul className="pokelist">{items}</ul>;
};

export default PokeList;
