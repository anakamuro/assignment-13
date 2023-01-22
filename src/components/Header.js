import './style.css';
import {NavLink } from "react-router-dom"
import React from "react"


function Header() {
  return (
    <div className="App">
      <nav className="main-nav">
      <NavLink className="main-nav-logo" to='/'>
        <div
          className="main-nav-logo-image"
          //src="././../../../assets/img/argentBankLogo.png"
         // alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to='/sign-in'>
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
    </div>
  );
}

export default Header;