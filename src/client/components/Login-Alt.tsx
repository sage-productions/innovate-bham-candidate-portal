import React, { useState, useEffect } from 'react';
import "../scss/login-alt";


const Login: React.FC<LoginProps> = props => {
  return (

    <div className="bg-img">
      <div className="row justify-content-center bg-img">
        <div className="col-md-8 text-center">

          <h1>Welcome to your Future...</h1>
          <p>Lorem ipsum dolor sit amet</p>

          <form>

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
