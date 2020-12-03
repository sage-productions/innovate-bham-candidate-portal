import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../scss/navbar";


const Navbar: React.FC<NavbarProps> = props => {
    return (

        <nav className="navbar navbar-expanded-lg navbar-light bg-white justify-content-between">

            <Link to='/home' className="navbar-brand d-flex">
                
                <img src="/assets/innovate-logo-med.png" alt="Innovate Bham Logo" className="logo-sm" />

                <div className="d-none d-sm-flex flex-column text-center">
                    <h5 className="text-dark p-2">Innovate Birmingham</h5>
                    <h5 className="text-dark negative-margin">Candidate Portal</h5>
                </div>

                <div className="d-xs-flex d-sm-none flex-column">
                    <h5 className="text-dark">Candidate</h5>
                    <h5 className="text-dark negative-margin-top">Portal</h5>
                </div>

            </Link>

            {/* <div className="expand-container">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#mainDesktopNavbar" aria-controls="mainNavbar" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="dropdown-menu">
                <h6 className="dropdown-header">Dropdown header</h6>
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
            </div> */}

            <div className="d-flex">
                <Link to="/" className="mx-2 text-dark">LOGIN</Link>
                <Link to="/write" className="mx-2 text-dark">REGISTER</Link>
            </div>
        </nav>
    )
}

                

interface NavbarProps { }

export default Navbar;

