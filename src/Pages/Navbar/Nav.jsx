import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import logo from "./scholar_apexedit.png";
import "../Navbar/Nav.css";
import Login from '../Login/Login' 

function Nav() {
    const [sticky, setSticky] = useState(false);
    
    const handleScroll = useCallback(() => {
        setSticky(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <nav className={`nav-container ${sticky ? 'dark-nav' : ''}`}>
            <Link to="/" aria-label="Home page">
                <img 
                    className="logo" 
                    src={logo} 
                    alt="Scholar Apex Logo" 
                    loading="lazy"
                />
            </Link>
            
            <ul className="nav-links">
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
        </nav>
    );
}

export default Nav;