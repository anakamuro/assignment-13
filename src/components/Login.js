import React, { useState,useEffect } from "react"
import './style.css';
import { useDispatch } from "react-redux"
//import User from "./User"
//import Home from "./Home"
import { post,get } from "../util/fetch";
import { login } from "../features/userSlice.js"
import { Link, useNavigate } from "react-router-dom"
import { Tokens, USER_STORAGE_KEY } from "../util/constants";

function SignIn() {
  const path = useNavigate()
  const dispatch = useDispatch();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
     getAllUser().then((data)=>{
       console.log(data)
     })
  },[])

  const getAllUser = async ()=>{
    return await post('/user/all')
  }

  const handleSubmit = (e) => {
    
    
    e.preventDefault();
    post('/user/login', {
      email: username,
      password
    // }).then((response) => {
    //   return response.json()
    
    }).then((response) => {
      // alert('in resp')
      console.log('resp',response)
      const data= response.data.body.token
      // console.log('tokennn on login',data)
      console.log('tokennn on login',data)
      // save user data to localstorage, so when app refreshes, // we'll get it and dispatch to redux store
      // json.stringify is only required if data waas in json like {token: 'abcd'}, and I just have a stirng already
      window.localStorage.setItem(Tokens, data)
      dispatch(login(data))
      path('/user')
    }).catch((error) => {
      console.log('in error')
      console.log(error)
    })

  }
  
  function Signup(){
    path('/sign-up')
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
              <button className="nmem" onClick={Signup}>Not a Member</button>
            </div>
           
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default SignIn
