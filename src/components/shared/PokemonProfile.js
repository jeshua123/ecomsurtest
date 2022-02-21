import React, { useEffect, useState } from 'react'
import { getAPokemonProfile } from '../../utils/Api';
import Loading from './Loading';
import './pokemon.css';

function PokemonProfile({ setDisplayModalTrigger, setpokemonIdchoosed, pokemonIdchoosed }) {
  const [pokemon, setpokemon] = useState(undefined)

  const getPokemon = async () => {
    const pokemonRequest = await getAPokemonProfile(pokemonIdchoosed)

      ;
    setpokemon(pokemonRequest)
  }

  const handleClick = () => {

    setDisplayModalTrigger(false)
    setpokemonIdchoosed("")
  }

  useEffect(() => {

    pokemonIdchoosed && getPokemon();

  }, [pokemonIdchoosed]);


  return <>
    <div onClick={handleClick} className="div-main-profile">
      {!pokemon ?
        <Loading /> :
        <div className="div-profile-card">

          <div className="div-img-container">
            <div className="div-img">
              <img id="imagen" src={`${pokemon?.sprites.other["official-artwork"].front_default}`} alt="" srcset="" />


            </div>
          </div>
          <div className="div-profileinfo">
            <table>
              <tr>
                <th>Name</th>
                <th>{`${pokemon?.name}`}          </th>
              </tr>
              <tr>
                <td>id</td>
                <td>{`${pokemon?.id}`} </td>
              </tr>
              <tr>
                <td>weight</td>
                <td>{`${pokemon?.weight}`}</td>
              </tr>
              <tr>
                <td>height</td>
                <td>{`${pokemon?.height}`}</td>
              </tr>

              <tr>
                <td>type</td>
                <td>{`${pokemon?.types[0].type.name}`}</td>
              </tr>
            </table>

          </div>
        </div>}
    </div>

  </>;
}

export default PokemonProfile;
