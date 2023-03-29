import PropTypes from "prop-types";

const card = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "500px",
  padding: "1rem",
  borderRadius: "10px",
  boxShadow: "0px 0px 15px gray",
  color: "white",
  fontSize: "5rem",
  textAlign: "center",
  textShadow: "0px 0px 5px gray",
};

const cardImg = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "90%",
  height: "50%",
  marginBottom: "3rem",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px gray",
};

function PokemonCard(props) {
  card.backgroundColor = props.pokemon.color;

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <figure style={card}>
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
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
