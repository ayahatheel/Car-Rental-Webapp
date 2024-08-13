import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import './CarCard.css';

const CarCard = ({ car }) => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (userLoggedIn) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setIsFavorited(favorites.includes(car.id));
    } else {
      setIsFavorited(false);
    }
  }, [car.id, userLoggedIn]);

  if (!car) return null;

  const { id, Car_name, Seating_Capacity, price, car_fule, car_image, car_image2 } = car;

  const handleFavoriteClick = () => {
    if (!userLoggedIn) {
      setOpen(true);
      return;
    }
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let message = '';
    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
      message = 'تم إزالة السيارة من المفضلة';
    } else {
      favorites.push(id);
      message = 'تم إضافة السيارة إلى المفضلة';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setSnackbarMessage(message);
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    setIsFavorited(favorites.includes(id));
  };

  const handleRentClick = () => {
    if (userLoggedIn) {
      navigate(`/car/${id}?image1=${encodeURIComponent(car_image.url)}&image2=${encodeURIComponent(car_image2.url)}`);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Card className="car-card">
        <CardContent style={{ cursor: 'pointer' }}>
          <Link to="#" onClick={handleRentClick} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="car-image-container">
              <img src={car_image.url} alt={Car_name} className="car-image" />
            </div>
            <Typography variant="h6" component="div" gutterBottom className="car-name">
              {Car_name}
            </Typography>
            <Box className="details" mb={1}>
              <Box display="flex" alignItems="center">
                <PeopleIcon style={{ opacity: 0.6 }} />
                <Typography variant="body2" ml={0.5}>
                  {Seating_Capacity} ركاب
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <LocalGasStationIcon style={{ opacity: 0.6 }} />
                <Typography variant="body2" ml={0.5}>
                  {car_fule}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2} mb={2} className="price">
              <Typography variant="h6">{price} دينار / يوم</Typography>
                            <Typography variant="body1">السعر</Typography>

            </Box>
          </Link>
        </CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            variant="contained"
            sx={{
              color: 'white',
              width: '75%',
              backgroundColor: '#E90224',
              borderRadius: '10px',
              fontFamily: 'Tajawal, sans-serif',
              padding: '10px 0',
              fontSize: '1em',
              '&:hover': {
                backgroundColor: 'white',
                color: '#E90224',
              },
            }}
            onClick={handleRentClick}
          >
            استئجار الآن →
          </Button>
          <IconButton
            onClick={handleFavoriteClick}
            sx={{
              color: isFavorited ? 'red' : 'gray',
              '&:hover': {
                color: '#E90224',
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#ffffff',
            color: '#000000',
            borderRadius: '10px',
            border: '1px solid #E90224',
            p: 2,
          }
        }}
      >
        <DialogTitle sx={{ backgroundColor: '#ffffff', color: '#000000', textAlign: 'right' }}>تسجيل الدخول مطلوب</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#000000', textAlign: 'right' }}>
            يرجى تسجيل الدخول للوصول إلى تفاصيل السيارة.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-start' }}>
          <Button onClick={handleClose} sx={{ color: '#000000', '&:hover': { color: '#E90224' } }}>
            إلغاء
          </Button>
          <Button onClick={() => navigate('/login')} sx={{ backgroundColor: '#E90224', color: '#ffffff', ml: 1, '&:hover': { backgroundColor: 'white', color: '#E90224' } }} autoFocus>
            تسجيل الدخول
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CarCard;
