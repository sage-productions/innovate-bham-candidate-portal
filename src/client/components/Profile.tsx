import React, { useState, useEffect } from 'react';


const Profile: React.FC<ProfileProps> = props => {
    return (

        <main className="container-fluid text-midnight">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Profile</h2>
                </div>
            </div>

            <div className="row d-flex mt-5 text-center page-row-fix">

                <div className="col-md-6 info-container">

                    {/* <Link to="/profile/1"> */}
                        <img className="home-profile-pic ml-5" src="/assets/josh.jpg" alt="profile picture"/>
                    {/* </Link> */}
                    <p className="click-to-edit text-muted ml-5">(change profile picture)</p>

                    <form action="/action_page.php">
                        
                        <div className="form-group justify-content-center d-flex ml-5 mt-4">
                            <input type="text" name="first-name" placeholder="Joshua" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="last-name" placeholder="Hurn" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="preferred-name" placeholder="Josh the Hurn" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="phone" placeholder="(205) 555-5555" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="email" placeholder="joshjosh@innovatebham.com" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="city/state" placeholder="Hoover, AL" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="github" placeholder="github.com/joshjosh" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="linkedin" placeholder="linkedin.com/joshjosh" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                    </form>
                </div>


                <div className="col-md-6 text-center">

                    <div className="mt-5 text-left">
                        <h3>Tell us about yourself...</h3>
                    </div>

                    <form action="">
                        <div className="form-group mr-5 pr-5">
                            <textarea name="message" placeholder="User Bio" rows={21} cols={75}></textarea>
                        </div>
                    </form>
                    

                    <button type="button" className="btn btn-warning mt-2">Submit</button>

                </div>

            </div>
        </main>
    )
}


interface ProfileProps { }

export default Profile;
