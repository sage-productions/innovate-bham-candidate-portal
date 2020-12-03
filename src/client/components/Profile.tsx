import React, { useState, useEffect } from 'react';


const Profile: React.FC<ProfileProps> = props => {
    return (
        <div className="bg-img">
            <div className="container">
                <div className="row d-flex md-1 text-center">
                </div>
                <div>
                    <div id="infoContainer">
                    <img className="profile-pic" src="/assets/josh.jpg" alt=""/>
                    <form className="form-group my-2" action="/action_page.php">
                        <div className="form-group">
                            <input type="text" name="userID" placeholder="UserID"></input>
                        </div>

                        <div className="form-group">
                            <input type="text" name="firstname" placeholder="First Name"></input>
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

                    </form>
                </div>
</div>
                <div className="col-md-9 text-center">

                    <div className="fom-group">
                        <textarea name="message" placeholder="Bio" rows={16} cols={30}></textarea>
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

interface ProfileProps { }

export default Profile;
