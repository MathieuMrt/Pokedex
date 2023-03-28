import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;
