import React from 'react'
import Ads from '../Widgets/Ads'
import FAQ from '../Widgets/FAQ'
import CarCard from "../Widgets/CarCard";
import { Link } from "react-router-dom"; 
import { Typography } from '@mui/material';
import Categories from "../Widgets/Categories";


function Carlisting() {
    return (
        <>
          <Typography variant="h6" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
اخر العروض      </Typography>
        <Ads/>

        <Typography variant="h5" sx={{ margin: '30px 100px 0 0', padding: 0, textAlign: 'right' }}>
      اختر حسب الفئة      </Typography>

      <Categories />

        <div>
      <Typography variant="h6" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
        استكشف اختياراتك
      </Typography>
      <Typography variant="h6" sx={{ margin: '0 100px 30px 0px', padding: 0, textAlign: 'right' }}>
        واختر سيارتك المثالية لمغامرتك القادمة
      </Typography>
    </div>

        <div className="card-grid" >
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
        <Link
          to="/Carderails"
          style={{ textDecoration: "none", color: "inherit" }}
          className="card-grid-item"
        >
          <CarCard />
        </Link>
      </div>
      <div class="button-container">
 
  <button class="load-button">المزيد من السيارات</button>
</div>
        </>
    )
}

export default Carlisting
