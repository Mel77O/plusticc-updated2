// Register.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css'; // Import your CSS file for styling

const Register = () => {
  return (
    <div className="reg-container">
      {/* Background image for the whole page */}
      <div className="background-image" />

      <div className="container">
        {/* Left grid with background image */}
        <div className="left-grid">
            {/* Background image for the left grid */}
            <img src={require("./regClean.jpg")} className="background-image-left" alt="registration" />
        </div>

        {/* Right grid with registration form */}
        <div className="right-grid">
          <div className="reg-box">
            <img src={require("./logo.png")} className="Logo" alt="logo" />

            {/* Reg form */}
            <form>
              <button style={{ backgroundColor: "#db4437" }}>Continue with Google</button>
              <p>- or -</p>
              <input type="email" placeholder='Email' required />
              <input type="password" placeholder='Password' required />
              <button type="submit">Create account</button>
            </form>
            
            <p style={{ fontSize: "14px" }}>By clicking "Create account", I agree to +TIC's</p>
            <h4>Already have an account?{' '}<Link to="/login">Log in</Link></h4>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
