import React, { useState, useEffect } from "react";

import "../scss/common-Qs.scss";

const CommonInterviewQs: React.FC<CommonInterviewQsProps> = (props) => {
  return (
    <main className="container text-midnight">
      {/* BACKGROUND IMAGE */}
      <div className="home-img-wrapper">
        <div className="common-Qs-bg-img"></div>
      </div>

      {/* PAGE TITLE */}
      <div className="row title-row">
        <div className="col-12 text-center bg-midnight">
          <h2 className="text-white text-center pt-3 pb-3">Common Interview Questions</h2>
        </div>
      </div>

      {/* Start Coding Here */}

      <div className="row dark-row common-Qs-footer-fix d-flex justify-content-center">
        {/* YOU KNOW... THE SCHPEELE */}
        <div className=" commonq border-midnight text-center text-white mt-5 mb-4 py-2">
          <h6>
            There are many common questions asked by hiring managers, but for
            the most most part, what they really want to know boils down to who
            you are, what you're good at and why you'd be a good fit for the
            job. The trick is to be familiar with what kind of questions might
            be asked and to think though what it is you'd like them to know
            about you ahead of time.You don't want to give canned responses, but
            thinking these through and practicing your responses ahead of time
            will put you ahead of the curve.{" "}
          </h6>
          <p></p>
          <p></p>

          <h6>
            Below you will find many commonly asked questions and some advice on
            how to aproach them. Spend some time putting your own spin on these
            as you go through the rest of the course, and you'll be ready to
            face the job market with confidence by the time you graduate.
          </h6>
        </div>

        {/* QUESTIONS AND SUCH */}
        <div className="tellme text-white border-midnight text-center rounded my-1 py-2">
          <h4>
            <u>Tell Me About Yourself</u>
          </h4>
          <p>
            This question seems simple, so many people fail to prepare for it,
            but it’s crucial. Here's the deal: Don’t give your complete
            employment or personal history. Instead give a pitch—one that’s
            concise and compelling and that shows exactly why you’re the right
            fit for the job. Try using a present, past, future formula. Talk a
            little bit about your current role (including the scope and perhaps
            one big accomplishment), then give some background as to how you got
            there and experience you have that’s relevant. Finally, segue into
            why you want—and would be perfect for—this role.
          </p>
        </div>

        <div className="commonq text-center text-white border-midnight rounded pb-5 my-1 py-2">
          <h4>
            <u>How Did You Hear About This Position?</u>
          </h4>
          <p>
            Another seemingly innocuous interview question, this is actually a
            perfect opportunity to stand out and show your passion for and
            connection to the company. For example, if you found out about the
            gig through a friend or professional contact, name drop that person,
            then share why you were so excited about it. If you discovered the
            company through an event or article, share that. Even if you found
            the listing through a random job board, share what, specifically,
            caught your eye about the role.
          </p>
        </div>

        <div className="commonq text-center text-white border-midnight rounded pb-5 my-1 py-2">
          <h4>
            <u>What Are Your Greatest Strengths?</u>
          </h4>
          <p>
            The main reason interviewers ask this question is to identify
            whether your strengths align with the needs of the company and the
            job's responsibilities. The company wants to learn whether you're a
            good fit for the role you're interviewing for. The goal of the
            interviewer is to make a match between your credentials and the
            skills needed to succeed in the job. Think about the strengths
            others have told you that you have, particularly in relation to your
            work. These can be skills, like using specific technology, or
            characteristics that make you successful.
          </p>
        </div>

        <div className="commonq text-center text-white border-midnight rounded pb-5 my-1 py-2">
          <h4>
            <u>What Are Your Greatest Weaknesses?</u>
          </h4>
          <p>
            To properly answer this dreaded interview question, remember: Focus
            on being self-aware, honest, and dedicated to improvement. If you've
            got these three qualities, your weakness won't ruin your chances of
            landing the job. Try to reflect on your real weaknesses and what
            you're doing to improve.
          </p>
        </div>
        <div className="commonq text-center text-white border-midnight rounded pb-5 my-1 py-2">
          <h4>
            <u>Where Do You See Yourself In Five Years?</u>
          </h4>
          <p>
            So, how do you answer, “Where do you see yourself in five years?”
            This can feel like a bit of a trick question, because sometimes the
            answer is, “not in this job,” or, “in your job,” or something like,
            “at a bigger better opportunity elsewhere.” But none of those are
            things you actually want to say to a hiring manager. The good news
            is you can be honest while still telling them what they really want
            to know. Do you have realistic expectations for your career? Are you
            ambitious? And does this particular position align with your growth
            and goals overall? For example, one way I like to think about it is:
            Think about where this position could realistically take you, and
            think about how that aligns with some of your broader professional
            goals. So, for example, you might say, “Well I’m really excited by
            this position at Midnight Consulting because in five years, I’d like
            to be seen as someone with deep expertise in the energy sector, and
            I know that’s something that I’ll have an opportunity to do here.
            I’m also really excited to take on more managerial responsibilities
            in the next few years and potentially even take the lead on some
            projects. I’ve been lucky enough to work with some amazing managers,
            and so developing into a great manager myself is something I’m
            really excited about.” So, what if this position is not a one-way
            ticket to your professional aspirations? It’s okay to say you don’t
            really know what the future holds, but you see how this experience
            could really help in making that decision.
          </p>
        </div>
      </div>
    </main>
  );
};

interface CommonInterviewQsProps {}

export default CommonInterviewQs;
