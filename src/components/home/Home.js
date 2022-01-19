import React from 'react'
import PokemonList from '../PokemonList/PokemonList';
import Header from '../Header/Header';
import './home.css';
function Home() {
  return (
    <>
      <div className="main">
        <Header />
        <PokemonList />
      </div>
    </>
  )
}

export default Home
