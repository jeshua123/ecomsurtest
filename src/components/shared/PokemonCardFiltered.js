import React from 'react';

function PokemonCardFiltered({ pokemon, setpokemonIdchoosed, setDisplayModalTrigger, setsearchedpokemon, getPokemons }) {
  const handleClick = () => {
    setpokemonIdchoosed(pokemon.id);
    setDisplayModalTrigger(true)

  }

  const handleClickButton = () => {
    setsearchedpokemon("")
    getPokemons()

  }

  return (
    <>
      <div onClick={handleClick} className="card"  >
        <div className="div-image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`} alt="" className="pokemon-image" />
        </div>
        <div className="div-image-info">
          <p>{pokemon.name}</p>
        </div>
      </div>
      <div className="div-error-button">

        <button className="error-button" onClick={handleClickButton}><span>←</span> Back Home </button>

      </div >
    </>

  );
}

export default PokemonCardFiltered;
