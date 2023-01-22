//import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import Footer from "./components/Footer"
import Header from "./components/Header"
import User from "./components/User"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/user' element={<User/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
