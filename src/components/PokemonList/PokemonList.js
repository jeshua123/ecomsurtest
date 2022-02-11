import React, { useEffect, useState } from 'react'
import { getAllPokemons } from '../../utils/Api';
import PageButtom from '../Header/PageButtom';
import PokemonCard from '../shared/PokemonCard';
import PokemonProfile from '../shared/PokemonProfile';
import './PokemonList.css';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListToRender, setPokemonListToRender] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [pokemonIdchoosed, setpokemonIdchoosed] = useState("")
  const [displayModaltrigger, setDisplayModalTrigger] = useState(false)

  const getPokemons = async () => {
    const pokemonRequest = await getAllPokemons()
    setPokemonList(pokemonRequest.results)
    setPokemonListToRender(pokemonRequest.results)
    setPageNumber(Math.ceil(pokemonRequest.count / 20))

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

  const handleClick = async (page) => {
    const pokemonRequest = await getAllPokemons(((page - 1) * 20))
    setPokemonListToRender(pokemonRequest.results);
  }

  return (
    <>
      {displayModaltrigger && <PokemonProfile setDisplayModalTrigger={setDisplayModalTrigger} pokemonIdchoosed={pokemonIdchoosed} setpokemonIdchoosed={setpokemonIdchoosed} />}

      <div className='div-nav-bar'>
        <div className="div-inputsearch-box">
          <input type="search" value={filterWord} id="" className="inputsearch" onChange={handleChange} />
          <i class="fa fa-search icon"></i>
        </div>
        <PageButtom handleClick={handleClick} pageNumber={pageNumber} />
      </div>
      <div className="div-content">
        {pokemonListToRender.map((pokemon, index) => {
          const beforeIdIndex = pokemon.url.indexOf("pokemon") + 8
          const pokemonId = pokemon.url.slice(beforeIdIndex, -1)

          return (
            <PokemonCard key={`${pokemon.name}${index}`} pokemon={pokemon} pokemonId={pokemonId} setpokemonIdchoosed={setpokemonIdchoosed} setDisplayModalTrigger={setDisplayModalTrigger} />
          )
        })}


      </div>
    </>
  )
}

export default PokemonList
