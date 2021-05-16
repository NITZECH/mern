import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse "   id="navbarNav">
    <ul className=" ml-auto navbar-nav " style={{marginLeft: 'auto'}} >
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Registration</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact</a>
      </li>
    </ul>
  </div>
</nav>


  
        </>
    )
}

export default Navbar
