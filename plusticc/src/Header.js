// Header.js

import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@material-ui/core";

const Header = ({ loggedInUser }) => {
  console.log('Header - loggedInUser:', loggedInUser);
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [gifVisible, setGifVisible] = useState(false);




  console.log(loggedInUser);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }

  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout logic
    // Redirect or perform any other necessary actions
    navigate('/');
    console.log("Logout clicked");
  };

  const toggleGif = () => {
    setGifVisible(!gifVisible);
  };

  

  return (
    <header className="Header">

      <a href="#" onClick={toggleGif}>
        <img src={require("./logo.png")} className="Logo" alt="logo" style={{marginLeft:'-95%', marginTop:'-15px'}}/>
      </a>
      {gifVisible && (
        <div className="GifContainer">
          <img
            src={require("./plasticLogo.gif")}
            className="Gif"
            alt="plastic logo gif"
            style={{backgroundColor:'white'}}
          />
        </div>
      )}
      <CSSTransition in={!isSmallScreen || isNavVisible} timeout={350}>
        <nav className={`Nav ${isSmallScreen ? "SmallScreen" : ""}`}>
          <a href="/home">Home</a>
          <a href="/organization">Organization</a>
          <a href="/map">Map</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          
     
        </nav>
      </CSSTransition>
    </header>
  );
}
//eyy
export default Header;
