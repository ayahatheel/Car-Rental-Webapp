import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import "../Widgets/CarCard.css";
import Categories from "../Widgets/Categories";
import Chat from "../Widgets/Chat";
import Testimonial from "../Widgets/Testimonial";
import { Typography, useMediaQuery } from '@mui/material'; // Import useMediaQuery
import AdvertisementModal from "../Widgets/AdvertisementModal";
// import { useAuth } from "../contexts/authContext";

function Homepage() {
  // const { userLoggedIn, doSignOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) { // Adjust threshold as needed
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check for large screens (desktop)
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));

  return (
    <>
      <AdvertisementModal />
      <Mainsentn />

      {/* {userLoggedIn ? (
        <button onClick={doSignOut} style={{ float: 'right', margin: '10px' }}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" style={{ float: 'right', margin: '10px' }}>
            Login
          </Link>
          <Link to="/register" style={{ float: 'right', margin: '10px' }}>
            Register
          </Link>
        </>
      )} */}

      {isDesktop && ( // Render Typography only on large screens
        <Typography variant="h5" sx={{ margin: '30px 100px 0 0', padding: 0, textAlign: 'right' }}>
          اختر حسب الفئة
        </Typography>
      )}

      <Categories />

      {isDesktop && <div className="fade-in">
        <Typography variant="h5" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
          استكشف اختياراتك
        </Typography>
        <Typography variant="h6" sx={{ margin: '0 100px 30px 0px', padding: 0, textAlign: 'right' }}>
          واختر سيارتك المثالية لمغامرتك القادمة
        </Typography>
      </div>}

      <div className="card-grid">
        {[...Array(8)].map((_, index) => (
          <Link
            key={index}
            to="/Carderails"
            style={{ textDecoration: "none", color: "inherit" }}
            className="card-grid-item fade-in"
          >
            <CarCard />
          </Link>
        ))}
      </div>
      <div className="button-container">
        <Link to="/Carlisting">
          <button className="load-button">المزيد من السيارات</button>
        </Link>
      </div>

      <FAQ />
      <Chat />
      <Testimonial/>
    </>
  );
}

export default Homepage;
