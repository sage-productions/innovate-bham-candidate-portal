import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../scss/navbar";


const Navbar: React.FC<NavbarProps> = props => {
    return (
        <>

            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">Collapsed content</h4>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>



            {/* <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
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
            </div> */}
        </>
    )
}


interface NavbarProps { }

export default Navbar;
