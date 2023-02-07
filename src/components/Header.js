import './style.css';
import {NavLink } from "react-router-dom"
import React from "react"
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice"


function Header() {
  const user = useSelector(selectUser)

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
         {user ? "Sign In" : "Sign Out"}
        </NavLink>
      </div>
    </nav>
    </div>
  );
}

export default Header;