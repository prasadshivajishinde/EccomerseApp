import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink to="/" class="navbar-brand nav-link"  >
        <img src="./images/logo3.png" alt="" height="50px"/>
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <form class="d-flex ms-5">
        <input class="form-control me-2" type="search" placeholder="Search for Products "  />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class="navbar-nav  mb-2 mb-lg-0 m-auto">
        <li class="nav-item">
         <NavLink to="/" className="nav-link fw-bold">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/shop" className="nav-link fw-bold">Shop</NavLink>
        </li>

        <li class="nav-item">
        <NavLink to="/login" className="nav-link fw-bold">
        <MdAccountCircle   style={{fontSize:'28px'}}/> Account  </NavLink>
        </li>


        <li class="nav-item">
        <NavLink to="/cart" className="nav-link fw-bold">
        <FaCartPlus   style={{fontSize:'20px'}}/> Cart  </NavLink>
        </li>

       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar