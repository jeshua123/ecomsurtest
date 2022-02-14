import React from 'react';

function PokemonCard({ pokemon, pokemonId, setpokemonIdchoosed, setDisplayModalTrigger }) {
  const handleClick = () => {
    setpokemonIdchoosed(pokemonId);
    setDisplayModalTrigger(true)

  }
  return (<div onClick={handleClick} className="card"  >
    <div className="div-image">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`} alt="" className="pokemon-image" />
    </div>
    <div className="div-image-info">
      <p>{pokemon.name}</p>
    </div>
  </div>);
}

export default PokemonCard;
