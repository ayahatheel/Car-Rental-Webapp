import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, useMediaQuery } from '@mui/material';
import { CarContext } from '../components/CarContext';
import Ads from '../Widgets/Ads';
import CarCard from "../Widgets/CarCard";
import Categories from "../Widgets/Categories";
import "../Widgets/CarCard.css";

function Carlisting() {
  const { filteredCars, loading } = useContext(CarContext);
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));

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

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {isDesktop && (
        <Typography variant="h6" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
          اخر العروض
        </Typography>
      )}
      <Ads />

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

      <div className="card-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <Link
              key={car.id}
              to={`/Cardetails/${car.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className={isDesktop ? "card-grid-item fade-in" : "card-grid-item"}
            >
              <CarCard car={car} />
            </Link>
          ))
        ) : (
          <Typography variant="h6" sx={{ margin: '0 100px 30px 0px', padding: 0, textAlign: 'center' }}>لا يوجد سيارات في ضمن الفئة المختار</Typography>
        )}
      </div>

      <div className="button-container">
        <button className="load-button">المزيد من السيارات</button>
      </div>
    </>
  );
}

export default Carlisting;
