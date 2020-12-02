import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/footer";


const Footer: React.FC<FooterProps> = (props) => {
  return (

    <footer className="footer">

      <div className="top-footer justify-content-center">
        <div className="py-2 px-3 bg-yellow d-flex justify-content-between 
                        align-items-center text-center text-navy text-large">

          <div>
            <h5 className="d-none d-sm-flex my-0 mx-3">Stay in Touch!</h5>
          </div>

          <div className="d-flex justify-content-between align-items-center">

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

      <div className="bottom-footer d-flex flex-column text-light py-0">
        <div className="padding-container text-center px-5">
          <div className="row">

            <div className="col-4">

              <h6><strong>Innovate</strong></h6>
              <hr className="yellow-underline mb-1 d-inline-block mx-auto"></hr>

              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>

            </div>

            <div className="col-4">

              <h6><strong>Other</strong></h6>
              <hr className="yellow-underline mb-1 d-inline-block mx-auto"></hr>

              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>

            </div>

            <div className="col-4">

              <h6><strong>Contact</strong></h6>
              <hr className="yellow-underline mb-1 d-inline-block mx-auto"></hr>

              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>
              <p className="m-0">footer</p>

            </div>
          </div>

          <p className="text-center mt-5 mb-0 py-0 text-muted">Copyright © 2020: Innovate Birmingham</p>

        </div>
        
      </div>
    </footer>
  );
};

interface FooterProps {}

export default Footer;
