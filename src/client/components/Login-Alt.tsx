import React, { useState, useEffect } from 'react';
import "../scss/login-alt";


const Login: React.FC<LoginProps> = props => {
  return (

    <div className="bg-img pt-5">
      
      <div className="row justify-content-center text-light pt-5">
        <div className="col-lg-10 text-center pt-5">

          <h1>Innovate Birmingham</h1> 
          <h1>Candidate Portal</h1>
          <p>Welcome to your future...</p>

        </div>
      </div>

      <div className="row justify-content-center text-light pt-5">
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
      </div>
    </div>
  )
}

interface LoginProps { }

export default Login;
