import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/nav-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="JC# Logo" />
      </div>
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
