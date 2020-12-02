import React, { useState, useEffect } from 'react';


const Profile: React.FC<ProfileProps> = props => {
    return (
        <div className="bg-img">
            <div className="row d-flex justify-content-center">
                
                <div className="col-md-4 text-center">

                    <div>
                        <h2>Candidate Profile</h2>
                        <img src="paris.jpg" alt="Paris" width="100" height="100"></img>
                            <form className="form-group my-2" action="/action_page.php">

                                <div className="form-group">
                                    <input type="text" name="userID" placeholder="UserID"></input>
                                </div>

                                <div className="form-group">
                                    <input type="text" name="firstname"  placeholder="First Name"></input>
                                </div>

                                <div className="form-group">
                                    <input type="text" name="lastname" placeholder="Last Name"></input>
                                </div>

                                <div className="form-group">
                                    <input type="text" name="preferredname" placeholder="Preferred Name"></input>
                                </div>

                                <div className="form-group">
                                    <input type="number" name="phonenumber" placeholder="(000)000-0000"></input>
                                </div>

                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Email"></input>
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" name="city/state" placeholder="City,State"></input>
                                </div>

                                <button type="button" className="btn btn-warning">Submit</button>
                            </form>
                    </div>
                    
                </div>


                <div className="col-md-8 text-center">

                    <div className="fom-group">
                        <textarea name="message" placeholder="Bio" rows={15} cols={30}></textarea>  
                    </div>   

                    <div className="form-group my-2">
                        <input type="text" name="github" placeholder="Github Email"></input>
                    </div>
                                
                    <div className="form-group">
                        <input type="text" name="linkedin" placeholder="Linkedin Email"></input>
                    </div>

                    <button type="button" className="btn btn-warning">Submit</button>
                </div>

            </div>
        </div>
    )
}

interface ProfileProps {}

export default Profile;
