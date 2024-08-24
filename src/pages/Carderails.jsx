import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import HoverCarousel from '../Widgets/HoverCarousel';
import { CarContext } from '../components/CarContext';
import Header from '../components/Header';
import CarRentalform from '../Widgets/CarRentalform';
import Footer from '../components/Footer';
import Feedback from '../Widgets/Feedback';
import { Skeleton } from '@mui/material'; 

const CarDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [car, setCar] = useState(null);
  const { carData, loading } = useContext(CarContext);

  useEffect(() => {
    if (!carData.length && !loading) {
      axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:IzeJrQwI/carinfo/${id}`)
        .then(response => {
          setCar(response.data);
        })
        .catch(error => {
          console.error('Error fetching car details:', error);
        });
    } else {
      const selectedCar = carData.find(car => car.id === parseInt(id));
      setCar(selectedCar);
    }
  }, [id, carData, loading]);

  if (!car) {
    return (
      <>
        <Header />
        <Skeleton variant="rectangular" width="100%" height={400} /> {/* Carousel skeleton */}
        <Skeleton variant="rectangular" width="100%" height={300} sx={{ marginTop: 2 }} /> {/* Form skeleton */}
        <Skeleton variant="rectangular" width="100%" height={150} sx={{ marginTop: 2 }} /> {/* Feedback skeleton */}
        <Footer />
      </>
    );
  }

  const query = new URLSearchParams(location.search);
  const carImageUrl1 = query.get('image1');
  const carImageUrl2 = query.get('image2');
  const images = [carImageUrl1, carImageUrl2].filter(Boolean);

  return (
    <>
      <Header />
      <HoverCarousel images={images} />
      <CarRentalform />
      {/* Pass the selected car ID to the Feedback component */}
      <Feedback selectedCarId={id} />
      <Footer />
    </>
  );
};

export default CarDetails;
