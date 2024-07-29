import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import { useAuth } from '../contexts/authContext';
import { Favorite, Edit, Delete } from '@mui/icons-material';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [rentalData, setRentalData] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const existingRequests = JSON.parse(localStorage.getItem('rentalRequests')) || [];
    const userRequests = existingRequests.filter(request => request.userEmail === currentUser?.email);
    setRentalData(userRequests);

    const favoriteCars = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCars(favoriteCars);
  }, [currentUser]);

  const handleRemoveRental = (carId) => {
    const updatedRequests = rentalData.filter(request => request.carId !== carId);
    setRentalData(updatedRequests);
    localStorage.setItem('rentalRequests', JSON.stringify(updatedRequests));
  };

  const handleEditRental = (carId) => {
    // Logic to handle editing rental information
  };

  const carDetails = (carId) => {
    return rentalData.find(request => request.carId === carId);
  };

  return (
    <Container maxWidth="md">
      <Box my={4} dir="rtl">
        <Typography variant="h4" gutterBottom>
          الملف الشخصي
        </Typography>
        {currentUser && (
          <Card sx={{ display: 'flex', alignItems: 'center', mb: 4, p: 2 }}>
            <img
              src="https://via.placeholder.com/56"
              alt={currentUser.name || 'User'}
              style={{ width: 56, height: 56, borderRadius: '50%' }}
            />
            <Box ml={2}>
              <Typography variant="h6">الاسم: {currentUser.name || 'مستخدم'}</Typography>
              <Typography variant="h6">البريد الإلكتروني: {currentUser.email}</Typography>
              <Typography variant="h6">تاريخ إنشاء الحساب: {new Date(currentUser.created_at).toLocaleDateString()}</Typography>
            </Box>
          </Card>
        )}
        <Typography variant="h5" gutterBottom>
          السيارات المستأجرة
        </Typography>
        <Grid container spacing={4}>
          {rentalData.length ? (
            rentalData.map((rental) => (
              <Grid item key={rental.carId} xs={12} sm={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={rental.carImage || 'https://via.placeholder.com/150'}
                    alt={rental.carName}
                  />
                  <CardContent>
                    <Typography variant="h6">{rental.carName}</Typography>
                    <Typography variant="body2">عدد الأيام: {rental.daysnumber}</Typography>
                    <Typography variant="body2">السعر الإجمالي: {rental.totalPrice} دينار عراقي</Typography>
                    <Typography variant="body2">موقع التسليم: {rental.airport ? 'المطار' : rental.placedesc}</Typography>
                    <Typography variant="body2">الوثائق: {rental.pasport ? 'جواز السفر' : 'الهوية الشخصية'}</Typography>
                  </CardContent>
                  <Box display="flex" justifyContent="space-between" p={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Edit />}
                      onClick={() => handleEditRental(rental.carId)}
                    >
                      تعديل
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<Delete />}
                      onClick={() => handleRemoveRental(rental.carId)}
                    >
                      إزالة
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" gutterBottom>
              لا توجد سيارات مستأجرة حتى الآن.
            </Typography>
          )}
        </Grid>

        <Typography variant="h5" gutterBottom mt={4}>
          السيارات المفضلة
        </Typography>
        <Grid container spacing={4}>
          {favoriteCars.length ? (
            favoriteCars.map((carId) => {
              const car = carDetails(carId);
              if (!car) return null;
              return (
                <Grid item key={carId} xs={12} sm={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={car.carImage || 'https://via.placeholder.com/150'}
                      alt={car.carName}
                    />
                    <CardContent>
                      <Typography variant="h6">{car.carName}</Typography>
                      <Typography variant="body2">عدد الأيام: {car.daysnumber}</Typography>
                      <Typography variant="body2">السعر الإجمالي: {car.totalPrice} دينار عراقي</Typography>
                      <Typography variant="body2">موقع التسليم: {car.airport ? 'المطار' : car.placedesc}</Typography>
                      <Typography variant="body2">الوثائق: {car.pasport ? 'جواز السفر' : 'الهوية الشخصية'}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
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
