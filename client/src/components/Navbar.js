import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse "   id="navbarNav">
    <ul className=" ml-auto navbar-nav " style={{marginLeft: 'auto'}} >
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>


  
        </>
    )
}

export default Navbar
