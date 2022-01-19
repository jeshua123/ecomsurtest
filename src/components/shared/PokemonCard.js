import React from 'react';

function PokemonCard({ pokemon, pokemonId }) {
  return (<div className="card" >
    <div className="div-image">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`} alt="" srcset="" className="pokemon-image" />
    </div>
    <div className="div-image-info">
      <p>{pokemon.name}</p>
    </div>
  </div>);
}

export default PokemonCard;
