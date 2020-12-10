import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/footer";


const Footer: React.FC<FooterProps> = (props) => {
  return (

    <footer className="footer">

      {/* YELLOW TOP FOOTER */}
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

      
      {/* BLUE BOTTOM FOOTER */}
      <div className="container-fluid bottom-footer d-flex flex-column text-light py-0">
        <div className="text-center text-md-left mt-5">
          <div className="row">

            {/* EMPTY COLUMN FOR SPACING SINCE COLUMNS !== 12 ... YES IT'S WEIRD, BUT IT WORKS!! */}
            <div className="col-md-1"></div>

            {/* CONTACT COLUMN */}
            <div className="col-md-2 mx-auto mb-4">
              <h6 className="underline text-uppercase text-center font-weight-bold text-white">Contact</h6>

              <ul className="list-unstyled ">

                <a className="href" href="https://www.google.com/maps/place/Innovate+Birmingham/@33.5119225,-86.8147297,17z/data=!3m1!4b1!4m5!3m4!1s0x88891b8d7a155555:0x215bf02a05530f62!8m2!3d33.5119225!4d-86.812541" target="_blank"
                   onMouseOver={(e) => e.preventDefault()}>
                  <li className="mt-2 mb-0 text-muted text-nowrap"><i className="fas fa-home"></i> 1500 1st Ave North</li>
                  <li className="mt-0 ml-4 text-muted text-nowrap">Birmingham, AL 35203</li>  
                </a>

                <a href={"mailto: info@innovatebham.com"} className="text-decor-none">
                  <li className="my-2 text-muted text-decor-none text-nowrap d-none d-lg-block"><i className="fas fa-envelope"></i> info@innovatebham.com</li>
                  <li className="my-2 text-muted text-decor-none d-block d-lg-none"><i className="fas fa-envelope"></i> info@innovatebham.com</li>
                </a>

                <a className="href" href="https://www.innovatebham.com/" target="_blank"
                   onMouseOver={(e) => e.preventDefault()}>
                  <li className="my-2 text-muted text-nowrap"><i className="fas fa-globe"></i> innovatebham.com</li> 
                </a>

              </ul>
            </div>
            
            {/* LINKS COLUMN */}
            <div className="col-md-2 mx-auto mb-4 text-center">
              <h6 className="underline text-uppercase font-weight-bold text-white">Links</h6>
              <ul className="list-unstyled">

                <Link to="/home-" className="text-decor-none"><li className="my-2 text-muted">Back to Home</li></Link>
                <Link to="/staff" className="text-decor-none"><li className="my-2 text-muted">Innovate Staff</li></Link>
                <Link to="/resources" className="text-decor-none"><li className="my-2 text-muted">About the Program</li></Link>
                <Link to="/resources" className="text-decor-none"><li className="my-2 text-muted">About the Website</li></Link>

              </ul>
            </div>
            
            {/* DEVELOPER NOTES COLUMN - REMOVE LINK TAGS ONCE WE ROUTE ANOTHER WAY BACK TO LOGIN */}
            <div className="col-md-3 mx-auto mb-4">
              <Link to="/">
                <h6 className="underline text-uppercase text-center font-weight-bold text-white mr-md-5">Developer Notes</h6>
                <p className="mt-2 text-muted">The Innovate Birmingham Candidate Portal was designed, developed and deployed as a final project by software development candidates in the Fall of 2020. All the best from Cohort 12!</p>
              </Link>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copyright text-center py-3 text-muted">
          <p>&copy; 2020 Innovate Birmingham by Sage Productions</p>
        </div>
        
      </div>
    </footer>
  );
};

interface FooterProps {}

export default Footer;
