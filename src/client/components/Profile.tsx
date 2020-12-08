import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../scss/profile.scss'

const Profile: React.FC<ProfileProps> = props => {
    const [isOpenPersonal, setIsOpenPersonal] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [isOpenBio, setIsOpenBio] = useState(false);

    const [profilePicture, editProfilePicture] = useState('');
    const [firstName, editFirstName] = useState("Jake's Little");
    const [lastName, editLasName] = useState("Friend");
    const [preferredName, editpreferredName] = useState("Dude");
    const [fullName, editFullName] = useState(`${firstName} ${lastName}`);
    const [role, editRole] = useState("Web Dev Candidate");
    const [cohort, editCohort] = useState("Cohort 12 - Fall 2020");
    const [userCity, editCity] = useState("Birmingham");
    const [userState, editState] = useState("AL");
    const [location, editLocation] = useState(`${userCity}, ${userState}`);
    const [phone, editPhone] = useState("205.555.5555");
    const [githubUrl, editGithubUrl] = useState("github.com/candidate");
    const [linkedinUrl, editLinkedinUrl] = useState("linkedin.com/candidate");
    const [email, editEmail] = useState("candidate@email.com");
    const [bio, editBio] = useState("I'm pretty cool");




    const toggleModalPersonal = () => {
        setIsOpenPersonal(!isOpenPersonal);
      };
    
    const toggleModalContact = () => {
        setIsOpenPersonal(!isOpenPersonal);
      };
    
    const toggleModalBio = () => {
        setIsOpenPersonal(!isOpenPersonal);
      };
    
    return (

        <main className="container-fluid text-midnight">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Profile</h2>
                </div>
            </div>


            {/* EDIT USER INFO MODAL*/}
            <Modal isOpen={isOpenPersonal} onRequestClose={toggleModalPersonal} contentLabel="login-dialog"
                    className="profile-modal px-3" overlayClassName="modal-overlay" closeTimeoutMS={250}>

                {/* MODAL HEADER AND 'X' BUTTON */}
                <div className="modal-header">
                <h5 className="modal-title mr-5" id="modalLoginTitle">Edit User Info</h5>
                    <button type="button" className="close close-modal-x m-0 p-0" data-dismiss="modal" aria-label="Close"
                            onClick={toggleModalPersonal}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
                {/* MODAL BODY */}
                <div className="modal-body">

                    {/* INPUT FIELDS FORM */}
                    <form>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={firstName} />
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={lastName} />
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={preferredName} />
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={userCity} />
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={userState} />
                    </div>

                    {/* <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={phone} />
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={githubUrl} />
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={linkedinUrl} />
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder={email} />
                    </div> */}

                        
                        
                    </form>
                </div>

                {/* ADDS BOTTOM VERTICAL LINE IN LOGIN MODAL */}
                <div className="modal-footer mt-4">

                    {/* SUBMIT BUTTON*/}
                    <div className="row float-right mt-2">
                        <button className="btn btn-sm btn-warning mr-3" type="button" data-dismiss="modal"
                                onClick={toggleModalPersonal}>Submit</button>
                    </div>

                </div>
            </Modal>


            <div className="row d-flex mt-5 text-center profile-bottom-row-fix">

                <div className="home-profile-container-col-4 col-6 text-center text-midnight mt-5 py-2">
                            
                    <img className="profile-profile-pic" src="/assets/jakesLittleFriend-small.png" alt="profile picture"/>
                    
                    <p className="click-to-edit text-muted">(click to edit picture)</p>
                    <h4 className="user-name text-midnight mt-2">{fullName}</h4>
                    <h5 className="neg-top-margin">{role}</h5>
                    <h5 className="neg-top-margin">{cohort}</h5>
                    <h5 className="neg-top-margin">{location}</h5>
                    <h5 className="neg-top-margin">{phone}</h5>
                    <button type="button" className="btn btn-sm btn-warning mt-2"
                            onClick={toggleModalPersonal}>Edit Info</button>
                    
                    <h6 className="mt-3">{githubUrl}</h6>
                    <h6>{linkedinUrl}</h6>
                    <h6>{email}</h6>

                    <button type="button" className="btn btn-sm btn-warning mt-2"
                            onClick={toggleModalContact}>Edit Info</button>
                </div>
                
                
                {/* <div className="col-md-6 info-container">

                  
                    <img className="home-profile-pic ml-5" src="/assets/josh.jpg" alt="profile picture"/>
                    
                    <p className="click-to-edit text-muted ml-5">(change profile picture)</p>

                    <form action="/action_page.php">
                        
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Student</a>
                            <a className="dropdown-item" href="#">Staff</a>
                            <a className="dropdown-item" href="#">Alumni</a>
                        </div>
                    </div>


                        <div className="form-group justify-content-center d-flex ml-5 mt-4">
                            <input type="text" name="first-name" placeholder="FirstName" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="last-name" placeholder="LastName" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="preferred-name" placeholder="NickName" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="phone" placeholder="(XXX)XXX-XXXX" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="email" placeholder="Email " size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="city/state" placeholder="City,State" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="github" placeholder="github-Email" size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                        <div className="form-group justify-content-center d-flex ml-5">
                            <input type="text" name="linkedin" placeholder="linkedin-Email " size={35}></input>
                            <button className="btn btn-sm btn-outline-warning border-midnight text-midnight ml-1">Edit</button>
                        </div>

                    </form>
                </div> */}


                <div className="col-md-6 text-center">

                    <div className="mt-5 text-left">
                        <h3>Tell us about yourself...</h3>
                    </div>

                    <form action="">
                        <div className="form-group mr-5 pr-5">
                            <textarea name="message" placeholder="User Bio" rows={17} cols={75}></textarea>
                        </div>
                    </form>
                    

                    <button type="button" className="btn btn-sm btn-warning mt-2"
                            onClick={toggleModalBio}>Edit Bio</button>

                </div>

            </div>
        </main>
    )
}


interface ProfileProps { }

export default Profile;
