import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { json, SetAccessToken, User } from '../utils/api';

import "../scss/login";


Modal.setAppElement("#root");

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [guest, setGuest] = useState({
    email: null,
    password: null
  });

  useEffect(() => {
    if(User && User.role === ('admin' || 'candidate')) {
      alert('You are already logged in!');
      props.history.push('/home');
    }
  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setGuest({
    email: e.target.value,
    password: guest.password
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setGuest({
    email: guest.email,
    password: e.target.value
  });

  const handleLoginSubmit = async () => {
    try {
      let result = await json('/routes/auth/login', 'POST', guest);
      if(result) {
        SetAccessToken(result.token, { userid: result.userid, role: result.role });
        if(result.role === 'admin' || result.role === 'candidate') {
          props.history.push('/home');
        } else {
          props.history.push('/');
        }
      } else {
        //possible check for login status
      }
    } catch(err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <>

      {/* LOGIN BUTTON IN ABSOLUTELY POSITIONED UP TO LOOK LIKE IT'S ON THE NAVBAR*/}
      <div className="login-button d-flex">
        <button className="btn btn-sm btn-warning" onClick={toggleModal}>Login</button>
      </div>

      {/* LOGIN MODAL*/}
      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="login-dialog"
              className="login-modal px-3" overlayClassName="modal-overlay" closeTimeoutMS={250}>

        {/* MODAL HEADER AND 'X' BUTTON */}
        <div className="modal-header">
          <h5 className="modal-title mr-5" id="modalLoginTitle">Candidate Portal Login</h5>
            <button type="button" className="close close-modal-x m-0 p-0" data-dismiss="modal" aria-label="Close"
                    onClick={toggleModal}>
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
          
        {/* MODAL BODY */}
        <div className="modal-body">

          {/* LOGIN FORM */}
          <form>

            {/* INPUT BUTTONS AND REMEMBER ME CHECKBOX*/}
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="email" onChange={handleEmailChange} />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="password" onChange={handlePasswordChange} />
            </div>

            <div className="row align-items-center remember ml-1">
              <input type="checkbox" className="checkbox"/><span className="ml-2">Remember Me</span>
            </div>

            {/* LOGIN(SUBMIT) & CANCEL BUTTONS*/}
            <div className="row float-right mt-2">
              <Link to="./home">
                <input className="btn btn-sm btn-warning mx-2" type="submit" value="Login" onClick={handleLoginSubmit} />
              </Link>
              <button className="btn btn-sm btn-warning mr-3" type="button" data-dismiss="modal"
                  onClick={toggleModal}>Close</button>
            </div>

          </form>
        </div>

        {/* ADDS BOTTOM VERTICAL LINE IN LOGIN MODAL */}
        <div className="modal-footer mt-4"></div>
        
        {/* REGISTER / FORGOT PASSWORD */}
        <div className="login-links">
          <div className="d-flex justify-content-center">
            Don't have an account?<a href="#" className="text-aqua ml-2">Register</a>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <a href="#" className="text-aqua">Forgot your password?</a>
          </div>
        </div>
        
      </Modal>

      {/* BACKGROUND IMAGE */}
      <div className="img-wrapper">
        <div className="bg-img"></div>
      </div>

    </>
  )
}


interface LoginProps extends RouteComponentProps { }

export default Login;
