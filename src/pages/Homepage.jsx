import React from "react";
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";

function Homepage() {
  return (
    <>
      <Mainsentn />
      <CarCard/>
      <FAQ />
    </>
  );
}

export default Homepage;
