import React from "react";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClick = () => {
    pokemonIndex === 0
      ? setPokemonIndex((pokemonIndex = pokemonList.length - 1))
      : setPokemonIndex(pokemonIndex - 1);
  };

  const handleClick2 = () => {
    pokemonIndex >= pokemonList.length - 1
      ? setPokemonIndex((pokemonIndex = 0))
      : setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div className="navbar">
      <button onClick={handleClick}>Précédent</button>
      <button onClick={handleClick2}>Suivant</button>
    </div>
  );
}

export default NavBar;
