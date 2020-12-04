import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "../scss/login";


const Login: React.FC<LoginProps> = props => {
  return (
    <>

      <div className="login-button d-flex">

        <button className="btn btn-sm btn-warning" type="button" 
                date-toggle="modal" data-target="loginModal">
          Login
        </button>

        {/* <Link to="/home" className="mx-2 text-midnight">LOGIN</Link>
        <Link to="/home" className="mx-2 text-midnight">REGISTER</Link> */}

      </div>

      <div className="modal fade loginModal" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="modalLoginTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLoginTitle">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          
            <div className="modal-body">
              HI
            </div>
            <div className="modal-footer">
              <button className="btn btn-sm btn-warning" type="button" data-dismiss="modal">Close</button>
              <button className="btn btn-sm btn-warning" type="button">Login</button>
            </div>
          </div>
        </div>
      </div>




      <div className="bg-img"></div>
    </>
  )
}

        {/* <main className="container-fluid">
          <div className="row justify-content-center pt-1">
            <div className="col-lg-10 text-center">

              {/* <h4>Fueling Tech Talent</h4> 
              <h4>in the Heart of the Magic City</h4>

            </div>
          </div>
        </main> */}

      {/* <div className="row justify-content-center text-light pt-5">
        <div className="col-md-7 col-lg-5 text-center px-5">

          <form className="px-5">

            <div className="form-group">
              <input type="text" className="form-control" name="user-name" placeholder="user name" />
            </div>
            
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="password" />
            </div>

            <button type="submit" className="btn btn-warning btn-sm">Submit</button>

          </form>

        </div>
      </div> */}

interface LoginProps { }

export default Login;
