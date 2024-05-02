import './App.css';
import React,{ useState } from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Testimonial from './Components/Testimonial';
import Work from './Components/Work';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import LoginPopUp from './Components/LogInPopUp/LoginPopUp';

function App() {
  const[showLogin,setShowLogin] =useState(false)

    return (
      <>
     {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        
        <Router>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='Testimonial' element={<Testimonial/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Routes>
        </Router>
      </div>
      <Work/>
      <Footer/>
      </>
    )
}

export default App;
