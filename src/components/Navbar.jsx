import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { IoIosCart } from 'react-icons/io';


function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>Travella</h1>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink> 
        <NavLink to="/gallery" onClick={toggleMenu}>
         Gallery
        </NavLink>
        <NavLink to="/plans" onClick={toggleMenu}>
          Plans
        </NavLink>
        <NavLink to="/blogs" onClick={toggleMenu}>
          Blogs
        </NavLink>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>
    </div>
  );
}

export default Navbar;
