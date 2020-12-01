import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../scss/navbar";


const Navbar: React.FC<NavbarProps> = props => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="https://www.innovatebham.com/" >
                        <img src="/assets/InnovateBhamLogo.png" alt="Innovate Bham Logo" className="navbar-logo" />
                    </Link>
                    <div className="menu-icon">
                        <i className="fas fa-bars" />
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                    </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links">
                                About
                    </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lorem" className="nav-links">
                                Lorem
                    </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-warning" type="submit">Sign Up</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

interface NavbarProps { }

export default Navbar;
