import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useAuth } from '../contexts/authContext';
import CarCard from '../Widgets/CarCard';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [favorites, setFavorites] = useState([]);

  // Dummy data for favorite items (you can replace this with actual data from your API or database)
  const allCars = [
    {
      id: 1,
      Car_name: 'جاكوار XE L P250',
      Seating_Capacity: 4,
      price: '25000',
      car_fule: 'بنزين',
      car_image: { url: 'https://via.placeholder.com/300x200?text=Jaguar+XE+L+P250' },
      car_image2: { url: 'https://via.placeholder.com/300x200?text=Jaguar+XE+L+P250' },
    },
    {
      id: 2,
      Car_name: 'بي ام دبليو X5',
      Seating_Capacity: 5,
      price: '30000',
      car_fule: 'ديزل',
      car_image: { url: 'https://via.placeholder.com/300x200?text=BMW+X5' },
      car_image2: { url: 'https://via.placeholder.com/300x200?text=BMW+X5' },
    },
  ];

  const handleFavoriteToggle = (carId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(carId)
        ? prevFavorites.filter((id) => id !== carId)
        : [...prevFavorites, carId]
    );
  };

  useEffect(() => {
    // Load favorite cars from local storage or API
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    // Save favorite cars to local storage or API
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const favoriteCars = allCars.filter((car) => favorites.includes(car.id));

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        {currentUser && (
          <Box mb={2}>
            <Typography variant="h6">Name: {currentUser.name || 'User'}</Typography>
            <Typography variant="h6">Email: {currentUser.email}</Typography>
            <Typography variant="h6">Account Created: {new Date(currentUser.created_at).toLocaleDateString()}</Typography>
          </Box>
        )}
        <Typography variant="h5" gutterBottom>
          Favorite Items
        </Typography>
        <Grid container spacing={4}>
          {favoriteCars.map((car) => (
            <Grid item key={car.id} xs={12} sm={6}>
              <CarCard
                car={car}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorited={favorites.includes(car.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
