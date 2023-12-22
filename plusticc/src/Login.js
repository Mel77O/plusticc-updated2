import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling
import Header from './Header'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/register/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }
  
      const userDetails = await response.json();
      console.log('Fetched UserDetails:', userDetails);
  
      setLoggedInUser(userDetails);
      setLoading(true);
    } catch (error) {
      console.error('Login error:', error.message);
      setError('Invalid email or password. Please try again.');
      alert('Invalid email or password. Please try again.');
    }
  };
  
  useEffect(() => {
    if (loading && loggedInUser) {
      console.log('LoggedInUser', loggedInUser);
      alert('Welcome to +TIC !');
      navigate('/home');
    }
  }, [loggedInUser, loading]);
//ey
  return (
    <div>
      
      <div className="login-container">
        <div className="background-image" />

        <div className="login-box">
          <h1>Welcome to +TIC</h1>
          <p>Login and help clean our environment!</p>

          {/* Display error message */}
          {error && <div className="error-message">{error}</div>}

          {/* Login form */}
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Login</button>
          </form>


          <h4>Don't have an account yet?<Link to="/register">Register here</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default Login;