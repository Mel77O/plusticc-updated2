import React from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Upper container */}
      <div className="upper-container">
        {/* Background image */}
        <div className="upper-image" />
      </div>

      {/* Lower container */}
      <div className="lower-container">
        {/* Move the div to start the lower container */}
        <div className="container1"></div>
        <div className="container2"></div>
        <div className="container3"></div>
      </div>
    </div>
  );
};

export default Home;
