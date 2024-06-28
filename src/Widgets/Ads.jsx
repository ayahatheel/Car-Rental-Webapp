import React, { useState, useEffect } from 'react';
import './Ads.css';
import ad1 from '../Widgets/Images/1.png';
import ad2 from '../Widgets/Images/2.png';
import ad3 from '../Widgets/Images/3.png';

const Ads = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { src: ad1, caption: 'Caption Text' },
    { src: ad2, caption: 'Caption Two' },
    { src: ad3, caption: 'Caption Three' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const showSlide = (index) => {
    setSlideIndex(index);
  };

  const changeSlide = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div key={index} className={`mySlides fade ${index === slideIndex ? 'active' : ''}`}>
          <img src={slide.src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}

      <a className="prevv" onClick={() => changeSlide(-1)}>&#10094;</a>
      <a className="nextt" onClick={() => changeSlide(1)}>&#10095;</a>

      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Ads;
