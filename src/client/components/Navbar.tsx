import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Navbar: React.FC<NavbarProps> = props => {
    return (
        <div className="row">
            <div className="col-10">
                <h1 className="text-center">Navbar</h1>
            </div>
        </div>
    )
}

interface NavbarProps { }

export default Navbar;
