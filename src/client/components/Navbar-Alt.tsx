import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../scss/navbar-alt";


const Navbar: React.FC<NavbarProps> = props => {
    return (

        <nav className="navbar navbar-expanded-lg justify-content-between">
            <div className="container">

                <Link to='/home' className="navbar-brand d-flex">
                    <img src="/assets/innovate-logo-med.png" alt="Innovate Bham Logo" className="logo-sm" />
                    <h5 className="text-dark mt-2">Innovate Birmingham Candidate Portal</h5>
                </Link>

                <div className="d-flex">
                    <Link to="/" className="mx-2 text-dark">HOME</Link>
                    <Link to="/write" className="mx-2 text-dark">ADD</Link>
                </div>
            </div>
        </nav>


        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-10">
        //             <h1 className="text-center">Navbar</h1>
        //         </div>
        //     </div>
        // </div>
        
    )
}

interface NavbarProps { }

export default Navbar;

