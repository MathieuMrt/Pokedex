import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";

function App() {
  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      color: "lightgreen",
      type: "plante / poison",
      number: 1,
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      color: "lightsalmon",
      type: "feu",
      number: 4,
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      color: "lightblue",
      type: "eau",
      number: 7,
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "#F3D77B",
      type: "électrique",
      number: 25,
    },
    {
      name: "Mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      color: "#EFC5CE",
      type: "psy",
      number: 151,
    },
    {
      name: "MewTwo",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      color: "#B18AB2",
      type: "psy",
      number: 150,
    },
  ];

  let [pokemonIndex, setPokemonIndex] = useState(0);

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
    <div className="App">
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <button onClick={handleClick}>Précédent</button>
      <button onClick={handleClick2}>Suivant</button>
    </div>
  );
}

export default App;
