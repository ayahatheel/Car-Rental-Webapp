import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import { useAuth } from '../contexts/authContext';
import CarCard from '../Widgets/CarCard';
import axios from 'axios';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:IzeJrQwI/carinfo');
        setAllCars(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const favoriteCars = allCars.filter((car) => favorites.includes(car.id));

  return (
    <Container maxWidth="md">
      <Box my={4} className="profile-page">
        <Typography variant="h4" gutterBottom>
          الملف الشخصي
        </Typography>
        {currentUser && (
          <Card className="user-info-card">
            <CardContent>
              <Avatar alt={currentUser.name || 'User'} src="/static/images/avatar/1.jpg" />
              <Box ml={2}>
                <Typography variant="h6">الاسم: {currentUser.name || 'مستخدم'}</Typography>
                <Typography variant="h6">البريد الإلكتروني: {currentUser.email}</Typography>
                <Typography variant="h6">تاريخ إنشاء الحساب: {new Date(currentUser.created_at).toLocaleDateString()}</Typography>
              </Box>
            </CardContent>
          </Card>
        )}
        <Typography variant="h5" gutterBottom>
          العناصر المفضلة
        </Typography>
        <Grid container spacing={4}>
          {favoriteCars.length ? (
            favoriteCars.map((car) => (
              <Grid item key={car.id} xs={12} sm={6}>
                <CarCard car={car} />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" gutterBottom>
              لا توجد سيارات مفضلة حتى الآن.
            </Typography>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
