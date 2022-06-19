import React, { useState } from 'react'
import './navbar.css'

import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'


const Navbar = () => {

  const [Mobile,setMobile]=useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="logo">Logo</h3>

        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setMobile(false)}>
          <Link to="/">
            <li>Home</li>
          </Link>
          
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/service">
            <li>Service</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
        <button className="mobile-menu" onClick={()=>setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar