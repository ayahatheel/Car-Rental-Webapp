import React from 'react';
import './Ads.css'; // Assume you've saved the CSS in a file named Slider.css

const Ads = () => {
  return (
    <div className="slider">
      <input type="radio" name="slide" id="slide1" defaultChecked />
      <input type="radio" name="slide" id="slide2" />
      <input type="radio" name="slide" id="slide3" />
      <input type="radio" name="slide" id="slide4" />
      <input type="radio" name="slide" id="slide5" />
      <div className="gallery">
        <figure>
          <img src="http://res.cloudinary.com/dq5anctrd/image/upload/v1499302166/subway-1681222_1280_l5vuuz.jpg" alt="Slide 1" />
          <figcaption>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
          </figcaption>
          <div className="arrows">
            <label htmlFor="slide5"><i className="fa fa-angle-left fa-5x"></i></label>
            <label htmlFor="slide2"><i className="fa fa-angle-right fa-5x"></i></label>
          </div>
        </figure>
        {/* Add other figure elements here */}
      </div>
      <div className="trigger">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
        <label htmlFor="slide5"></label>
      </div>
    </div>
  );
}

export default Ads;
