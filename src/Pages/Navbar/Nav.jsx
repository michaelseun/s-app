import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "./scholar_apexedit.png";
import "../Navbar/Nav.css";

function Nav() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`nav-container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-container">
        <Link to="/" aria-label="Home page">
          <img 
            className="logo" 
            src={logo} 
            alt="Scholar Apex Logo" 
            loading="lazy"
          />
        </Link>
      </div>
      
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to='/Login' 
            className="nav-button"
            aria-label="Get started"
          >
            Get Started
          </Link>
        </li>
      </ul>
      
      <button 
        className="mobile-toggle" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </nav>
  );
}

export default Nav;