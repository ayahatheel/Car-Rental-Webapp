import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import CarCard from '../Widgets/CarCard'; // Correct path to CarCard
import { CarContext } from '../components/CarContext'; // Correct path to CarContext

const FavPage = () => {
  const { carData } = useContext(CarContext);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const favCars = carData.filter(car => favoriteIds.includes(car.id));
    setFavoriteCars(favCars);
  }, [carData]);

  return (
    <div>
      <h1>المفضلة</h1>
      <Grid container spacing={2}>
        {favoriteCars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FavPage;
