import React, {useState} from "react"
import './style.css';
//import User from "./User"
//import Home from "./Home"
import { post } from "../util/fetch";
// import {login} from "../features/userSlice.js"
import { Link,useNavigate } from "react-router-dom"

function SignUp() {
    const path = useNavigate()

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password :""
  })
 


  const handleChange = (event)=>{
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
     post('/user/signup',data).then(()=>{
        path('/sign-in')
     }).catch(()=>{
     })
   
  }
  
  return (
    <div>
       <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <div
          class="main-nav-logo-image"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign UP
        </Link>
      </div>
    </nav>
     <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign Up</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
            <label for="username">First Name</label>
            <input 
               type="text" 
               placeholder="first name"
               id="firstname"  
               name="firstName"
               onChange={handleChange}
               />
          </div>
          <div className="input-wrapper">
            <label for="username">Last Name</label>
            <input 
               type="text" 
               placeholder="lastName"
               id="lastname" 
               name="lastName"
               onChange={handleChange}
               />
          </div>
          <div className="input-wrapper">
            <label for="username">Email</label>
            <input 
               type="text" 
               placeholder="email"
               id="email" 
               name="email"
               onChange={handleChange}
               />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input 
               type="password" 
               placeholder="password"
               id="password" 
               name="password"
               onChange={handleChange}
                 />
          </div>
          
         
          <button type="submit" className="sign-in-button">Sign Up</button>
        </form>
      </section>
    </main>
    </div>
  )
}

export default  SignUp
