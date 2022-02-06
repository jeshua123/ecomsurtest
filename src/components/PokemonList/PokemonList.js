import React, { useEffect, useState } from 'react'
import { getAllPokemons } from '../../utils/Api';
import PageButtom from '../Header/PageButtom';
import PokemonCard from '../shared/PokemonCard';
import './PokemonList.css';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListToRender, setPokemonListToRender] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  const getPokemons = async () => {
    const pokemonRequest = await getAllPokemons()
    setPokemonList(pokemonRequest.results)
    setPokemonListToRender(pokemonRequest.results)
    console.log(pokemonRequest.next, pokemonRequest.previous)
  }
  const handleChange = (event) => {
    const word = event.target.value
    setFilterWord(word)
    if (word) {
      const listFiltered = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(word.toLowerCase()))
      setPokemonListToRender(listFiltered)
    } else {
      setPokemonListToRender(pokemonList)
    }
  }
  useEffect(() => {
    getPokemons()
  }, []);

  return (
    <>
      <div className='div-nav-bar'>
        <div className="div-inputsearch-box">
          <input type="search" value={filterWord} id="" className="inputsearch" onChange={handleChange} />
          <i class="fa fa-search icon"></i>
        </div>
        <PageButtom />
      </div>
      <div className="div-content">
        {pokemonListToRender.map((pokemon, index) => {
          const beforeIdIndex = pokemon.url.indexOf("pokemon") + 8
          const pokemonId = pokemon.url.slice(beforeIdIndex, -1)

          return (
            <PokemonCard key={`${pokemon.name}${index}`} pokemon={pokemon} pokemonId={pokemonId} />
          )
        })}


      </div>
    </>
  )
}

export default PokemonList
