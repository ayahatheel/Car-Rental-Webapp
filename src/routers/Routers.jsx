import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import CarCard from "../Widgets/CarCard";
import { BrowserRouter } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      {/* <Route path="/carcard" element={<Homepage />} /> */}
      {/* <Route path="/cars/:slug" element={<CarDetails />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routers;
