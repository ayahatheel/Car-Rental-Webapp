import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import Categories from "../Widgets/Categories";
import Testimonial from "../Widgets/Testimonial";

function Homepage() {
  return (
    <>
      <Mainsentn />
      <Categories/>
      <Link to="/Carderails" style={{ textDecoration: "none", color: "inherit"}}>
        <CarCard />
      </Link>
      <FAQ />
      {/* <Testimonial/> */}
    </>
  );
}

export default Homepage;
