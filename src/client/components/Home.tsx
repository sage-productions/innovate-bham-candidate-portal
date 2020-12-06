import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/home.scss'


const Home: React.FC<HomeProps> = props => {
    return (

            <main className="container-fluid text-midnight">
                {/* <div className="page-container"> */}

                    <div className="row title-row">
                        <div className="col-12 text-center bg-midnight">
                            <h2 className="text-white text-center">Home</h2>
                        </div>
                    </div>

                    <div className="row py-5 page-row">

                        {/* USER PROFILE PICTURE AND INFO */}
                        <div className="col-12 col-lg-4 text-center text-midnight mb-5 py-2">
                            <Link to="/profile/1">
                                <img className="home-profile-pic" src="/assets/gh.jpg" alt="profile picture"/>
                            </Link>
                            
                            <p className="click-to-edit text-muted">(click to edit profile)</p>
                            <h4 className="user-name text-midnight mt-2">Garrett from Jasper</h4>
                            <h5 className="neg-top-margin">Web Dev Instructor</h5>
                            <h5 className="neg-top-margin">Cohort 12 - Fall 2020</h5>
                            
                            <h6 className="mt-3">github.com/joshjosh</h6>
                            <h6>linkedin.com/joshjosh</h6>
                            <h6>stumpy@innovatebham.com</h6>

                        </div>

                        {/* BIG SQUARE LINKS */}
                        <div className="link-container col-12 col-lg-8 d-flex flex-wrap justify-content-around text-center">

                            <div className="link-row flex-column">
                            
                                {/* RESUME LINK */}
                                <Link className="link" to="/resume/:id" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1">
                                        <h5><strong>Resume</strong></h5>
                                        <p className="mt-3">Upload your resumes to keep them all in one place and receive feedback from PD staff members</p>
                                    </div>
                                </Link>
                                
                                {/* HIDDEN INNOVATORS LINK */}
                                <a className="href" href="https://hiddeninnovators.co/" target="_blank"
                                    onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1 my-5">
                                        <h5><strong>Hidden Innovators</strong></h5>
                                        <p className="mt-3">Hidden Innovators is on a mission to build a more creative, innovative world. Click here to learn more</p>
                                    </div>
                                </a>

                            </div>
                            
                            <div className="link-row flex-column">
                                
                                {/* INTERVIEW PREP / ELEVATOR PITCHES LINK */}
                                <Link className="link" to="/elevatorpitch/1" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1">
                                        <h5><strong>Interview Prep</strong></h5>
                                        <p className="mt-3">Work on your elevator pitch and review common interview questions</p>
                                    </div>
                                </Link>
                                
                                {/* SIGAO STUDIOS LINK */}
                                <a className="href" href="https://sigao.io/" target="_blank"
                                    onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1 my-5">
                                        <h5><strong>Sigao Studios</strong></h5>
                                        <p className="mt-3">Sigao Studios is an Agile coaching and software development firm</p>
                                    </div>
                                </a>

                            </div>

                            <div className="link-row flex-column">
                                
                                {/* FLASHCARDS LINK */}
                                <Link className="link" to="/flashcards" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1">
                                        <h5><strong>Flashcards</strong></h5>
                                        <p className="mt-3">Brush up on your technical knowledge so that you can speak the language with potential employers</p>
                                    </div>
                                </Link>
                                
                                {/* RESOURCES LINK */}
                                <Link className="link" to="/resources" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1 my-5">
                                        <h5><strong>Resources</strong></h5>
                                        <p className="mt-3">Staff contact information and links to other helpful sites around the web</p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </main>
    )
}

interface HomeProps { }

export default Home;
