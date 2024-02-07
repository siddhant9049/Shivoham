// CarouselComponent.jsx

import React, { useState } from 'react';
import Slider from 'react-slick';
import "./styles.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import anuj from "../IMG/ANUJ.jpg"

const CarouselComponent = () => {
  const [carouselItems, setCarouselItems] = useState([
    { name: 'Anuj Pathakar', designation: 'CEO/Founder', image: anuj },
    { name: 'Prashant Suvarnakar', designation: 'CTO', image: 'john.jpg' },
    { name: 'VEnkatesh Sanganwar', designation: 'CMO', image: 'jane.jpg' },
    // Add more team members as needed
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Set arrows to false

  };

  return (
    
    <Slider {...settings}>
      {carouselItems.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.image} />
          <h2 className="carousel-name">{item.name}</h2>
          <p className="carousel-designation">{item.designation}</p>
          {/* Add more content as needed */}
        </div>
      ))}
    </Slider>
   
  );
};

export default CarouselComponent;
