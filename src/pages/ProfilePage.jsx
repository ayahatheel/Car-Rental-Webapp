import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import Ads from '../Widgets/Ads';
import CarCard from '../Widgets/CarCard'; 
import { CarContext } from '../components/CarContext'; 

const ProfilePage = () => {
  const { carData } = useContext(CarContext);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const favCars = carData.filter(car => favoriteIds.includes(car.id));
    setFavoriteCars(favCars);
  }, [carData]);

  return (
    <div style={{ direction: 'rtl' }}>
      {isDesktop && (
        <Typography variant="h6" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
          اخر العروض
        </Typography>
      )}

      <Ads />

      <Container maxWidth="lg" sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" sx={{  padding: 0, textAlign: 'right' }}>
          المفضلة
        </Typography>
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
