import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar";
import Repeat from "./components/Repeat";

function App() {
  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      color: "#8BC6AB",
      type: "plante / poison",
      number: 1,
    },
    {
      name: "Herbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      color: "#86BFC4",
      type: "plante / poison",
      number: 2,
    },
    {
      name: "Florizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      color: "#83B2B1",
      type: "plante / poison",
      number: 3,
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      color: "#E7A87B",
      type: "feu",
      number: 4,
    },
    {
      name: "Reptincel",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      color: "#E07E6D",
      type: "feu",
      number: 5,
    },
    {
      name: "Dracaufeu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      color: "#EDA263",
      type: "feu / vol",
      number: 6,
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      color: "#8EC5D3",
      type: "eau",
      number: 7,
    },
    {
      name: "Carabaffe",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      color: "#AEBCDB",
      type: "eau",
      number: 8,
    },
    {
      name: "Tortank",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      color: "#8DA9CE",
      type: "eau",
      number: 9,
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
      name: "MewTwo",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      color: "#B18AB2",
      type: "psy",
      number: 150,
    },
    {
      name: "Mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      color: "#EFC5CE",
      type: "psy",
      number: 151,
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePokemonClick = (index) => setPokemonIndex(index);

  return (
    <div className="App">
      <Repeat pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>

      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
