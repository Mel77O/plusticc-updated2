import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="upper-container">
        <div className="upper-image" />
      </div>

      <div className="lower-container">
        <Link to="/container1" className="container-link">
          <div className="container1">
            <div className="nested-container1">
              <img src={require("./picture1.png")} className="picture1" alt="Picture 1" />
            </div>
            <div className="nested-container2">
              <h3>Tips to Manage Household Plastic Waste</h3>
            </div>
          </div>
        </Link>

        <Link to="/container2" className="container-link">
          <div className="container2">
            <div className="nested-container2">
              <img src={require("./picture2.png")} className="picture2" alt="Picture 2" />
            </div>
            <div className="nested-container2">
              <h3>Types of Plastic</h3>
            </div>
          </div>
        </Link>

        <Link to="/container3" className="container-link">
          <div className="container3">
            <div className="nested-container3">
              <img src={require("./picture3.png")} className="picture3" alt="Picture 3" />
            </div>
            <div className="nested-container3">
              <h3>Cause and Effect of Plastic</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
