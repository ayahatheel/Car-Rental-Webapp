import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import "../Widgets/CarCard.css";
import Categories from "../Widgets/Categories";
import Testimonial from "../Widgets/Testimonial";
import Chat from "../Widgets/Chat";
import AdvertisementModal from "../Widgets/AdvertisementModal";

function Homepage() {
  return (
    <>
    <AdvertisementModal/>
      <Mainsentn />
      <Categories />
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
      </div>
      <div class="button-container">
  <button class="load-button">المزيد من السيارات</button>
</div>

      <FAQ />
      <Chat />
      {/* <Testimonial/> */}
    </>
  );
}

export default Homepage;
