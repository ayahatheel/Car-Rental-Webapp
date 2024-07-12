import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
  if (!car) return null; // Ensure car is defined

  const { id, Car_name, Seating_Capacity, price, car_fule, car_image, car_image2 } = car;

  return (
    <Card className="car-card">
      <Link to={`/car/${id}?image1=${encodeURIComponent(car_image.url)}&image2=${encodeURIComponent(car_image2.url)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardContent>
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
            <Typography variant="body1">السعر</Typography>
            <Typography variant="h6">{price} دينار / يوم</Typography>
          </Box>
        </CardContent>
      </Link>
      <Button
        variant="contained"
        sx={{
          color: 'white',
          width: '100%',
          backgroundColor: '#E90224',
          borderRadius: '10px',
          fontFamily: 'Tajawal, sans-serif',
          padding: '10px 0',
          fontSize: '1em',
          '&:hover': {
            backgroundColor: '#ff0033',
          },
        }}
      >
        استئجار الآن →
      </Button>
    </Card>
  );
};

export default CarCard;
