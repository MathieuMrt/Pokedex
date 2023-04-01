import React from "react";

function Repeat({ onPokemonClick, pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onPokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
export default Repeat;
