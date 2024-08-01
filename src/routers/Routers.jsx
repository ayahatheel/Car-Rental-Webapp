import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import FavPage from "../pages/FavPage";
import Singup from "../pages/Singup";
import Carderails from "../pages/Carderails";
import Contactus from "../pages/Contcatus";
import Services from "../pages/Services";
import Carlisting from "../pages/Carlisting";
import ProfilePage from '../pages/ProfilePage';
import { useAuth } from '../contexts/authContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { userLoggedIn } = useAuth();
  return userLoggedIn ? element : <Navigate to="/login" />;
};

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/Carlisting" element={<Carlisting />} />
      <Route path="/Cardetails" element={<Carderails />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/favorites" element={<FavPage />} />
      <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
    </Routes>
  );
};

export default Routers;
