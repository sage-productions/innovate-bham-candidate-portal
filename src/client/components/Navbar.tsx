import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../scss/navbar";


const Navbar: React.FC<NavbarProps> = props => {
    return (
        <div className="row">
            <div className="col-10">
                <img src="/assets/InnovateBhamLogo.png" alt=""/>
            </div>
        </div>
    )
}

interface NavbarProps { }

export default Navbar;
