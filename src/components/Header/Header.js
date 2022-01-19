import React from 'react'
import './header.css';
import logo from "../../Image/pokedex2.jpg";

function Header() {
  return (
    <div className="Header">
      <div className="div-mainlogo">
        <div className="logo">
          <img src={logo} alt="" className="image-logo" />
        </div>
      </div>
    </div>
  )
}

export default Header
