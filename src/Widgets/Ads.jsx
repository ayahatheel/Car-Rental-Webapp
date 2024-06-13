import React, { useState, useEffect } from 'react';
import './Ads.css';
import ava from '../Widgets/Images/ava-1.jpg';
import ava2 from '../Widgets/Images/ava-2.jpg';
import faqbg from '../Widgets/Images/faqbg.png';

const Ads = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { src: ava, caption: 'Caption Text' },
    { src: ava2, caption: 'Caption Two' },
    { src: faqbg, caption: 'Caption Three' },
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

      <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
      <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>

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
