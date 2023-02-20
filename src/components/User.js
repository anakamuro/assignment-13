import './style.css';
import React, { useEffect, useMemo } from "react"
import { post, setAuthToken } from '../util/fetch'
import { login } from "../features/userSlice.js"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import store from '../app/store';
import { TOKEN } from '../util/constants';
import { updateProfile } from '../features/userSlice.js';


function User() {
  const dispatch = useDispatch()

  // immediate state return; this is better for immediate state update
  const {user} = useSelector(state=>state.user)


  useEffect(() => {
    // Get user data from localstorage and set the auth
    let user = window.localStorage.getItem(TOKEN)
    if (user) {
      user = JSON.parse(user)
      setAuthToken(user?.token)
    }
    post('/user/profile').then((data) => {
      const currentUser = data.data.body;
      dispatch(login(currentUser))
    })
  }, [])

  //  const fullName = useMemo(()=>{
  //   return `${user?.firstName} ${user?.lastName}`
  // }, [user])


 
  return (
    <div className="App">
      <nav className="main-nav">
        <Link className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {user?.firstName + ' ' + user?.lastName}
          </Link>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user?.firstName + ' ' + user?.lastName}!</h1>
          <button className="edit-button" /*onClick={()=> dispatch(FullName)}*/ >Edit Name</button>
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
