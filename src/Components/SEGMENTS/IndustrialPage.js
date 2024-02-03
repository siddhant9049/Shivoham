// src/pages/IndustrialPage.js
import React from 'react';
import './IndustrialPage.css'; // Import the corresponding CSS file for styling
import Navbar from '../Navbar';
import Hero from '../Hero';

// ... (import other industrial project images)

const IndustrialPage = () => {
  return (
    <div className="industrial-page">
      <Navbar />
      <Hero />
      <div className="content-container">
        <h2>Welcome to Industrial Solar Solutions</h2>
        <p>
          At Industrial Solar Solutions, we specialize in providing advanced solar energy solutions tailored for industrial applications.
          Utilize the power of solar energy to enhance sustainability and efficiency in your industrial operations.
        </p>
        <p className="sub-heading">Our Industrial Solar Solutions include:</p>
        <ul className="solution-list">
          <li>Large-scale Solar Installations for Industries</li>
          <li>Solar Power Systems for Manufacturing Units</li>
          <li>Energy-Efficient Solutions for Industrial Facilities</li>
          {/* Add more industrial solutions as needed */}
        </ul>
        <p className="sub-heading">Key benefits of choosing our industrial solar solutions:</p>
        <ul className="benefits-list">
          <li>Substantial cost savings on energy expenses</li>
          <li>Improved sustainability and corporate responsibility</li>
          <li>Customized solutions designed for industrial processes</li>
          <li>Proven track record of successful industrial solar installations</li>
        </ul>
        <p>
          Explore our Industrial Projects to witness how we've revolutionized industrial processes with efficient and sustainable solar energy solutions.
        </p>
      </div>
      <div className="project-photos">
        <h3>Our Industrial Projects</h3>
        <div className="project-gallery">
          {/* <img src={industrialProject1} alt="Industrial Project 1" />
          <img src={industrialProject2} alt="Industrial Project 2" /> */}
          {/* ... (display other industrial project images) */}
        </div>
      </div>
    </div>
  );
};

export default IndustrialPage;
