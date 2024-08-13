import React, { useContext, useEffect } from 'react';
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import "../Widgets/CarCard.css";
import Categories from "../Widgets/Categories";
import Chat from "../Widgets/Chat";
import Testimonial from "../Widgets/Testimonial";
import { Typography, useMediaQuery } from '@mui/material'; 
import { CarContext } from '../components/CarContext';
import AdvertisementModal from "../Widgets/AdvertisementModal";
import { Skeleton } from '@mui/material'; // Import Skeleton from Material-UI

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

  const isDesktop = useMediaQuery('(min-width:1280px)');
  const { loading, filteredCars } = useContext(CarContext);

  return (
    <>
      <AdvertisementModal />
      <Mainsentn />

      {isDesktop && (
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
        {loading ? (
          // Show skeletons while loading
          Array.from(new Array(3)).map((_, index) => (
            <Skeleton key={index} variant="rectangular" width={300} height={150} sx={{ margin: '10px' }} />
          ))
        ) : (
          // Show car cards after loading
          filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))
        )}
      </div>

      <FAQ />
      <Chat />
      <Testimonial />
    </>
  );
}

export default Homepage;
