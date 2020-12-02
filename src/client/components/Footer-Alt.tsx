import React, { useState, useEffect } from 'react';
import "../scss/footer-alt";



const Footer: React.FC<FooterProps> = props => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="gold"></div>
                <div className="blue"></div>
            </div>
        </div>
    )
}

interface FooterProps { }

export default Footer;
