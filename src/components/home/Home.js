import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from '../PokemonList/PokemonList';
import Header from '../Header/Header';
import './home.css';
import PokemonProfile from '../shared/PokemonProfile';
import Error404 from '../Error/Error404';
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
          <Route path="/error404" element={

            <Error404 />

          } >

          </Route>


        </Routes>

      </BrowserRouter>
    </>

  )
}

export default Home
