import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling
import Header from './Header';

const Home = () => {
  return (
    <div className="home-container">
      <div className="upper-container">
        <Header/>
        <div className="upper-image" />
      </div>

      <div className="lower-container">
        <Link to="/manage" className="manage-link">
          <div className="container1">
            <div className="nested-container1">
              <img src={require("./picture1.png")} className="picture1" alt="Picture 1" />
            </div>
            <div className="nested-container1">
              <h3>Tips to Manage Household Plastic Waste</h3>
              <p>Essential for reducing environmental impact</p>
            </div>
          </div>
        </Link>

        <Link to="/type" className="type-link">
          <div className="container2">
            <div className="nested-container2">
              <img src={require("./picture2.png")} className="picture2" alt="Picture 2" />
            </div>
            <div className="nested-container2">
              <h3>Types of Plastic</h3>
              <p>Based on their chemical composition and are identified by resin code</p>
            </div>
          </div>
        </Link>

        <Link to="/cause" className="cause-link">
          <div className="container3">
            <div className="nested-container3">
              <img src={require("./picture3.png")} className="picture3" alt="Picture 3" />
            </div>
            <div className="nested-container3">
              <h3>Cause and Effect of Plastic</h3>
              <p>Cause serious damage to the environment both during its manufacture and disposal</p>

            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
