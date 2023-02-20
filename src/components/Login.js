import React, { useState } from "react"
import './style.css';
import { useDispatch } from "react-redux"
//import User from "./User"
//import Home from "./Home"
import { post } from "../util/fetch";
import { login } from "../features/userSlice.js"
import { Link, useNavigate } from "react-router-dom"
import { TOKEN, USER_STORAGE_KEY } from "../util/constants";

function SignIn() {
  const path = useNavigate()
  const dispatch = useDispatch();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    post('/user/login', {
      email: username,
      password
    }).then((response) => {
      const data = response.data.body
      // save user data to localstorage, so when app refreshes, // we'll get it and dispatch to redux store
      window.localStorage.setItem(TOKEN, JSON.stringify(data))

      dispatch(login(data))
      path('/user')
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <div
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label
              >
            </div>

            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default SignIn