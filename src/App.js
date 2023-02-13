import Home from "./components/Home"
import SignIn from "./components/Login"
import Footer from "./components/Footer"
import User from "./components/User"
//import Header from "./components/Header"
import SignUp from "./components/Signup"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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

export default App;
