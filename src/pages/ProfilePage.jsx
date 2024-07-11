import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useAuth } from '../contexts/authContext';
import CarCard from "../Widgets/CarCard";

const ProfilePage = () => {
  const { currentUser } = useAuth();

  // Dummy data for favorite items
  const favorites = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200?text=Jaguar+XE+L+P250',
      name: 'جاكوار XE L P250',
      rating: 4.8,
      reviews: 36,
      passengers: 4,
      type: 'سوبر',
      price: '25000 دينار / يوم'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200?text=BMW+X5',
      name: 'بي ام دبليو X5',
      rating: 4.5,
      reviews: 28,
      passengers: 5,
      type: 'عائلية',
      price: '30000 دينار / يوم'
    },
  ];

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
          {favorites.map((item) => (
            <Grid item key={item.id} xs={12} sm={6}>
              <CarCard carData={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
