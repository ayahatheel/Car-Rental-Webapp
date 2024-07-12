import React, { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './HoverCarousel.css';

const HoverCarousel = ({ images }) => {
  useEffect(() => {
    const flkty = new Flickity('.js-flickity', {
      wrapAround: true,
      autoPlay: true,
      pauseAutoPlayOnHover: false,
    });

    return () => {
      flkty.destroy();
    };
  }, []);

  return (
    <div className="gallery js-flickity">
      {images.map((image, index) => (
        <div className="gallery-cell" key={index}>
          <img src={image} alt={`Car ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default HoverCarousel;
