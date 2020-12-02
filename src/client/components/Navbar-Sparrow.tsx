import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../scss/navbar";


const Navbar: React.FC<NavbarProps> = props => {
    return (
        <>
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
        <a className="navbar-brand" href="/assets/innovate-logo-med.png"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        </button>
        </div>
    </nav>




            <div className="navbar">
                <div className="container flex">
                    <Link to="https://www.innovatebham.com/" >
                        <img src="/assets/InnovateBhamLogo.png" alt="Innovate Bham Logo" className="logo" />
                    </Link>
                    <nav>
                        <ul>
                            <li><Link to="/" className="nav-links" style={{textDecoration: 'none'}}>
                                Home
                            </Link>
                            </li>
                            <li><Link to="/" className="nav-links" style={{textDecoration: 'none'}}>
                                About
                            </Link>
                            </li>
                            <li><Link to="/" className="nav-links" style={{textDecoration: 'none'}}>
                                Lorem
                            </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}


interface NavbarProps { }

export default Navbar;
