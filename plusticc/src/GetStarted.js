// GetStarted.js
import React, { useState } from 'react';
import './GetStarted.css';
import Login from './Login';
import backgroundImage from './background.jpg';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the '/login' route
    navigate('/login');
  };

  return (
    <div className="get-started-container">
      {/* Left grid with background image */}
      <div className="left-grid" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Right grid with text and buttons */}
      <div className="right-grid">
        <h1>Get started with +TIC</h1>
        <p>"The only way forward is to treat plastic as a valuable resource, not as disposable waste. Let's manage it wisely for a cleaner, greener tomorrow."</p>

        <div className="buttons-container">
          <button className="sign-up-button">Register</button> -or-
          <button className="login-button" onClick={handleLoginClick}>Login</button>
        </div>

        {showLogin && <Login />}
      </div>
    </div>
  );
};

export default GetStarted;

// Rest of the code remains the same...
