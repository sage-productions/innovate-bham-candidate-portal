import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/home.scss'


const Home: React.FC<HomeProps> = props => {
    return (
        // <div className="bg-midnight">

            <main className="container-fluid text-midnight">
                {/* <div className="page-container"> */}

                    <div className="row title-row">
                        <div className="col-12 text-center bg-midnight">
                            <h2 className="text-gold text-center"><u>Home</u></h2>
                        </div>
                    </div>

                    <div className="row py-5 page-row">

                        <div className="col-sm-4 text-center text-midnight py-2">
                            <Link to="/profile/1">
                                <img className="profile-pic" src="/assets/josh.jpg" alt=""/>
                            </Link>
                            
                            <p className="click-to-edit text-muted">(click to edit profile)</p>
                            <h4 className="user-name text-midnight mt-2">Josh the Hurn</h4>
                            <h5 className="neg-top-margin">Web Dev Instructor</h5>
                            <h5 className="neg-top-margin">Cohort 12 - Fall 2020</h5>
                            
                            <h6 className="mt-3">github.com/joshjosh</h6>
                            <h6>linkedin.com/joshjosh</h6>
                            <h6>joshjosh@innovatebham.com</h6>

                        </div>

                        <div className="link-container col-sm-8 d-flex flex-wrap justify-content-around text-center">

                            <div className="link-row flex-column">
                            
                                <Link className="link" to="/resume/:id" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1">
                                        <h5><strong>Resume</strong></h5>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
                                    </div>
                                </Link>
                                
                                <a className="href" href="https://hiddeninnovators.co/" target="_blank"
                                    onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1 my-5">
                                        <h5><strong>Hidden Innovators</strong></h5>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
                                    </div>
                                </a>

                            </div>
                            
                            <div className="link-row flex-column">
                                
                                <Link className="link" to="/interviewprep/:id" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1">
                                        <h5><strong>Interview Prep</strong></h5>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
                                    </div>
                                </Link>
                                
                                <a className="href" href="https://sigao.io/" target="_blank"
                                    onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1 my-5">
                                        <h5><strong>Sigao Studios</strong></h5>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
                                    </div>
                                </a>

                            </div>

                            <div className="link-row flex-column">
                                
                                <Link className="link" to="/flashcards" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1">
                                        <h5><strong>Flashcards</strong></h5>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
                                    </div>
                                </Link>
                                
                                <Link className="link" to="/resources" onMouseOver={(e) => e.preventDefault()}>
                                    <div className="link-boxes mx-1 my-5">
                                        <h5><strong>Resources</strong></h5>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illo sed animi velitoam!</p>
                                    </div>
                                </Link>

                            </div>
                            

                        </div>

                    </div>

                {/* </div> */}
                
            </main>

        // </div>
        
      
    )
}

interface HomeProps { }

export default Home;
