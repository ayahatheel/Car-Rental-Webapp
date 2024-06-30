import React, { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './HoverCarousel.css';

const HoverCarousel = () => {
  useEffect(() => {
    const flkty = new Flickity('.js-flickity', {
      wrapAround: true 
    });

    return () => {
      flkty.destroy();
    };
  }, []);

  return (
    <>
      <div className="gallery js-flickity">
        <div className="gallery-cell">
          <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.webp" alt="Future cars 2023-2026" />
        </div>
        <div className="gallery-cell">
          <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.webp" alt="Future cars 2023-2026" />
        </div>
        <div className="gallery-cell">
          <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.webp" alt="Future cars 2023-2026" />
        </div>
      </div>
    </>
  );
};

export default HoverCarousel;
