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

                {/* ALERT WINDOW - DOESN'T SHOW UNLESS THERE'S TEXT IN IT */}
                {/* FUTURE FUNCTIONALTIY */}
                {/* ADMIN SHOULD BE ABLE TO ADD MSG TO ONLY CANDIDATES, TO ALUM, TO ALL, ETC */}
                {/* INDIVIDUAL USERS SHOULD BE ABLE TO CLEAR THE MSG FOR THEIR PORTAL, BUT NOT EVERYONE'S */}
                {/* CAN WE MAKE IT SO IT POPS UP WITHOUT A PAGE REFRESH */}
                <div className="row alert-row justify-content-center">
                    <div className="col-md-8 text-center text-white font-weight-bold mt-5 mb-4">
                        <div className="alert-window bg-aqua rounded">
                            Please have your updated resumes in tomorrow. 
                            <br />Demo Day is in 5 days!! 
                            <br />Looking forward to seeing everyone's final projects!
                        </div>
                    </div>
                </div>

                <div className="row py-5 page-row">

                    {/* USER PROFILE PICTURE AND INFO - ALL SCREEN SIZES UP TO 1231 */}
                    <div className="home-profile-container-col-12 col-12 text-center text-midnight mb-5 py-2">
                        <Link to="/profile/1">
                            <img className="home-profile-pic" src="/assets/gh.jpg" alt="profile picture"/>
                        </Link>
                        
                        <p className="click-to-edit text-muted">(click to edit profile)</p>
                        <h4 className="user-name text-midnight mt-2">Garrett from Jasper</h4>
                        <h5 className="neg-top-margin">Web Dev Candidate</h5>
                        <h5 className="neg-top-margin">Cohort 12 - Fall 2020</h5>
                        
                        <h6 className="mt-3">github.com/candidate</h6>
                        <h6>linkedin.com/candidate</h6>
                        <h6>candidate@gmail.com</h6>

                    </div>



                    {/* USER PROFILE PICTURE AND INFO - SCREEN SIZE 1232 AND UP */}
                    <div className="home-profile-container-col-4 col-4 text-center text-midnight mb-5 py-2">
                        <Link to="/profile/1">
                            <img className="home-profile-pic" src="/assets/gh.jpg" alt="profile picture"/>
                        </Link>
                        
                        <p className="click-to-edit text-muted">(click to edit profile)</p>
                        <h4 className="user-name text-midnight mt-2">Garrett from Jasper</h4>
                        <h5 className="neg-top-margin">Web Dev Candidate</h5>
                        <h5 className="neg-top-margin">Cohort 12 - Fall 2020</h5>
                        
                        <h6 className="mt-3">github.com/candidate</h6>
                        <h6>linkedin.com/candidate</h6>
                        <h6>candidate@gmail.com</h6>

                    </div>


                    {/* BIG SQUARE LINKS - MOBILE VIEW UP TO SCREEN WIDTH 826 */}
                    <div className="link-container-xs-display-to-826 col-12 col-lg-8 flex-wrap justify-content-around text-center">

                        <div className="link-row flex-column">
                        
                            {/* RESUME LINK */}
                            <Link className="link" to="/resume/:id" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Resume</strong></h5>
                                    <p className="mt-3">Upload your resumes to keep them all in one place and receive feedback from PD staff members</p>
                                </div>
                            </Link>
                            
                            {/* HIDDEN INNOVATORS LINK */}
                            <a className="href" href="https://hiddeninnovators.co/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Hidden Innovators</strong></h5>
                                    <p className="mt-3">Hidden Innovators is on a mission to build a more creative, innovative world. Click here to learn more</p>
                                </div>
                            </a>

                        </div>
                        
                        <div className="link-row flex-column">
                            
                            {/* INTERVIEW PREP / ELEVATOR PITCHES LINK */}
                            <Link className="link" to="/elevatorpitch/1" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Interview Prep</strong></h5>
                                    <p className="mt-3">Work on your elevator pitch and review common interview questions</p>
                                </div>
                            </Link>
                            
                            {/* SIGAO STUDIOS LINK */}
                            <a className="href" href="https://sigao.io/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Sigao Studios</strong></h5>
                                    <p className="mt-3">Sigao Studios is an Agile coaching and software development firm</p>
                                </div>
                            </a>

                        </div>

                        <div className="link-row flex-column">
                            
                            {/* FLASHCARDS LINK */}
                            <Link className="link" to="/flashcards" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Flashcards</strong></h5>
                                    <p className="mt-3">Brush up on your technical knowledge so that you can speak the language with potential employers</p>
                                </div>
                            </Link>

                        </div>

                        <div className="link-row flex-column">

                            {/* RESOURCES LINK */}
                            <Link className="link" to="/resources" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5 my-sm-2">
                                    <h5><strong>Resources</strong></h5>
                                    <p className="mt-3">Staff contact information and links to other helpful sites around the web</p>
                                </div>
                            </Link>

                        </div>
                    </div>


                    {/* BIG SQUARE LINKS - SCREEN WIDTH 827 TO 991 (MAX MEDIUM IS 991) */}
                    <div className="link-container-md-display-from-827 col-12 col-lg-8 d-lg-none flex-wrap justify-content-around text-center">

                        <div className="link-row flex-column">
                        
                            {/* RESUME LINK */}
                            <Link className="link" to="/resume/:id" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Resume</strong></h5>
                                    <p className="mt-3">Upload your resumes to keep them all in one place and receive feedback from PD staff members</p>
                                </div>
                            </Link>
                            
                            {/* HIDDEN INNOVATORS LINK */}
                            <a className="href" href="https://hiddeninnovators.co/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Hidden Innovators</strong></h5>
                                    <p className="mt-3">Hidden Innovators is on a mission to build a more creative, innovative world. Click here to learn more</p>
                                </div>
                            </a>

                        </div>
                        
                        <div className="link-row flex-column">
                            
                            {/* INTERVIEW PREP / ELEVATOR PITCHES LINK */}
                            <Link className="link" to="/elevatorpitch/1" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Interview Prep</strong></h5>
                                    <p className="mt-3">Work on your elevator pitch and review common interview questions</p>
                                </div>
                            </Link>
                            
                            {/* SIGAO STUDIOS LINK */}
                            <a className="href" href="https://sigao.io/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Sigao Studios</strong></h5>
                                    <p className="mt-3">Sigao Studios is an Agile coaching and software development firm</p>
                                </div>
                            </a>

                        </div>

                        <div className="link-row flex-column">
                            
                            {/* FLASHCARDS LINK */}
                            <Link className="link" to="/flashcards" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Flashcards</strong></h5>
                                    <p className="mt-3">Brush up on your technical knowledge so that you can speak the language with potential employers</p>
                                </div>
                            </Link>
                            
                            {/* RESOURCES LINK */}
                            <Link className="link" to="/resources" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5 mb-3">
                                    <h5><strong>Resources</strong></h5>
                                    <p className="mt-3">Staff contact information and links to other helpful sites around the web</p>
                                </div>
                            </Link>

                        </div>
                    </div>



                    {/* BIG SQUARE LINKS - SCREEN SIZE 992 (LG STARTS AT 992) TO 1232 */}
                    <div className="link-container-lg-screen-size-to-1232 col-12 flex-wrap justify-content-around text-center">

                        <div className="link-row flex-column">
                        
                            {/* RESUME LINK */}
                            <Link className="link" to="/resume/:id" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Resume</strong></h5>
                                    <p className="mt-3">Upload your resumes to keep them all in one place and receive feedback from PD staff members</p>
                                </div>
                            </Link>
                            
                            {/* HIDDEN INNOVATORS LINK */}
                            <a className="href" href="https://hiddeninnovators.co/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Hidden Innovators</strong></h5>
                                    <p className="mt-3">Hidden Innovators is on a mission to build a more creative, innovative world. Click here to learn more</p>
                                </div>
                            </a>

                        </div>
                        
                        <div className="link-row flex-column">
                            
                            {/* INTERVIEW PREP / ELEVATOR PITCHES LINK */}
                            <Link className="link" to="/elevatorpitch/1" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Interview Prep</strong></h5>
                                    <p className="mt-3">Work on your elevator pitch and review common interview questions</p>
                                </div>
                            </Link>
                            
                            {/* SIGAO STUDIOS LINK */}
                            <a className="href" href="https://sigao.io/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Sigao Studios</strong></h5>
                                    <p className="mt-3">Sigao Studios is an Agile coaching and software development firm</p>
                                </div>
                            </a>

                        </div>

                        <div className="link-row flex-column">
                            
                            {/* FLASHCARDS LINK */}
                            <Link className="link" to="/flashcards" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Flashcards</strong></h5>
                                    <p className="mt-3">Brush up on your technical knowledge so that you can speak the language with potential employers</p>
                                </div>
                            </Link>
                            
                            {/* RESOURCES LINK */}
                            <Link className="link" to="/resources" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5 mb-3">
                                    <h5><strong>Resources</strong></h5>
                                    <p className="mt-3">Staff contact information and links to other helpful sites around the web</p>
                                </div>
                            </Link>

                        </div>
                    </div>




                    {/* BIG SQUARE LINKS - SCREEN SIZES 1232 AND UP*/}
                    <div className="link-container-xl-from-screen-size-1232 col-12 col-lg-8 flex-wrap justify-content-around text-center">

                        <div className="link-row flex-column">
                        
                            {/* RESUME LINK */}
                            <Link className="link" to="/resume/:id" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Resume</strong></h5>
                                    <p className="mt-3">Upload your resumes to keep them all in one place and receive feedback from PD staff members</p>
                                </div>
                            </Link>
                            
                            {/* HIDDEN INNOVATORS LINK */}
                            <a className="href" href="https://hiddeninnovators.co/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Hidden Innovators</strong></h5>
                                    <p className="mt-3">Hidden Innovators is on a mission to build a more creative, innovative world. Click here to learn more</p>
                                </div>
                            </a>

                        </div>
                        
                        <div className="link-row flex-column">
                            
                            {/* INTERVIEW PREP / ELEVATOR PITCHES LINK */}
                            <Link className="link" to="/elevatorpitch/1" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Interview Prep</strong></h5>
                                    <p className="mt-3">Work on your elevator pitch and review common interview questions</p>
                                </div>
                            </Link>
                            
                            {/* SIGAO STUDIOS LINK */}
                            <a className="href" href="https://sigao.io/" target="_blank"
                                onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5">
                                    <h5><strong>Sigao Studios</strong></h5>
                                    <p className="mt-3">Sigao Studios is an Agile coaching and software development firm</p>
                                </div>
                            </a>

                        </div>

                        <div className="link-row flex-column">
                            
                            {/* FLASHCARDS LINK */}
                            <Link className="link" to="/flashcards" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes">
                                    <h5><strong>Flashcards</strong></h5>
                                    <p className="mt-3">Brush up on your technical knowledge so that you can speak the language with potential employers</p>
                                </div>
                            </Link>
                            
                            {/* RESOURCES LINK */}
                            <Link className="link" to="/resources" onMouseOver={(e) => e.preventDefault()}>
                                <div className="link-boxes my-5 mb-3">
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
