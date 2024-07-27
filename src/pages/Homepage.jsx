import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import "../Widgets/CarCard.css";
import Categories from "../Widgets/Categories";
import Chat from "../Widgets/Chat";
import Testimonial from "../Widgets/Testimonial";
import { Typography, useMediaQuery, Button } from '@mui/material'; 
import { CarContext } from '../components/CarContext';
import AdvertisementModal from "../Widgets/AdvertisementModal";

function Homepage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) { 
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isDesktop = useMediaQuery('(min-width:1280px)'); // Use a media query string directly

  const { loading, filteredCars, setSelectedCategory } = useContext(CarContext);

  if (loading) return <p>Loading...</p>; // Handle loading state

  return (
    <>
      <AdvertisementModal />
      <Mainsentn />

      {isDesktop && ( // Render Typography only on large screens
        <Typography variant="h5" sx={{ margin: '30px 100px 0 0', padding: 0, textAlign: 'right' }}>
          اختر حسب الفئة
        </Typography>
      )}

      <Categories />

      {isDesktop && (
        <div className="fade-in">
          <Typography variant="h5" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
            استكشف اختياراتك
          </Typography>
          <Typography variant="h6" sx={{ margin: '0 100px 30px 0px', padding: 0, textAlign: 'right' }}>
            واختر سيارتك المثالية لمغامرتك القادمة
          </Typography>
        </div>
      )}

      <div className="home-page">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="button-container">
        {/* <Button onClick={() => setSelectedCategory('جميع السيارات')}>عرض جميع السيارات</Button> */}
        <Link to="/Carlisting">
          <button className="load-button">المزيد من السيارات</button>
        </Link>
      </div>

      <FAQ />
      <Chat />
      <Testimonial />
    </>
  );
}

export default Homepage;
