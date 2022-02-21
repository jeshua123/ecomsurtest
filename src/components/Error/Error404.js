import React from 'react'
import './error404.css';
import error from "../../Image/error404pokemon1.png";

function Error404({ setDisplayError404Trigger, setsearchedpokemon }) {
  const handleClick = () => {
    setDisplayError404Trigger(false)
    setsearchedpokemon("")

  }

  return (
    <div className="div-main-error">
      <div className="div-error-contet">
        <div className="div-error-image">
          <img src={`${error}`} alt="" className="error-image" />
        </div>
        <div className="div-error-button">
          <button className="error-button" onClick={handleClick}>  <span>←</span>  Go Back Home  </button>
        </div>
      </div>
    </div>
  )
}

export default Error404