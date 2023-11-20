// GetStarted.js
import React, { useState } from 'react';
import './GetStarted.css';
import backgroundImage from './background.jpg';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const GetStarted = () => {
  
  //hehe test comment para github
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the '/login' route
    navigate('/login');
  };

  const handleRegisterClick = () => {
    // Navigate to the '/login' route
    navigate('/register');
  };

  return (
    <div>
      <Header />
      <div className="get-started-container">
        {/* Left grid with background image */}
        <div className="left-grid" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

        {/* Right grid with text and buttons */}
        <div className="right-grid">
          <h1>Get started with +TIC</h1>
          <h3>"The only way forward is to treat plastic as a valuable resource, not as disposable waste. Let's manage it wisely for a cleaner, greener tomorrow."</h3>

          <div className="buttons-container">
            <button className="sign-up-button" onClick={handleRegisterClick}>Register</button> <p>-or-</p>
            <button className="login-button" onClick={handleLoginClick}>Login</button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
