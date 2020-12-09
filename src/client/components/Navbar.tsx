import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../scss/navbar";


const Navbar: React.FC<NavbarProps> = props => {
    return (

        <div className="home-wrapper">

        
        <nav className="navbar navbar-expanded-lg navbar-light justify-content-between">

            <Link to='/home' className="navbar-brand d-flex">
                
                <img src="/assets/innovate-logo-med.png" alt="Innovate Bham Logo" className="logo-sm" />

                {/* WEBSITE TITLE - DESKTOP VIEW */}
                <div className="d-none d-sm-flex flex-column text-center">
                    <h5 className="text-midnight negative-margin-top p-2">Innovate Birmingham</h5>
                    <h5 className="text-midnight negative-margin">Candidate Portal</h5>
                </div>

                {/* WEBSITE TITLE - MOBILE VIEW */}
                <div className="d-xs-flex d-sm-none flex-column p-2">
                    <h5 className="text-dar negative-margin-top">Candidate</h5>
                    <h5 className="text-dark negative-margin-top">Portal</h5>
                </div>

            </Link>

            <div className="mission-statement-option-1 d-none d-lg-flex pr-5">
                <h6 className="mission-statement text-midnight">
                    <i>"Fueling Tech Talent in the Heart of the Magic City"</i> 
                </h6>
            </div>

            {/* <div className="mission-statement-option-2 d-none d-lg-flex flex-column pr-5 align-items-center">
                <h6 className="mission-statement mission-statement-line-1 text-midnight">
                    <i>Fueling Tech Talent</i> 
                </h6>
                <h6 className="mission-statement mission-statement-line-2 text-midnight">
                    <i>in the Heart of the Magic City</i> 
                </h6>
            </div> */}

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

            {/* <div className="d-flex">
                <Link to="/" className="mx-2 text-dark">LOGIN</Link>
                <Link to="/write" className="mx-2 text-dark">REGISTER</Link>
            </div> */}
        </nav>
        </div> 
    )
}

                

interface NavbarProps { }

export default Navbar;

