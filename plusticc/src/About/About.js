import React, { useState, useEffect } from 'react';
import './About.css';
import backgroundImage1 from './bgAbout1.jpg';
import backgroundImage2 from './bgAbout2.jpg';
import Header from '../Header';
const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;

      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-container-custom">
        <Header/>
      {/* Our Vision */}
      <div className="section-about">
        <div className="left-grid-about" style={{ backgroundImage: `url(${backgroundImage1})` }}>
          {/* You can add content or leave it empty */}
        </div>
        <div className="right-grid-about">
          <p>OUR VISION </p>
          <span>WE DREAM OF A WORLD WITH LESS</span>
          <span>PLASTIC WASTE AND HEALTHIER</span>
          <span>ENVIRONMENTS</span>
          <p>
            Imagine a future where everyone around the world works together to manage waste better. We want each place, even those facing challenges, to have good systems for collecting, sorting, and recycling waste. Our goal isn't just reducing plastic waste; we want to change how we take care of our planet, making it sustainable for the future.
          </p>
        </div>
      </div>

      {/* Our mission */}
      <div className={`section-about ${isScrolled ? 'scrolled-about' : ''}`}>
        <div className="right-grid-about">
          <p>OUR MISSION </p>
          <span>TO CONTRIBUTE TO THE</span>
          <span>REDUCTION OF PLASTIC WASTE</span>
          <p>
            We are dedicated to strengthening waste management capacity and capability by advancing collection, sorting, processing, and recycling systems, with a particular emphasis on underserved regions.
          </p>
        </div>
        <div className="second-image-about" style={{ backgroundImage: `url(${backgroundImage2})` }}>
          {/* You can add content or leave it empty */}
        </div>
      </div>
    </div>
  );
};

export default About;
