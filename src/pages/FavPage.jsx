import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import CarCard from '../Widgets/CarCard'; // Correct path to CarCard
import { CarContext } from '../components/CarContext'; // Correct path to CarContext

const ProfilePage = () => {   
  const { carData } = useContext(CarContext);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const favCars = carData.filter(car => favoriteIds.includes(car.id));
    setFavoriteCars(favCars);
  }, [carData]);

  return (
    <div style={{ direction: 'rtl' }}>
      <Container maxWidth="lg" sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>المفضلة</Typography>
        <Grid container spacing={2}>
          {favoriteCars.map(car => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProfilePage;
