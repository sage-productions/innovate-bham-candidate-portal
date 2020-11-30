import React, { useState, useEffect } from 'react';
import "../scss/login";
// const image = require('./bham-skyline-railroad-park.jpg')


const Login: React.FC<LoginProps> = props => {
    return (

        <div className="hero-container">
            <h1>INNOVATE BHAM CANDIDATE PORTAL</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            {/* <img src={image} alt=""/> */}
        <form>
        <div className="field">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="user name"
          />
        </div>
        <div className="field">
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="password"
          />
        </div>
        <button className="btn btn-dark" type="submit">Login</button>
      </form>
      </div>
    )
}

interface LoginProps { }

export default Login;
