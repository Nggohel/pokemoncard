import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style/PokemonContainer.css";
import IndividualPokemon from "./IndividualPokemon";

function PokemonContainer() {
  const [URL, setURL] = useState(
    "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
  );

  const [pokemons, setPokemons] = useState([]);

  const getPokemonsDetails = async () => {
    const res1 = await axios.get(URL);
    if (res1.data[0].next) {
      // console.log(res1.data[0].next);
      setURL(res1.data[0].next);
    }

    res1.data[0].results.map(async (pokemon) => {
      const res2 = await axios.get(pokemon.url);
      setPokemons((currentData) => [...currentData, res2.data[0]]);
    });
  };

  // console.log(pokemons);

  // It will behave like componentDidMount
  useEffect(() => {
    getPokemonsDetails();
  });

  return (
    <>
      <div className="pokemon-container">
        {pokemons.map((pokemon) => {
          return <IndividualPokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <div className="load-more-button-div">
        <button
          className="load-more-button"
          onClick={() => getPokemonsDetails()}
        >
          More Pokemons
        </button>
      </div>
    </>
  );
}

export default PokemonContainer;
