import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../scss/profile.scss'

const Profile: React.FC<ProfileProps> = props => {
    const [isOpenPersonal, setIsOpenPersonal] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [isOpenBio, setIsOpenBio] = useState(false);

    const [profilePicture, setProfilePicture] = useState('');
    const [firstName, setFirstName] = useState("Johnny");
    const [lastName, setLastName] = useState("Candidate");
    const [preferredName, setPreferredName] = useState("Johnny");
    const [fullName, setFullName] = useState(`${firstName} ${lastName}`);
    const [role, setRole] = useState("Web Development");
    const [cohort, setCohort] = useState("Cohort 12 - Fall 2020");
    const [userCity, setUserCity] = useState("Birmingham");
    const [userState, setUserState] = useState("AL");
    const [location, setLocation] = useState(`${userCity}, ${userState}`);
    const [phone, setPhone] = useState("205.555.5555");
    const [githubUrl, setGithubUrl] = useState("github.com/candidate");
    const [linkedinUrl, setLinkedinUrl] = useState("linkedin.com/candidate");
    const [email, setEmail] = useState("candidate@email.com");
    const [bio, setBio] = useState(
        `I’m a web developer...\n\n I spend most every day, experimenting with HTML, CSS, and JavaScript; dabbling with React and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.\n\n

        I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using, and my Goodreads will give you a glimpse into the reading material I find interesting enough to share.\n\n
        
        A slight clarification of the above: I’m actually a philosophy student cleverly disguised as a successful web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living sitting under a tree while reading Kant, I’ve focused my energies on the web, which happily has proven itself to be a wonderful decision.`
    );

    useEffect(() => {setFirstName(firstName)}, [firstName])
    useEffect(() => {setBio(bio)}, [bio])
    useEffect(() => {setFullName(`${firstName} ${lastName}`)}, [firstName, lastName])
    useEffect(() => {setLocation(`${userCity}, ${userState}`)}, [userCity, userState])
    
    

    const toggleModalPersonal = () => {
        setIsOpenPersonal(!isOpenPersonal);
      };
    
    const toggleModalContact = () => {
        setIsOpenContact(!isOpenContact);
      };
    
    const toggleModalBio = () => {
        setIsOpenBio(!isOpenBio);
      };
    

    return (

        <main className="container-fluid text-midnight">

            {/* TITLE ROW */}
            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Profile</h2>
                </div>
            </div>




            {/* BACKGROUND IMAGE */}
            <div className="home-img-wrapper">
                <div className="profile-bg-img"></div>
            </div>




            {/* EDIT USER INFO MODAL*/}
            <Modal isOpen={isOpenPersonal} onRequestClose={toggleModalPersonal} contentLabel="login-dialog"
                    className="profile-modals px-3" overlayClassName="modal-overlay" closeTimeoutMS={250}>

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
                            
                            <input type="text" className='form-control'
                                    name="first-name" placeholder={firstName} value={firstName}
                                    onChange={e => setFirstName(e.target.value)}>
                            </input>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            
                            <input type="text" className='form-control'
                                    name="last-name" placeholder={lastName} value={lastName}
                                    onChange={e => setLastName(e.target.value)}>
                            </input>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>

                            <input type="text" className='form-control'
                                    name="preferred-name" placeholder={preferredName} value={preferredName}
                                    onChange={e => setPreferredName(e.target.value)}>
                            </input>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>

                            <input type="text" className='form-control'
                                    name="user-city" placeholder={userCity} value={userCity}
                                    onChange={e => setUserCity(e.target.value)}>
                            </input>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>

                            <input type="text" className='form-control'
                                    name="user-state" placeholder={userState} value={userState}
                                    onChange={e => setUserState(e.target.value)}>
                            </input>
                        </div>

                    </form>
                </div>

                {/* ADDS BOTTOM VERTICAL LINE IN LOGIN MODAL */}
                <div className="modal-footer mt-1">

                    {/* SUBMIT BUTTON*/}
                    <div className="row float-right mt-2">
                        <button className="btn btn-sm btn-warning mr-3" type="button" data-dismiss="modal"
                                onClick={toggleModalPersonal}>Submit</button>
                    </div>

                </div>
            </Modal>

            
            
            
            {/* EDIT CONTACT INFO MODAL*/}
            <Modal isOpen={isOpenContact} onRequestClose={toggleModalContact} contentLabel="contact-dialog"
                    className="profile-modals px-3" overlayClassName="modal-overlay" closeTimeoutMS={250}>

                {/* MODAL HEADER AND 'X' BUTTON */}
                <div className="modal-header">
                <h5 className="modal-title mr-5" id="modalLoginTitle">Edit User Info</h5>
                    <button type="button" className="close close-modal-x m-0 p-0" data-dismiss="modal" aria-label="Close"
                            onClick={toggleModalContact}>
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
                            <input type="text" className="form-control" placeholder={phone} 
                                    onChange={e => setPhone(e.target.value)}></input>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder={githubUrl} 
                                    onChange={e => setGithubUrl(e.target.value)}></input>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder={linkedinUrl} 
                                    onChange={e => setLinkedinUrl(e.target.value)}></input>
                        </div>

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder={email} 
                                    onChange={e => setEmail(e.target.value)}></input>
                        </div>

                        {/* SUBMIT BUTTON*/}
                        <div className="row float-right mt-2">
                            <button className="btn btn-sm btn-warning mr-3" type="button" data-dismiss="modal"
                                    onClick={toggleModalContact}>Submit</button>
                        </div>

                    </form>
                </div>

                {/* MODAL FOOTER - ADDS BOTTOM VERTICAL LINE */}
                {/* <div className="modal-footer mt-1"></div> */}

            </Modal>




            {/* EDIT BIO MODAL*/}
            <Modal isOpen={isOpenBio} onRequestClose={toggleModalBio} contentLabel="bio"
                    className="profile-modals px-3" overlayClassName="modal-overlay" closeTimeoutMS={250}>

                {/* MODAL HEADER AND 'X' BUTTON */}
                <div className="modal-header">

                    <h5 className="modal-title mr-5" id="modalLoginTitle">Edit Bio</h5>

                    <button type="button" className="close close-modal-x m-0 p-0" data-dismiss="modal" aria-label="Close"
                            onClick={toggleModalBio}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>
                
                {/* MODAL BODY */}
                <div className="modal-body">

                    {/* INPUT FIELDS FORM */}
                    <form action="">
                        <div className="form-group">
                            <textarea name="bio-message" placeholder={bio} value={bio} rows={17} cols={75}
                                      onChange={e => setBio(e.target.value)}>
                            </textarea>
                        </div>
                    </form>

                </div>

                {/* ADDS BOTTOM VERTICAL LINE IN LOGIN MODAL */}
                <div className="modal-footer mt-1">

                    {/* SUBMIT BUTTON*/}
                    <div className="row float-right mt-2">
                        <button className="btn btn-sm btn-warning mr-3" type="button" data-dismiss="modal"
                                onClick={toggleModalBio}>Submit</button>
                    </div>

                </div>
            </Modal>



            {/* CONTACT INFO DISPLAY */}
            <div className="row d-flex mt-5 text-center profile-bottom-row-fix">

                {/* TRANSPARENT BACKGROUND */}
                <div className="profile-info-display"></div>

                {/* USER INFO */}
                <div className="home-profile-container-col-4 col-6 text-center text-white mt-5 py-2">
                            
                    <img className="profile-profile-pic" src="/assets/staff-pics/CL.jpg" alt="profile picture"/>
                    
                    <p className="click-to-edit text-white">(click to edit picture)</p>
                    <h4 className="user-name text-white mt-2">{fullName}</h4>
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
                

                <div className="col-md-6 pr-5">

                    <div className="mt-5 text-white text-center mr-5 pr-5">
                        <h3><u>User Bio</u></h3>
                    </div>

                    <div className="d-flex align-items-center mt-5">
                        <h6 className="text-white text-left pr-5 mr-5">{bio?.split('\n').map((para, index) => (
                            <p key={`bio-para-${index}`}>{para}</p>
                        ))}</h6>
                    </div>
                    
                    <button type="button" className="edit-bio-button btn btn-sm btn-warning mt-2"
                            onClick={toggleModalBio}>Edit Bio</button>

                </div>

            </div>
        </main>
    )
}


interface ProfileProps { }

export default Profile;
