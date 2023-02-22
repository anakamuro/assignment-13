import './style.css';
import React, { useEffect, useMemo, useState } from "react"
import { post, setAuthToken } from '../util/fetch'
import { login } from "../features/userSlice.js"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import store from '../app/store';
import { TOKEN } from '../util/constants';
import { put ,get} from "../util/fetch";
import { updateProfile,getUserProfile } from '../features/userSlice.js';


function User() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: " "
  })
  const dispatch = useDispatch()

  // immediate state return; this is better for immediate state update
  const  user  = useSelector(state => state.user)
 


  useEffect(() => {
    // Get user data from localstorage and set the auth
    let user = window.localStorage.getItem(TOKEN)
    if (user) {
      user = JSON.parse(user)
      console.log(user)
      setAuthToken(user?.token)
    }
    post('/user/profile').then((data) => {
      const currentUser = data.data.body;
     
       dispatch(getUserProfile({data:{firstName:currentUser.firstName,lastName:currentUser.lastName}}))
    })
  }, [])



  const updateUserProfile = (event) => {

    event.preventDefault()
    put('/user/profile', userData).then(() => {
      dispatch(updateProfile({ data: userData }))
  })

   

  }

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }
  //  const fullName = useMemo(()=>{
  //   return `${user?.firstName} ${user?.lastName}`
  // }, [user])



  return (
    <div className="App">
      <nav className="main-nav">
        <Link className="main-nav-logo" href="/">
          <div
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {user.userProfile.firstName + ' ' + user.userProfile.lastName}
          </Link>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user.userProfile.firstName + ' ' + user.userProfile.lastName}!</h1>
          <input type='text' className="text1"name='firstName' onChange={handleChange} />
          <input type='text' className="text1" name='lastName' onChange={handleChange} />
          <button className="edit-button" onClick={updateUserProfile} >Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default User;
