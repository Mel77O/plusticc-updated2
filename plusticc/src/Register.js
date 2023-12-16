import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import your CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthdate: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('http://localhost:8080/register/insertRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
      if (response.ok) {
        setRegistrationStatus('success');
        setFormData({
          username: '',
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          birthdate: '',
        });
      } else {
        setRegistrationStatus('error');
        console.log('wadawd')
      }
    } catch (error) {
      setRegistrationStatus('error');
   
    }
  };

  return (
    <div className="reg-container">
      <div className="background-image" />
      <div className="container">
        <div className="left-grid">
          <img src={require("./regClean.jpg")} className="background-image-left" alt="registration" />
        </div>

        <div className="right-grid">
          <div className="reg-box">
            <img src={require("./logo.png")} className="Logo" alt="logo" />

            <form onSubmit={handleSubmit}>
              <button style={{ backgroundColor: "#db4437" }}>Continue with Google</button>
              <p>- or -</p>
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
              <input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required />
              <input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              <input type="date" name="birthdate" placeholder="YYYY-MM-DD" value={formData.birthdate} onChange={handleChange} required />
              <button type="submit">Create account</button>
            </form>

            {registrationStatus === 'success' && (
              <p style={{ fontSize: "14px" }} className="success-message">Registration Successful!</p>
            )}

            {registrationStatus === 'error' && (
              <p style={{ fontSize: "14px" }} className="error-message">Registration Failed. Please try again.</p>
            )}

            <p style={{ fontSize: "14px" }}>By clicking "Create account", I agree to +TIC's</p>
            <h4>Already have an account?{' '}<Link to="/login">Log in</Link></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
