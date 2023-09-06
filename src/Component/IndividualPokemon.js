import React, { useState } from "react";
import PokDetailsCard from "./PokDetailsCard";
import "./Style/Individual.css";

function IndividualPokemon({ pokemon }) {
  const { id, name, type, image } = pokemon;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(pokemon);
  return (
    <div className={`individual-pokemon ${type}`}>
      <div className="number">
        <small>#{id}</small>
      </div>
      <img className="pokemon-image" src={image} alt={name} />
      <div className="pokemon-wrapper">
        <h3 className="pokemon-name">{name}</h3>
        <small>Type: {type}</small>
        <button className="know-more" onClick={toggleModal}>
          Know more...
        </button>
      </div>
      {showModal && <PokDetailsCard pokemon={pokemon} onClose={toggleModal} />}
    </div>
  );
}

export default IndividualPokemon;
