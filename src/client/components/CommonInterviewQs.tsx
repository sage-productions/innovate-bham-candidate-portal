import React, { useState, useEffect } from 'react';

import '../scss/common-Qs.scss';


const CommonInterviewQs: React.FC<CommonInterviewQsProps> = props => {
    return (
        <main className="container-fluid text-midnight">

            {/* BACKGROUND IMAGE */}
            <div className="home-img-wrapper">
                <div className="common-Qs-bg-img"></div>
            </div>

            {/* PAGE TITLE */}
            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Common Interview Questions</h2>
                </div>
            </div>

            
            {/* Start Coding Here */}

            <div className="row dark-row common-Qs-footer-fix d-flex justify-content-center">

                {/* YOU KNOW... THE SCHPEELE */}
                <div className="col-12 bg-midnight border-midnight round text-left text-white mt-5 mb-4 px-5 py-2">
                    <h6>There are many common questions asked by hiring managers, but for the most
                    most part, what they really want to know boils down to who you are, what
                    you're good at and why you'd be a good fit for the job. The trick is to 
                    be familiar with what kind of questions might be asked and to think
                    though what it is you'd like them to know about you ahead of time.You 
                    don't want to give canned responses, but thinking these through and 
                    practicing your responses ahead of time will put you ahead of the curve. </h6>
                    <p></p><p></p>

                    <h6>Below you will find many commonly asked questions and some
                    advice on how to aproach them. Spend some time putting your own spin on 
                    these as you go through the rest of the course, and you'll be ready to 
                    face the job market with confidence by the time you graduate.
                    </h6>
                </div>


                {/* QUESTIONS AND SUCH */}
                <div className="col-6 text-left text-white border-midnight rounded my-1 px-5 py-2">
                    <h4><u>Tell me about yourself</u></h4>
                    <p>
                        This question seems simple, so many people fail to prepare for it, but it’s crucial. 
                        Here's the deal: Don’t give your complete employment or personal history. Instead 
                        give a pitch—one that’s concise and compelling and that shows exactly why you’re the 
                        right fit for the job. Try using a present, past, future formula. Talk a little bit 
                        about your current role (including the scope and perhaps one big accomplishment), 
                        then give some background as to how you got there and experience you have that’s 
                        relevant. Finally, segue into why you want—and would be perfect for—this role.
                    </p>
                </div>

                <div className="col-6 text-left text-white border-midnight rounded my-1 py-2 px-5">
                    <h4><u>How Did You Hear About This Position</u></h4>
                    <p>
                        Another seemingly innocuous interview question, this is actually a perfect opportunity 
                        to stand out and show your passion for and connection to the company. For example, if 
                        you found out about the gig through a friend or professional contact, name drop that 
                        person, then share why you were so excited about it. If you discovered the company 
                        through an event or article, share that. Even if you found the listing through a 
                        random job board, share what, specifically, caught your eye about the role.
                    </p>
                </div>




            </div>











        </main>
    )
}

interface CommonInterviewQsProps { }

export default CommonInterviewQs;