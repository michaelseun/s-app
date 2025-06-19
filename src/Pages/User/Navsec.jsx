import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import "./Navsec.css";
import logo from "./scholar_apexedit.png";

const Navsec = () => {
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 50);
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <nav className={`nav-containerr ${sticky ? 'dark-nav' : ''}`}>
        <Link to="/user" aria-label="Home page">
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
              to="/user"
              className="nav-buton"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li className="dropdown-container">
            <button 

              className="nav-buton dropdown-btn"
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-label="Courses"
            >
              Courses
              <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>&#9660;</span>
            </button>
            
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="Courses" 
                    className="dropdown-link"
                    onClick={closeDropdown}
                  >
                    Computer Science
                  </Link>
                </li>
                <li>
                  <Link 
                    to="SenCourses" 
                    className="dropdown-link"
                    onClick={closeDropdown}
                  >
                    Software Engineering
                  </Link>
                </li>
                <li>
                  <Link 
                    to="CybCourse" 
                    className="dropdown-link"
                    onClick={closeDropdown}
                  >
                    Cyber Security
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Navsec;