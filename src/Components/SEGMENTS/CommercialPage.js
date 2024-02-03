// src/pages/CommercialPage.js
import React from 'react';
import './CommercialPage.css'; // Create a corresponding CSS file for styling
import Navbar from '../Navbar';
import Hero from '../Hero';
// import commercialProject1 from '../CommercialProjects/1.jpg'; // Replace with the actual image paths for commercial projects
// import commercialProject2 from '../CommercialProjects/2.jpg';
// ... (import other commercial project images)

const CommercialPage = () => {
  return (
    <div className="commercial-page">
      <Navbar />
      <Hero />
      <div className="content-container">
        <h2>Welcome to Commercial Solar Solutions</h2>
        <p>
          At Commercial Solar Solutions, we specialize in providing cutting-edge solar energy solutions for businesses and organizations.
          Harness the power of the sun to drive sustainability and cost savings for your commercial ventures.
        </p>
        <p className="sub-heading">Our Commercial Solar Solutions include:</p>
        <ul className="solution-list">
          <li>Large-scale Solar Installations</li>
          <li>Solar Panel Arrays for Commercial Buildings</li>
          <li>Energy-Efficient Lighting Solutions for Businesses</li>
          {/* Add more commercial solutions as needed */}
        </ul>
        <p className="sub-heading">Key benefits of choosing our commercial solar solutions:</p>
        <ul className="benefits-list">
          <li>Substantial cost savings on electricity expenses</li>
          <li>Enhanced corporate sustainability and social responsibility</li>
          <li>Customized solutions tailored to your business needs</li>
          <li>Proven track record of successful commercial solar installations</li>
        </ul>
        <p>
          Explore our Commercial Projects to see how we've empowered businesses with efficient and sustainable solar energy solutions.
        </p>
        {/* You can add images, testimonials, or any other relevant content */}
      </div>
      <div className="project-photos">
        <h3>Our Commercial Projects</h3>
        <div className="project-gallery">
         
          {/* ... (display other commercial project images) */}
        </div>
      </div>
    </div>
  );
};

export default CommercialPage;
