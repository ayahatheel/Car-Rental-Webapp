import React from 'react'
import Ads from '../Widgets/Ads'
import FAQ from '../Widgets/FAQ'
import CarCard from "../Widgets/CarCard";
import { Link } from "react-router-dom"; 

function Carlisting() {
    return (
        <>
        <Ads/>

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
      </div>
      <div class="button-container">
  <button class="load-button">المزيد من السيارات</button>
</div>
        </>
    )
}

export default Carlisting
