import React from 'react'
import 'bootstrap/dist/css/bootstrap.css' 
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Error from './components/Error'


const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
    
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
    <Route path='/contact' exact>
    <Contact />
    </Route>
    <Route >
    <Error />
    </Route>
    </Switch>
    </>
  )
}

export default App
