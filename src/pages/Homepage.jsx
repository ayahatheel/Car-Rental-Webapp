import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";

function Homepage() {
  return (
    <>
      <Mainsentn />
      <Link to="/Carderails" style={{ textDecoration: "none", color: "inherit" }}>
        <CarCard />
      </Link>
      <FAQ />
    </>
  );
}

export default Homepage;
