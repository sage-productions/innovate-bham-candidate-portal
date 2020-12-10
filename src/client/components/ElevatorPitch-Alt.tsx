//@ts-nocheck
import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { Link } from "react-router-dom";


import "../scss/elevator-pitch-alt.scss";
import Recorder from "./recorder";

const ElevatorPitch: React.FC<ElevatorProps> = (props: ElevatorProps) => {
  const [pitches, setPitches] = useState<ElevatorProps[]>([]);

  const [content, setContent] = useState({
    userid: null,
    content: "",
  });

  

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent({
      userid: content.userid,
      content: e.target.value,
    });

  const newPitch = async () => {
    let res = await fetch(
      `https://quiet-basin-68498.herokuapp.com/routes/api/elevatorpitches/${props.match.params.userid}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      }
    );
    if (res.ok) {
      console.log("Pitch successfully posted");
      location.reload();
      // props.history.push(`/elevatorpitch/${props.match.params.userid}`);
    } else {
      console.log("Pitch not posted");
    }
  };


  useEffect(() => {
    getPitches();
  }, []);

  const getPitches = async () => {
    try {
      let res = await fetch(
        `https://quiet-basin-68498.herokuapp.com/routes/api/elevatorpitches/${props.match.params.userid}`
      );
      let pitches = await res.json();
      setPitches(pitches);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <main className="container-fluid text-midnight align-items-center elevator-footer-fix">
      {/* <div className="page-container"> */}

      {/* BACKGROUND IMAGE */}
      <div className="home-img-wrapper">
          <div className="elevator-bg-img"></div>
      </div>

      <div className="row title-row">
        <div className="col-12 text-center bg-midnight">
          <h2 className="text-white text-center">Interview Prep</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center bg-midnight mb-2">

          <Link to="/common-interview-Qs" className="text-white href mx-2">
            <h5>Common Interview Qs</h5>
          </Link>

          <div className="text-white mx-2">|</div>

          <Link to="/elevatorpitch/1" className="text-white href mx-2">
            <h5>Elevator Pitches</h5>
          </Link>

          <div className="text-white mx-2">|</div>

          <Link to="/custom-interview-Qs" className="text-white href ml-2 mr-3">
            <h5>Custom Interview Qs</h5>
          </Link>

        </div>
      </div>

        {/* <div className="elevator-div d-flex justify-content-center bg-midnight text-center text-midnight">
            <img className="elevator-pic" src="/assets/elevators.jpg" alt="elevator" />
          </div> */}

      <div className="row elevator-image">
        <img
          className="col-12 elevator-pic"
          src="/assets/elevators.jpg"
          alt="elevator"
        />
      </div>

      <div className="bg-filter-elevator">

        <div className="row body display-flex justify-content-center align-items-center">
          {/* <section className="paragraphs bg-light text-center"> */}

          <section className="col-12 p1 text-center text-white p-5">
            <h2 className="">What is an Elevator Pitch?</h2>
            <p className="para1 mx-md-3 mx-lg-5">
              An elevator pitch is a professional summary of who you are and what
              you do in a nutshell. It’s listing your values, experiences, skills,
              and career goals in about 30-60 seconds. Even though this is short
              pitch, it should be compelling enough to grab someone’s attention
              and interest. Having an elevator pitch is a great way to give a
              quick introduction of yourself to hiring managers. This article
              gives key points on how to construct your elevator pitch and use it
              successfully.
            </p>
          </section>

          <section className="col-12 p2 text-center text-white p-3">
            <h2 className="">Elements You Should Include</h2>
            <p className="para-2 mx-md-3 mx-lg-5">
              In your elevator pitch, you want to get the main point across about
              who you are and where you are in your career. You don’t want to list
              your entire resume and long-term career goals, but a very shortened
              version of that. Think about being in an elevator; you have a very
              limited amount of time before you reach the next floor and the
              hiring manager you're talking to steps out. As a Software Developer,
              your pitch should include a quick overview of your technology skills
              and qualifications, notable companies and roles you were/are
              involved in, tenure (if it applies), significant accomplishments,
              and your next career move. You don’t need to go too in depth, but
              give enough information to make your point. You never know where a
              60 second conversation can lead you.
            </p>
          </section>

          <section className="col-12 p3 text-center text-white p-3">
            <h2>Developing Your Elevator Pitch</h2>
            <p className="mx-md-3 mx-lg-5">
              When constructing your elevator pitch as a Software Developer, you
              should begin by writing it out. Don’t try to do it in your head,
              because you are never going to get it the same every time. Writing
              it out gives you a clear path of what to say and allows for easy
              memorization. As a technology candidate, you want to go into
              interviews or networking events able to highlight the successes
              you’ve had that are relevant to the position you are interviewing
              for. Once you have your pitch written down, practice saying it out
              loud. It is recommended that you practice it in front of a mirror.
              Or here, using our video recorder. You want to practice it so it
              sounds like it comes naturally. Doing this makes it much easier to
              deliver during a phone screen, job interview, or networking event.
            </p>
          </section>

          <section className="col-12">
            <h2 className="pt-3 px-5 text-center text-white">
              Practicing Your Elevator Pitch
            </h2>
            <p className="p4 text-white">
              Below you will find a video recorder for practicing and timing your
              pitch, and an input field for typing out what you want to say.
              Clicking the button will save the pitch so you can access what you
              have written later.
            </p>
          </section>

          {/* </section> */}
          <section className="row d-flex justify-content-center align-items-center">
            <div className="recorder-cont col-12 py-5">
              <div className="recorder-div d-none d-sm-block">
                <Recorder />

                <div className="input-group pt-2"></div>
                
                <textarea
                  className="form-control text-center"
                  style={{ height: 250, width: 500, backgroundColor:'#161929CB', color: 'white' }}
                  placeholder="Type Practice Pitch Here"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={content.content}
                  onChange={handleContentChange}
                ></textarea>

                <section>
                  <button
                    type="submit"
                    // style={{height:100, width: 100}}
                    className="btn-pitch btn text-midnight btn-lg btn-warning my-2"
                    onClick={newPitch}
                  >
                    Save Pitch
                  </button>
                </section>
              </div>
            </div>

            <div className="col-12 py-5">
              <div className="recorder-div-small-screen d-block d-sm-none">
                <Recorder />

                <div className="input-group pt-2"></div>
                <textarea
                  className="small-screen-pitch-textarea form-control text-white text-center"
                  style={{ height: 250, width: 375 }}
                  placeholder="Type Practice Pitch Here"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={content.content}
                  onChange={handleContentChange}
                ></textarea>

                <section>
                  <button
                    type="submit"
                    // style={{height:100, width: 100}}
                    className="btn-pitch btn-lg btn-outline-secondary my-2"
                    onClick={newPitch}
                  >
                    Save Pitch
                  </button>
                </section>
              </div>
            </div>

            <section className="row pitches">
              {pitches.map((pitch => (
                <div
                  key={pitch.id}
                  className="card bg-transparent text-white col-12"
                >
                  <div className="card-body">
                  <h5 className="card-title">Saved Pitch</h5>
                    <p className="card-text">{pitch?.content}</p>
                  </div>
                </div>
              )))}
            </section>
          </section>

        </div>
      </div>
    </main>
  );
};

interface ElevatorProps extends RouteComponentProps<{ userid: string }> {
}

export default ElevatorPitch;
