import React, { useState, useEffect } from 'react';
import '../scss/elevatorpitch.scss'


const ElevatorPitch: React.FC<InterviewProps> = props => {
    return (
        <div className="bg-midnight">

            <main className="container-fluid">
                {/* <div className="page-container"> */}

                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-gold text-center">Home</h1>
                        </div>
                    </div>

                    <div className="row bg-navy py-5">

                        <div className="col-4 text-center text-light pb-5">

                            <img className="profile-pic" src="/assets/josh.jpg" alt=""/>
                            <h4>Student Studentson</h4>
                            <h5 className="neg-top-margin">Dev Instructor</h5>
                            
                            <h6 className="mt-3">github.com/joshjosh</h6>
                            <h6>linkedin.com/joshjosh</h6>

                        </div>

                        <div className="col-8 d-flex justify-content-around text-center text-light">

                            <div className="link-box"></div>
                            <div className="link-box"></div>
                            <div className="link-box"></div>

                        </div>

                        
                        
                    </div>

                {/* </div> */}
                
            </main>

        </div>
        
      
    )
}

interface InterviewProps { }

export default ElevatorPitch;
