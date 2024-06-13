import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import "../Widgets/CarCard.css";
import Categories from "../Widgets/Categories";
import Testimonial from "../Widgets/Testimonial";
import Chat from "../Widgets/Chat";
import { Typography } from '@mui/material';
import AdvertisementModal from "../Widgets/AdvertisementModal";



function Homepage() {
  return (
    <>
    <AdvertisementModal/>
      <Mainsentn />

      <Typography variant="h5" sx={{ margin: '30px 100px 0 0', padding: 0, textAlign: 'right' }}>
      اختر حسب الفئة      </Typography>

      <Categories />

      <div>
      <Typography variant="h5" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
        استكشف اختياراتك
      </Typography>
      <Typography variant="h6" sx={{ margin: '0 100px 30px 0px', padding: 0, textAlign: 'right' }}>
        واختر سيارتك المثالية لمغامرتك القادمة
      </Typography>
    </div>

      <div className="card-grid">
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

      <Link to="/Carlisting">
  <button className="load-button">المزيد من السيارات</button>
</Link>

</div>

      <FAQ />
      <Chat />
      {/* <Testimonial/> */}
    </>
  );
}

export default Homepage;
