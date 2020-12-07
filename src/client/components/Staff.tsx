import React, { useState, useEffect } from 'react';
import '../scss/staff';


const Staff: React.FC<StaffProps> = props => {
    return (
        <main className="container-fluid text-midnight">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Staff</h2>
                </div>
            </div>


            <div className="row page-row mt-5">

                {/* Re-order these so they are in the same order as on innovate's staff page */}

                {/* Add Robin Hunt and whoever else we're missing - Ask Josh, Garrett or Jake... */}
                    {/* put whoever you add in the order wherever it makes the most sense */}

                {/* Add a profile pic to each... */}
                    {/* for each person, choose the best pic from either innovate's page or slack */}


                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Josh Hurn</h4>
                    <h5 className="neg-top-margin">Web Dev Instructor</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Carlton Lewis</h4>
                    <h5 className="neg-top-margin">Professional Development</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Jake Lovett</h4>
                    <h5 className="neg-top-margin">Web Dev TA</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Garrett Harris </h4>
                    <h5 className="neg-top-margin">Web Dev Instructor</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Taylor Abney</h4>
                    <h5 className="neg-top-margin">Data Instructor</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Reggie White</h4>
                    <h5 className="neg-top-margin">Data Instructor</h5>
                </div> 

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Rachel Davis Smith</h4>
                    <h5 className="neg-top-margin">Operations Coordinator</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Haley Hoppe</h4>
                    <h5 className="neg-top-margin">Director Of Engagement</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Brandie McGee</h4>
                    <h5 className="neg-top-margin">Senior Case Manager</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Deva Dedios</h4>
                    <h5 className="neg-top-margin">Marketing Srategist</h5>
                </div>    

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Adrian Drane</h4>
                    <h5 className="neg-top-margin">Data Analytics TA</h5>
                </div>

            </div>

        </main>
    )
}

interface StaffProps { }

export default Staff;
