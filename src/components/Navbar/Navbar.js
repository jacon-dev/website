import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/nav-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav class="navbar">
      <div class="logo">
        <img src={logo} alt="JC# Logo" />
      </div>
      <div class={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <ul class={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
        <li><Link to="/achievements" onClick={toggleMenu}>Achievements</Link></li>
        <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
        <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
