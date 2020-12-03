import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/footer";


const Footer: React.FC<FooterProps> = (props) => {
  return (

    <footer className="footer">

      <div className="top-footer bg-gold justify-content-center">
        <div className="py-2 px-3 bg-yellow d-flex justify-content-between 
                        align-items-center text-center text-navy text-large">

          {/* <div>
            <h5 className="d-none d-sm-flex my-0 mx-3">Stay in Touch!</h5>
          </div> */}

          <div className="d-flex justify-content-between align-items-center">

            <a className="mx-5" href="https://www.facebook.com/InnovateBirmingham"
               rel="noopener noreferrer" target="_blank">
              <i className="fab fa-facebook-square text-midnight"></i>
            </a>

            <a className="mx-5" href="https://www.instagram.com/innovate_bham/"
               rel="noopener noreferrer" target="_blank">
              <i className="fab fa-instagram text-midnight"></i>
            </a>

            <a className="mx-5" href="https://www.linkedin.com/company/innovatebirmingham/"
              rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin text-midnight"></i>
            </a>

          </div>
        </div>
      </div>



      <div className="bottom-footer d-flex flex-column text-light py-0">


      <div className="text-center text-md-left mt-5">
        <div className="row">

          <div className="col-md-1"></div>

          <div className="col-md-2 mx-auto mb-4 text-center">
            <h6 className="underline text-uppercase font-weight-bold text-white">Links</h6>
            <hr className="bg-dark mb-4 mt-0 d-inline block mx-auto style={{width: 110px; height: 2px}}" />

            <ul className="list-unstyled">
              <li className="my-2 text-muted">Home</li>
              <li className="my-2 text-muted">About</li>
              <li className="my-2 text-muted">Contact</li>
              <li className="my-2 text-muted">Website</li>
            </ul>
          </div>

          <div className="col-md-2 mx-auto mb-4">
            <h6 className="underline text-uppercase text-center font-weight-bold text-white">Contact</h6>
            <hr className="bg-dark mb-4 mt-0 d-inline block mx-auto style={{width: 75px; height: 2px}}" />

            <ul className="list-unstyled ml-4">
              <li className="mt-2 mb-0 text-muted"><i className="fas fa-home"></i> 1500 1st Ave N</li>
              <li className="mt-0 ml-4 text-muted">Bham, AL 35203</li>
              <li className="my-2 text-muted"><i className="fas fa-envelope"></i> info@innovatebham.com</li>
              <li className="my-2 text-muted"><i className="fas fa-phone"></i> 205.555.5555</li> 
            </ul>
          </div>
          
          <div className="col-md-3 mx-auto mb-4">
            <h6 className="underline text-uppercase text-center font-weight-bold text-white mr-5">Developer Notes</h6>
            <hr className="bg-dark mb-4 mt-0 d-inline block mx-auto style={{width: 125px; height: 2px}}" />
            <p className="mt-2 text-muted">The Innovate Birmingham Candidate Portal was designed, developed and deployed as a final project by software development candidates in the Fall of 2020. All the best from Cohort 12!</p>
          </div>

        </div>
      </div>

      <div className="footer-copyright text-center py-3 text-muted">
        <p>&copy; 2020 Innovate Birmingham by Sage Productions</p>
      </div>


        {/* <div className="container padding-container text-center px-5">
          <div className="row">

            <div className="col-4">

              <h6><strong className="underline">INNOVATE BHAM</strong></h6>

              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>

            </div>

            <div className="col-4">

              <h6><strong className="underline">USEFUL LINKS</strong></h6>

              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>

            </div>

            <div className="col-4">

              <h6><strong className="underline">CONTACT INFO</strong></h6>

              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>

            </div>
          </div>

          <p className="text-center mt-5 mb-0 py-0 text-muted">Copyright © 2020: Innovate Birmingham</p>

        </div> */}
        
      </div>
    </footer>
  );
};

interface FooterProps {}

export default Footer;
