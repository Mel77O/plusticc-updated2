import React from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css'; // Import your CSS file for styling

const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('localhost:8080/register/insertRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.get('username'),
          firstname: formData.get('firstname'),
          lastname: formData.get('lastname'),
          email: formData.get('email'),
          password: formData.get('password'),
          dob: formData.get('dob'),
          // Add other form fields as needed
        }),
      });

      if (response.ok) {
        // Registration successful, handle accordingly
        // For example, you can redirect the user to a success page or show a success message
        console.log('Registration successful');
        // Redirect to success page or display a success message to the user
      } else {
        // Handle error responses
        const errorData = await response.json(); // Parse error response as JSON
        console.error('Registration failed:', errorData);
        // Display error message or take appropriate action based on the error
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
      // Display a generic error message or handle the error accordingly
    }
  };

  return (
    <div className="reg-container">
      {/* Background image for the whole page */}
      <div className="background-image" />

      <div className="container">
        {/* Left grid with background image */}
        <div className="left-grid">
          {/* Background image for the left grid */}
          <img src={require("./background.jpg")} className="background-image-left" alt="registration" />
        </div>

        {/* Right grid with registration form */}
        <div className="right-grid">
          <div className="reg-box">
            <img src={require("./logo.png")} className="Logo" alt="logo" />

            {/* Reg form */}
            <form onSubmit={handleSubmit}>
              <button style={{ backgroundColor: "#db4437" }}>Continue with Google</button>
              <p>- or -</p>
              <input type="text" name="username" placeholder='Username' required />
              <input type="text" name="firstname" placeholder='Firstname' required />
              <input type="text" name="lastname" placeholder='Lastname' required />
              <input type="email" name="email" placeholder='Email' required />
              <input type="password" name="password" placeholder='Password' required />
              <input type="text" name="dob" placeholder='YY/MM/DD' pattern="\d{2}/\d{2}/\d{2}" title="YY/MM/DD format required (e.g., 22/12/31)" required />

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
