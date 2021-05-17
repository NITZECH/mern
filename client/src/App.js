import React from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
    <Navbar />
    <Route path='/' exact >
    <Home />
    </Route>
    <Route path='/about' exact>
    <About />
    </Route>
      <Route path='/login' exact>
    <Login />
    </Route> 
     <Route path='/signup' exact>
    <Signup />
    </Route>
    <Route path='/contact' exact>
    <Contact />
    </Route>
    </>
  )
}

export default App
