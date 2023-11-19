// Login.js
import React from 'react';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="background-image" />

      <div className="login-box">
        <h2>Welcome to +TIC</h2>
        <p>Create an account and help clean our environment!</p>

        {/* Login form */}
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>

        <div className="extra-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <span className="forgot-password">Forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
