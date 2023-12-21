import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@material-ui/core";

const Header = ({ loggedInUser }) => {
  console.log('Header - loggedInUser:', loggedInUser);
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

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
    setIsSmallScreen(mediaQuery.matches);
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

  return (
    <header className="Header">
      <img
        src={require("./logo.png")}
        className="Logo"
        alt="logo"
        onClick={() => console.log("Logo clicked")}
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavTransition"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/home">Home</a>
          <a href="/organization">Organization</a>
          <a href="/">Map</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>

          {/* Use Material-UI components for the profile icon and dropdown */}
          <div className="ProfileIconContainer">
            <Avatar
              alt="Profile Icon"
              src={require("./profile-icon.png")}
              className="ProfileIcon"
              style={{ height: "30px", width: "30px", cursor: "pointer", marginLeft: "10px" }}
              onClick={handleMenuOpen}
            />
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <p>{loggedInUser?.username}</p>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </nav>
      </CSSTransition>
    </header>
  );
}
//eyy
export default Header;
