import React, { useEffect, useState } from 'react'
import { getAllPokemons, getSearchPokemon } from '../../utils/Api';
import Error404 from '../Error/Error404';
import PageButtom from '../Header/PageButtom';
import PokemonCard from '../shared/PokemonCard';
import PokemonCardFiltered from '../shared/PokemonCardFiltered';
import PokemonProfile from '../shared/PokemonProfile';
import './PokemonList.css';

function PokemonList() {
  const [pokemonListToRender, setPokemonListToRender] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [pokemonIdchoosed, setpokemonIdchoosed] = useState("")
  const [displayModaltrigger, setDisplayModalTrigger] = useState(false)
  const [displayError404trigger, setDisplayError404Trigger] = useState(false)
  const [searchedpokemon, setsearchedpokemon] = useState("")

  const getPokemons = async () => {
    const pokemonRequest = await getAllPokemons()
    setPokemonListToRender(pokemonRequest.results)
    setPageNumber(Math.ceil(pokemonRequest.count / 20))
  }

  const handleChange = (event) => {
    const word = event.target.value
    setFilterWord(word)

    setsearchedpokemon("")

  }
  useEffect(() => {
    getPokemons()
  }, []);

  const handleClick = async (page) => {
    const pokemonRequest = await getAllPokemons(((page - 1) * 20))
    setPokemonListToRender(pokemonRequest.results);
  }
  const handleOnsummit = async (event) => {
    event.preventDefault()
    const pokemonFound = await getSearchPokemon(filterWord)
    if (pokemonFound.name === "fetch error") {
      setDisplayError404Trigger(true)
      setFilterWord("")
    } else {

      setsearchedpokemon([...searchedpokemon, pokemonFound])
      setPokemonListToRender()
      setFilterWord("")

    }
  }
  let div_content_display = searchedpokemon ? "div-content-filtered-pokemon" : "div-content"
  return (
    <>
      {displayModaltrigger && <PokemonProfile setDisplayModalTrigger={setDisplayModalTrigger} pokemonIdchoosed={pokemonIdchoosed} setpokemonIdchoosed={setpokemonIdchoosed} />}

      <div className='div-nav-bar'>
        <form onSubmit={handleOnsummit} className="div-inputsearch-box">

          <input type="search" value={filterWord} id="" className="inputsearch" onChange={handleChange} />
          <i className="fa fa-search icon"></i>

        </form>
        {!displayError404trigger && !searchedpokemon && <PageButtom handleClick={handleClick} pageNumber={pageNumber} />}
      </div>


      {displayError404trigger && <Error404 setDisplayError404Trigger={setDisplayError404Trigger} setsearchedpokemon={setsearchedpokemon} />}

      <div className={div_content_display} >
        {pokemonListToRender && !displayError404trigger && pokemonListToRender.map((pokemon, index) => {

          const beforeIdIndex = pokemon.url.indexOf("pokemon") + 8
          const pokemonId = pokemon.url.slice(beforeIdIndex, -1)

          return (
            <PokemonCard key={`${pokemon.name}${index}`} pokemon={pokemon} pokemonId={pokemonId} setpokemonIdchoosed={setpokemonIdchoosed} setDisplayModalTrigger={setDisplayModalTrigger} />
          )
        })}
        {searchedpokemon && searchedpokemon.map((pokemon, index) => {

          return (
            <>
              <PokemonCardFiltered key={`${pokemon.name}${index}`} pokemon={pokemon} setpokemonIdchoosed={setpokemonIdchoosed} setDisplayModalTrigger={setDisplayModalTrigger} setsearchedpokemon={setsearchedpokemon} getPokemons={getPokemons} />

            </>
          )
        })}


      </div>
    </>
  )
}

export default PokemonList
