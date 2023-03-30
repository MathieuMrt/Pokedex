import PropTypes from "prop-types";

function PokemonCard(props) {
  const card = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "500px",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0px 0px 30px gray",
    color: "white",
    fontSize: "5rem",
    textAlign: "center",
    textShadow: "0px 0px 5px gray",
    border: "15px solid gold",
  };

  const cardImg = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    height: "50%",
    marginBottom: "1rem",
    borderRadius: "10px",
    background:
      "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
    border: "5px solid white",
  };

  const type = {
    fontSize: "2rem",
    color: "black",
    width: "95%",
    marginBottom: "30px",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
  };

  const number = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  card.backgroundColor = props.pokemon.color;

  return (
    <figure style={card}>
      <div style={number}>
        <p>n°{props.pokemon.number} / 151</p>
      </div>
      <div style={cardImg}>
        {props.pokemon.imgSrc ? (
          <img
            src={props.pokemon.imgSrc}
            alt={props.pokemon.name}
            width={"90%"}
          ></img>
        ) : (
          <p>???</p>
        )}
      </div>
      <div style={type}>
        <p>Type : {props.pokemon.type}</p>
      </div>
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
