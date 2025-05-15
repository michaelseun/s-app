import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import "./Navsec.css";
import logo from "./scholar_apexedit.png";

const Navsec = () => {
  const [sticky, setSticky] = useState(false);
    
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <nav className={`nav-containerr ${sticky ? 'dark-nav' : ''}`}>
        <Link to="/user" aria-label="Home page"> {/* Changed to /user */}
          <img 
            className="logo" 
            src={logo} 
            alt="Scholar Apex Logo" 
            loading="lazy"
          />
        </Link>
        
        <ul className="navbar">
          <li>
            <Link 
              to="/user" // Points to Hero (index route)
              className="nav-buton"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="courses" // Relative path to /user/courses
              className="nav-buton"
              aria-label="Courses"
            >
              Courses {/* Changed label */}
            </Link>
          </li>
          {/* Add other links if needed */}
        </ul>
      </nav>
      
      {/* Outlet renders Hero/Courses */}
      <div className="content-wrapper"> {/* Add wrapper for styling */}
        <Outlet />
      </div>
    </>
  );
};

export default Navsec;