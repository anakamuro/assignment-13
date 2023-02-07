import React, {useState} from "react"
import './style.css';
import {useDispatch } from "react-redux"
//import {login} from "userSlice.js"

function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        username: username, 
        password: password, 
        LoggedIn: true, 
      })
    )
  }
  
  return (
    <div>
     <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input 
               type="text" 
               placeholder="Username"
               id="username" 
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input 
               type="password" 
               placeholder="password"
               value={password}
               id="password" 
               onChange={(e) => setPassword(e.target.value)}
                 />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label
            >
          </div>
          <a href="./user.html" className="sign-in-button">Sign In</a>
          <button className="sign-in-button">Sign In</button> 
        </form>
      </section>
    </main>
    </div>
  )
}

export default SignIn
