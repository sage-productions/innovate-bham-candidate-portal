import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/footer-alt";


const Footer: React.FC<FooterProps> = (props) => {
  return (


    <footer className="page-footer bg-midnight">

      <div className="bg-warning">
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-12 text-center">
              
              <a className="mx-4" href="https://www.facebook.com/InnovateBirmingham"
                rel="noopener noreferrer" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a className="mx-4" href="https://www.instagram.com/innovate_bham/"
                rel="noopener noreferrer" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="mx-4" href="https://www.linkedin.com/company/innovatebirmingham/"
                rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="container text-center text-md-left mt-5">
        <div className="row">

          <div className="col-md-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold text-white">Innovate Bham</h6>
            <hr className="bg-dark mb-4 mt-0 d-inline block mx-auto style={{width: 125px; height: 2px}}" />
            <p className="mt-2 text-muted">This could be a brief about section about the project and/or about Team Sage or this whole section could be about Innovate Bham PD</p>
          </div>

          <div className="col-md-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold text-white">Useful Links</h6>
            <hr className="bg-dark mb-4 mt-0 d-inline block mx-auto style={{width: 110px; height: 2px}}" />

            <ul className="list-unstyled">
              <li className="my-2 text-muted">Home</li>
              <li className="my-2 text-muted">About</li>
              <li className="my-2 text-muted">Contact</li>
              <li className="my-2 text-muted">Lorem</li>
            </ul>
          </div>

          <div className="col-md-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold text-white">Contact</h6>
            <hr className="bg-dark mb-4 mt-0 d-inline block mx-auto style={{width: 75px; height: 2px}}" />

            <ul className="list-unstyled">
              <li className="my-2 text-muted"><i className="fas fa-home"></i> 1500 1st Ave N, Birmingham, AL 35203</li>
              <li className="my-2 text-muted"><i className="fas fa-envelope"></i> info@innovatebham.com</li>
              <li className="my-2 text-muted"><i className="fas fa-phone"></i> 205.555.5555</li> 
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 text-muted">
        <p>&copy; 2020 Sage Products</p>
      </div>
    </footer>

  );
};

interface FooterProps { }

export default Footer;
