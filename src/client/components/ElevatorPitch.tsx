import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
// import Sidebar from "./Sidebar;
import "../scss/elevator-pitch.scss";
import Recorder from "./recorder";

const ElevatorPitch: React.FC<ElevatorProps> = (props: ElevatorProps) => {
  const [pitches, setPitches] = React.useState<ElevatorProps[]>([]);
  const [content, setContent] = React.useState({
    id: null,
    content: "",
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent({
      id: content.id,
      content: e.target.value,
    });

  const newPitch = async () => {
    // const pitch = {
    //    content: content,
    //  };

    let res = await fetch(`/routes/elevatorpitches/${props.match.params.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });
    if (res.ok) {
      console.log("Pitch successfully posted");
      // history.push("/");
    } else {
      console.log("Pitch not posted");
    }
  };

  React.useEffect(() => {
    getPitches();
  }, []);

  const getPitches = async () => {
    try {
      let res = await fetch(`/routes/elevatorpitches/${props.match.params.id}`);
      let pitches = await res.json();
      setPitches(pitches);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="top-box">
        <main className="body1 container-fluid">
          <div className="row top-row">
            <div className="col-12 text-center">
              <h1 className="display-4 bg-midnight text-center text-white">
                Let's Work On Our Elevator Pitch
              </h1>
            </div>
          </div>

          <div className="elevator-div d-flex justify-content-center bg-midnight text-center text-midnight">
            <img
              className="elevator-pic"
              src="/assets/elevators.jpg"
              alt="elevator"
            />
          </div>

          <div className="body display-flex justify-content-center align-items-center">
            {/* <section className="paragraphs bg-light text-center"> */}
            <section className="p1 bg-light text-center text-midnight">
              <h2 className="">What is an Elevator Pitch?</h2>
              <p className="para1 pb-5 m-0">
                A candidate elevator pitch is a professional summary of who you
                are and what you do in a nutshell. It’s listing your values,
                experiences, skills, and career goals in about 30-60 seconds.
                Even though this is short pitch, it should be compelling enough
                to grab someone’s attention and interest. Having an elevator
                pitch is a great way to give a quick introduction of yourself to
                hiring managers. This article gives key points on how to
                construct your candidate elevator pitch and use it successfully.
              </p>
            </section>
            <section className="p2 p-5 text-center text-midnight">
              <h2 className="">Elements You Should Include </h2>
              <p className="para-2 m-0">
                In your candidate elevator pitch, you want to get the main point
                across about who you are and where you are in your career. You
                don’t want to list your entire resume and long-term career
                goals, but a very shortened version of that. Think about being
                in an elevator; you have a very limited amount of time before
                you reach the next floor and the hiring manager you're talking
                to steps out. As a Software Developer, your pitch should include
                a quick overview of your technology skills and qualifications,
                notable companies and roles you were/are involved in, tenure (if
                it applies), significant accomplishments, and your next career
                move. You don’t need to go too in depth, but give enough
                information to make your point. You never know where a 60 second
                conversation can lead you.
              </p>
            </section>
            <section className="p3 p-5 bg-light py-3">
              <h2 className="text-center text-midnight">
                Constructing Your Candidate Elevator Pitch
              </h2>

              <p className="pb-2">
                When constructing your elevator pitch as a Software Developer,
                you should begin by writing it out. Don’t try to do it in your
                head, because you are never going to get it the same every time.
                Writing it out gives you a clear path of what to say and allows
                for easy memorization. As a technology candidate, you want to go
                into interviews or networking events able to highlight the
                successes you’ve had that are relevant to the position you are
                interviewing for. Once you have your pitch written down,
                practice saying it out loud. It is recommended that you practice
                it in front of a mirror. Or here, using our video recorder. You
                want to practice it so it sounds like it comes naturally. Doing
                this makes it much easier to deliver during a phone screen, job
                interview, or networking event.
              </p>
            </section>
            <h2 className="pt-5 text-center text-midnight">
              Practicing Your Elevator Pitch
            </h2>
            <p>
              Below you will find a video recorder for practicing and timing
              your pitch, and then replaying it. You will also find an input
              field for typing out what you want to say. Clicking the button
              will save the pitch so you can access what you have written later
              on.
            </p>
            {/* </section> */}
            <section className="bottom-section bg-white">
              <div className=" py-5">
                <div className="recorder-div">
                  <Recorder />

                  <div className="input-group bg-light pt-2"></div>
                  <input
                    type="text"
                    className="form-control text-center"
                    style={{ height: 250, width: 500 }}
                    placeholder="Type Practice Pitch Here"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={content.content}
                    onChange={handleContentChange}
                  ></input>
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
              <section className="pitches">
                {pitches.map((pitch) => (
                  <div key={pitch.id} className="card" style={{ width: 200 }}>
                    <div className="card-body">
                      <p className="card-text">{pitch.content}</p>
                    </div>
                  </div>
                ))}
              </section>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

interface ElevatorProps extends RouteComponentProps<{ id: string }> {
  id: number;
  content: string;
}

export default ElevatorPitch;
