import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar"
// import Timer from "./Timer";
import "../scss/elevator-pitch.scss";
import Recorder from "./recorder";

const ElevatorPitch: React.FC<ElevatorProps> = (props) => {
  return (
    <React.Fragment>
      <div className="top-box bg-midnight">
        <main className="container-fluid text-light">
          <div className="row top-row">
            <div className="col-12 text-center bg-midnight">
              <h1 className=" text-center">Let's Work On Our Elevator Pitch</h1>
            </div>
          </div>

          <div className="row d-flex justify-content-center py-5">
            <div className="col-4 text-center text-light">
              <img className="profile-pic" src="/assets/josh.jpg" alt="josh" />
              <h6>Josh Hurn</h6>
              <h6>Web Development Candidate</h6>
              <h6>Cohort 12</h6>
              <h6 className="neg-top-margin"></h6>

              <h6></h6>
            </div>

            <div className="elevator-div col-8 d-flex text-center text-midnight">
              <img
                className="elevator-pic"
                src="/assets/elevator_pitch.jpg"
                alt="elevator"
              />
            </div>
          </div>

          <div className="body row display-flex justify-content-center align-items-center bg-light m-6 p-5">
            <div className="paragraphs">
              <h2 className="p1 text-midnight">What is an Elevator Pitch?</h2>
              <p className="text-midnight">
                A candidate elevator pitch is a professional summary of who you
                are and what you do in a nutshell. It’s listing your values,
                experiences, skills, and career goals in about 30-60 seconds.
                Even though this is short pitch, it should be compelling enough
                to grab someone’s attention and interest. Having an elevator
                pitch is a great way to give a quick introduction of yourself to
                hiring managers. This article gives key points on how to
                construct your candidate elevator pitch and use it successfully.
              </p>

              <h2 className="p2 bg-light text-midnight">
                Elements You Should Include{" "}
              </h2>
              <p className="text-midnight">
                In your candidate elevator pitch, you want to get the main point
                across about who you are in your career. You don’t want to list
                your entire resume and long-term career goals, but a very
                shortened version of that. Think about being in an elevator; you
                have a very limited amount of time before you reach the next
                floor and the hiring manager your talking to steps out. As a
                Java Developer, your pitch should include a quick overview of
                your technology skills and qualifications, notable companies and
                roles you were/are involved in, tenure (if it applies),
                significant accomplishments, and your next career move. You
                don’t need to go too in depth, but give enough information to
                make your point. You never know where a 60 second conversation
                leads you.
              </p>

              <h2 className="p3 bg-light text-midnight">
                Constructing Your Candidate Elevator Pitch
              </h2>

              <p className="text-midnight">
                When constructing your elevator pitch as a Software Developer,
                you should begin by writing it out. Don’t try to do it in your
                head, because you are never going to get it the same every time.
                Writing it out gives you a clear path of what to say and allows
                for easy memorization. As a technology candidate, you want to go
                into interviews or networking events able to highlight the
                successes you’ve had that are relevant to the position you are
                interviewing for. Once you have your pitch written down,
                practice saying it out loud. I recommend you practice it in
                front of a mirror. You want to practice it so it sounds like it
                comes naturally. Doing this makes it much easier to deliver
                during a phone screen, job interview, or networking event.
              </p>
            </div>
            <div className="row d-flex justify-content-center bg-light py-5">
              <div className="recorder-div">
                <Recorder />
              </div>
            </div>
            <section className="input field px-5">
              <div className="input-group"></div>
              <input
                type="text"
                className="form-control text-center"
                style={{ height: 250, width: 500 }}
                placeholder="Type Practice Pitch Here"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              ></input>
              <button
                type="submit"
                className="btn btn-lg btn-outline-secondary my-2"
              >
                Save Pitch
              </button>
            </section>
          </div>

          {/* <div className="link-box">
            <Timer />
          </div> */}
          {/* </div> */}
        </main>
      </div>
    </React.Fragment>
  );
};

interface ElevatorProps {}

export default ElevatorPitch;
