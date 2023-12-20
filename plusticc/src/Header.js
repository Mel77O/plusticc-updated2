import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("./logo.png")} className="Logo" alt="logo"/>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}zz
      >
        <nav className="Nav">
          <a href="/home">Home</a>
          <a href="/organization">Organization</a>
          <a href="/map ">Map</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </CSSTransition>
    </header>
  );
}
