import React, { useState, useEffect } from 'react';


const Footer: React.FC<FooterProps> = props => {
    return (
        <div className="row">
            <div className="col-10">
                <h1 className="text-center">Footer</h1>
            </div>
        </div>
    )
}

interface FooterProps { }

export default Footer;
