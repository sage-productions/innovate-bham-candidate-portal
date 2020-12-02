import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar"
import Timer from "./Timer";
import "../scss/elevator-pitch.scss"


const ElevatorPitch: React.FC<ElevatorProps> = (props) => {
    
  return (
   
<React.Fragment>

  
    <div className="top-box bg-midnight">
      <main className="container-fluid">
        {/* <div className="page-container"> */}

        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-gold text-center">
              Let's Work On Our Elevator Pitch
            </h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center bg-navy py-5">
          <div className="col-4 text-center text-light pb-5">
            {/* <div className="row d-flex justify-content-center bg-navy py-5"></div> */}

            <img className="profile-pic" src="/assets/josh.jpg" alt="josh" />
            <h6>Student Studentson</h6>
            <h6 className="neg-top-margin"></h6>

            <h6></h6>
          </div>

          <div className="elevator-div col-8 d-flex text-center text-light">
            <img
              className="elevator-pic"
              src="/assets/elevator_pitch.jpg"
              alt="elevator"
            />
          </div>
        </div>

        <div className="body display-flex justify-content-center align-items-center text-light bg-navy m-6 p-5">
          <h2 className="elevator-heading">What is an Elevator Pitch?</h2>
          <p>
            So what exactly is an elevator pitch? In
            a nutshell it’s just what it sounds like: a short, 30-60 second well
            crafted business pitch telling someone who you are and why they
            should want to hire you. It’s called the elevator pitch because it’s
            meant to represent the amount of time you’d have if you were stuck
            in an elevator with someone riding from the bottom of the building
            to the top. A solid elevator pitch will allow you to distill
            down to the most pure form exactly who you are and what you can offer.
            That focus can help to set you apart from all the other
            candidates who are vying for the same job. Think of it as a
            commercial and you’re the product. You’ve got 30 seconds to market
            yourself and convince whoever is listening to not only NOT change
            the channel, but to buy what you’re selling...YOU as the Perfect
            Candidate!
          </p>
        </div>

        <div className="link-box">
          <Timer />
        </div>
        {/* </div> */}
      </main></div></React.Fragment>
  );
};

interface ElevatorProps {}
``
export default ElevatorPitch;
