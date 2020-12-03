import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/home-alt.scss";

const Home: React.FC<HomeProps> = (props) => {
  return (
    <main className="container-fluid text-midnight">
      <div className="row title-row">
        <div className="col-12 text-center bg-midnight">
          <h2 className="text-gold text-center">
            <u>Home</u>
          </h2>
        </div>
      </div>

      <div className="row py-5 page-row">
        <div className="col-sm-4 text-center pb-5">
          <img className="profile-pic" src="/assets/josh.jpg" alt="" />
          <h4 className="name-text">Josh the Hurn</h4>
          <h5 className="neg-top-margin">Web Dev Instructor</h5>
          <h5 className="neg-top-margin">Cohort 12 - Fall 2020</h5>

          <h6 className="mt-3">github.com/joshjosh</h6>
          <h6 className="mt-3">linkedin.com/joshjosh</h6>
          <h6 className="mt-3">joshjosh@innovatebham.com</h6>
        </div>

        <div className="col-sm-8 d-flex flex-wrap justify-content-around text-center">
          <div className="link-row flex-column">
            <Link
              className="link"
              to="/resume/:id"
              onMouseOver={(e) => e.preventDefault()}
            >
              <div className="link-boxes mx-1">
              <h6 className="header-text">
                  <strong>Resume</strong>
                </h6>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore illo sed animi velitoam!
                </p>
              </div>
            </Link>

            <a
              className="href"
              href="https://hiddeninnovators.co/"
              target="_blank"
              onMouseOver={(e) => e.preventDefault()}
            >
              <div className="link-boxes mx-1 my-5">
              <h6 className="header-text">
                  <strong>Hidden Innovators</strong>
                </h6>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore illo sed animi velitoam!
                </p>
              </div>
            </a>
          </div>

          <div className="link-row flex-column">
            <Link
              className="link"
              to="/interviewprep/:id"
              onMouseOver={(e) => e.preventDefault()}
            >
              <div className="link-boxes mx-1">
              <h6 className="header-text">
                  <strong>Interview Prep</strong>
                </h6>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore illo sed animi velitoam!
                </p>
              </div>
            </Link>

            <a
              className="href"
              href="https://sigao.io/"
              target="_blank"
              onMouseOver={(e) => e.preventDefault()}
            >
              <div className="link-boxes mx-1 my-5">
                <h6 className="header-text">
                  <strong>Sigao Studios</strong>
                </h6>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore illo sed animi velitoam!
                </p>
              </div>
            </a>
          </div>

          <div className="link-row flex-column">
            <Link
              className="link"
              to="/flashcards"
              onMouseOver={(e) => e.preventDefault()}
            >
              <div className="link-boxes mx-1">
              <h6 className="header-text">
                  <strong>Flashcards</strong>
                </h6>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore illo sed animi velitoam!
                </p>
              </div>
            </Link>

            <Link
              className="link"
              to="/resources"
              onMouseOver={(e) => e.preventDefault()}
            >
              <div className="link-boxes mx-1 my-5">
              <h6 className="header-text">
                  <strong>Resources</strong>
                </h6>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore illo sed animi velitoam!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div> 



      {/* <div className="container flex">
        <div className="card shadow">
        <h4>Resume</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
        </div>
      </div>

      <div className="container flex">
        <div className="card shadow">
        <h4>Resume</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
        </div>
      </div> */}




    </main>
  );
};

interface HomeProps {}

export default Home;
