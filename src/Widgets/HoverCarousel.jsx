import React, { useEffect, useRef } from 'react';

const HoverCarousel = ({ images }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let containerWidth = 0;
    let scrollWidth = 0;
    let posFromLeft = 0;
    let animated = null;
    
    const onMouseEnter = (e) => {
      // Calculate container width, scroll width, etc.
      containerWidth = carouselRef.current.clientWidth;
      scrollWidth = carouselRef.current.scrollWidth;
      posFromLeft = carouselRef.current.getBoundingClientRect().left;
      const stripePos = e.pageX - 0.2 * containerWidth - posFromLeft;
      const pos = stripePos / (containerWidth - 0.4 * containerWidth);
      const scrollPos = (scrollWidth - containerWidth) * pos;

      // Temporary add smoothness to the scroll
      carouselRef.current.style.scrollBehavior = 'smooth';

      // Adjust scroll position
      if (scrollPos < 0) scrollPos = 0;
      if (scrollPos > scrollWidth - containerWidth) scrollPos = scrollWidth - containerWidth;
      carouselRef.current.scrollLeft = scrollPos;
      carouselRef.current.style.setProperty('--scrollWidth', (containerWidth / scrollWidth) * 100 + '%');
      carouselRef.current.style.setProperty('--scrollLeft', (scrollPos / scrollWidth) * 100 + '%');

      // Lock UI until mouse-enter scroll is finished, after approx 200ms
      clearTimeout(animated);
      animated = setTimeout(() => {
        animated = null;
        carouselRef.current.style.scrollBehavior = 'auto';
      }, 200);
    };

    const onMouseMove = (e) => {
      if (animated) return;

      const ratio = scrollWidth / containerWidth;
      let stripePos = e.pageX - 0.2 * containerWidth - posFromLeft;
      if (stripePos < 0) stripePos = 0;
      const pos = stripePos / (containerWidth - 0.4 * containerWidth);
      let scrollPos = (scrollWidth - containerWidth) * pos;

      carouselRef.current.scrollLeft = scrollPos;

      if (scrollPos < scrollWidth - containerWidth) {
        carouselRef.current.style.setProperty('--scrollLeft', (scrollPos / scrollWidth) * 100 + '%');
      }

      const prevMore = carouselRef.current.scrollLeft > 0;
      const nextMore = scrollWidth - containerWidth - carouselRef.current.scrollLeft > 5;

      carouselRef.current.setAttribute('data-at', (prevMore ? 'left ' : '') + (nextMore ? 'right' : ''));
    };

    carouselRef.current.addEventListener('mouseenter', onMouseEnter);
    carouselRef.current.addEventListener('mousemove', onMouseMove);

    return () => {
      carouselRef.current.removeEventListener('mouseenter', onMouseEnter);
      carouselRef.current.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="wrap">
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              {/* Specify the image URL directly */}
              <img src={image} alt={`Image ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HoverCarousel;
