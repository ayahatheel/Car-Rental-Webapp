import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import Carderails from "../pages/Carderails";
// import CarCard from "../Widgets/CarCard";
import Contactus from "../pages/Contcatus";
// import { BrowserRouter } from 'react-router-dom';
import Services from "../pages/Services";
import Carlisting from "../pages/Carlisting";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/Carlisting" element={<Carlisting />} />
      <Route path="/Carderails" element={<Carderails />} /> 
      <Route path="/Contactus" element={<Contactus/>} />
      <Route path="/Services" element={<Services/>} />

      {/* <Route path="/carcard" element={<Homepage />} /> */}
      {/* <Route path="/cars/:slug" element={<CarDetails />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routers;
