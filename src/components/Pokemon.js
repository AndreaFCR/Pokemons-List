import React from "react";
import "../stylesheets/pokemon.scss";

const Pokemon = (props) => {
  const pokemonTypes = props.types.map((type, index) => {
    return (
      <li key={index}>
        <span>{type}</span>
      </li>
    );
  });
  return (
    <article className="pokemon">
      <img className="pokemon__photo" src={props.photo} alt="pokemon" />
      <h2 className="pokemon__title">{props.name}</h2>
      <ul className="pokemon__type">{pokemonTypes}</ul>
    </article>
  );
};

export default Pokemon;
