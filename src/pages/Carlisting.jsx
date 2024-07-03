import React from 'react'
import Ads from '../Widgets/Ads'
import CarCard from "../Widgets/CarCard";
import { Link } from "react-router-dom"; 
import { Typography, useMediaQuery } from '@mui/material'; 
import Categories from "../Widgets/Categories";


function Carlisting() {
  // Check if screen size is desktop (lg and up)
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));

    return (
        <>
          {isDesktop && (
            <Typography variant="h6" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
اخر العروض      </Typography>)}

<Ads/>

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
    <div className="card-grid">
        {[...Array(8)].map((_, index) => (
          <Link
            key={index}
            to="/Carderails"
            style={{ textDecoration: "none", color: "inherit" }}
            className={isDesktop ? "card-grid-item fade-in" : "card-grid-item"} // Apply fade-in only on desktop
          >
            <CarCard />
          </Link>
        ))}
      </div>
      <div class="button-container">
 
  <button class="load-button">المزيد من السيارات</button>
</div>
        </>
    )
}

export default Carlisting
