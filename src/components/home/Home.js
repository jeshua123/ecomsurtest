import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from '../PokemonList/PokemonList';
import Header from '../Header/Header';
import './home.css';
import PokemonProfile from '../shared/PokemonProfile';
function Home() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <div className="main">
                <Header />
                <PokemonList />
              </div>
            </>
          } >

          </Route>
          <Route path="/pokemonprofile" element={

            <PokemonProfile />

          } >

          </Route>

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default Home
