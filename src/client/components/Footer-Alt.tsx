<<<<<<< HEAD:src/client/components/Footer-Alt.tsx
import React, { useState, useEffect } from 'react';
import "../scss/footer-alt";



const Footer: React.FC<FooterProps> = props => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="gold"></div>
                <div className="blue"></div>
            </div>
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/footer";

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer-container">
      <div className="top-footer">
        <div className="py-4 px-3 bg-yellow d-flex justify-content-between align-items-center text-navy text-large">
          <div>
            <p className="m-0">Stay in Touch!</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a
              className="mx-4"
              href="https://www.facebook.com/InnovateBirmingham"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              className="mx-4"
              href="https://www.instagram.com/innovate_bham/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="mx-4"
              href="https://www.linkedin.com/company/innovatebirmingham/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
>>>>>>> 1215475faca34403d739328ec3127e30b249d2b9:src/client/components/Footer.tsx
        </div>
      </div>
      <div className="bottom-footer">
        <p className="m-0">footer</p>
      </div>
    </div>
  );
};

interface FooterProps {}

export default Footer;
