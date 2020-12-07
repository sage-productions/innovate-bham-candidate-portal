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


                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/DB.Jpg" alt="profile picture"/>
                    <h4>Denita Bearden</h4>
                    <h5 className="neg-top-margin">Director of Operations</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="assets/staff-pics/KK.jpg " alt="profile picture"/>
                    <h4>Kayla King</h4>
                    <h5 className="neg-top-margin">Director of Admissions</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/HH.png" alt="profile picture"/>
                    <h4>Haley Hoppe</h4>
                    <h5 className="neg-top-margin">Director of Engagement</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/DD.png" alt="profile picture"/>
                    <h4>Deva DeDios </h4>
                    <h5 className="neg-top-margin">Marketing Strategist</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="assets/staff-pics/RS.jpg" alt="profile picture"/>
                    <h4>Rachel Davis Smith </h4>
                    <h5 className="neg-top-margin">Operations Coordinator </h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/CL.jpg" alt="profile picture"/>
                    <h4> Carlton lewis</h4>
                    <h5 className="neg-top-margin">Development Coach </h5>
                </div> 

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/BM.jpg" alt="profile picture"/>
                    <h4>Brandie McGee</h4>
                    <h5 className="neg-top-margin">Senior Case Manager</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/RH.jpg" alt="profile picture"/>
                    <h4>Robin Hunt</h4>
                    <h5 className="neg-top-margin">Co-founder of ThinkData</h5>

                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="assets/staff-pics/TA.png" alt="profile picture"/>
                    <h4>Taylor Abney</h4>
                    <h5 className="neg-top-margin">Data Instructor</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="assets/staff-pics/Josh.jpg" alt="profile picture"/>
                    <h4>Josh Hurn</h4>
                    <h5 className="neg-top-margin">Web Development Instructor</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/ad.jpg" alt="profile picture"/>
                    <h4>Adrian Drane</h4>
                    <h5 className="neg-top-margin">Data Analytics TA</h5>
                </div>    

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/RW.png" alt="profile picture"/>
                    <h4>Reggie White</h4>
                    <h5 className="neg-top-margin">Data Analytics TA</h5>

                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src="/assets/staff-pics/garrett-harris.jpg" alt="profile picture"/>
                    <h4>Garrett Harris</h4>
                    <h5 className="neg-top-margin">Web development TA</h5>
                </div>

                <div className="col-md-4 text-center pb-5">
                    <img className="resources-profile-pic" src=" assets/staff-pics/JL.png" alt="profile picture"/>
                    <h4>Jake Lovett</h4>
                    <h5 className="neg-top-margin">Web development TA</h5>

                </div>

                

            </div>

        </main>
    )
}

interface StaffProps { }

export default Staff;
