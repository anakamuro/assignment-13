import React from "react"
//import {useEffect} from "react"
import Home from "./components/Home"
import SignIn from "./components/Login"
import Footer from "./components/Footer"
import User from "./components/User"
//import Header from "./components/Header"
import SignUp from "./components/Signup"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import axios from "axios"
//import { getAllUser } from "./util/fetch"
//import { post } from "../util/fetch";
//import { users } from "../server/scripts/populateDatabase"
//import { signupApi } from "./server/scripts/populateDatabase"
//import * as usersAPI from '../src/util/user-api'

class App extends React.Component {

		// GET request for items
    /*
		async function getUser() {
			const user = await usersAPI.getAll()
     console.log(user)
    }
		getUser()
 */
  /*
state = {
  post: []
}
componentDidMount = () => {
  this.getPost()
}

getPost = () => {
  axios.get('http://localhost:3000/api/v1/user/signup')
  .then((response) => {
    const data = response.data
    this.setState({ posts: data})
    console.log(data)
  })
  .catch(() => {
    alert('error')
  })
}
*/

  render(){
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/sign-in' element={<SignIn/>}/>
      <Route exact path='/sign-up' element={<SignUp/>}/>
      <Route exact path='/user' element={<User/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
  }
}

export default App

