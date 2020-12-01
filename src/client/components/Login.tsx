import React, { useState, useEffect } from 'react';
import "../scss/login";

const Login: React.FC<LoginProps> = props => {
    return (

        <div className="login-container">
            <h1>INNOVATE BHAM CANDIDATE PORTAL</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form>
        <div className="input">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="user name"
          />
        </div>
        <div className="input">
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="password"
          />
        </div>
        <button className="btn btn-warning" type="submit">Login</button>
      </form>
      </div>
    )
}

interface LoginProps { }

export default Login;
