import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //console.log();
  let cssPro = "navbar navbar-expand-lg navbar-light p-3 mb-2 bg-info text-white";
  if(window.location.pathname == '/signup'){
cssPro= "navbar navbar-expand-lg navbar-light p-3 bg-info text-white";
  }
  
    return (
        <>
           <nav class={cssPro}>
    <a class="navbar-brand" href="#">JaiRamSingh Pvt ITI Bilram</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup">Registration</a>
        </li>
      </ul>
    </div>
</nav>
        </>
    )
}

export default Navbar;
