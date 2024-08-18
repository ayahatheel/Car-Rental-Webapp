import React, { useContext, useEffect, useState } from 'react';
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import "../Widgets/CarCard.css";
import Categories from "../Widgets/Categories";
import Chat from "../Widgets/Chat";
import Testimonial from "../Widgets/Testimonial";
import { Typography, useMediaQuery, Pagination, Grid } from '@mui/material'; 
import { CarContext } from '../components/CarContext';
import AdvertisementModal from "../Widgets/AdvertisementModal";
import { Skeleton } from '@mui/material';

function Homepage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) { 
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isDesktop = useMediaQuery('(min-width:1280px)');
  const { loading, filteredCars } = useContext(CarContext);

  // Calculate the cars to display based on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const displayedCars = filteredCars.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <AdvertisementModal />
      <Mainsentn />

      {isDesktop && (
        <Typography variant="h5" sx={{ margin: '30px 100px 0 0', padding: 0, textAlign: 'right' }}>
          اختر حسب الفئة
        </Typography>
      )}

      <Categories />

      {isDesktop && (
        <div className="fade-in">
          <Typography variant="h5" sx={{ margin: '10px 100px 0 0', padding: 0, textAlign: 'right' }}>
            استكشف اختياراتك
          </Typography>
          <Typography variant="h6" sx={{ margin: '0 100px 30px 0px', padding: 0, textAlign: 'right' }}>
            واختر سيارتك المثالية لمغامرتك القادمة
          </Typography>
        </div>
      )}

      <Grid
        container
        spacing={2}
        sx={{ padding: '0 100px' }}
      >
        {loading ? (
          // Show skeletons while loading
          Array.from(new Array(8)).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Skeleton variant="rectangular" width="100%" height={180} sx={{ borderRadius: '8px' }} />
            </Grid>
          ))
        ) : (
          // Show car cards after loading
          displayedCars.map(car => (
            <Grid item xs={12} sm={6} md={3} key={car.id}>
              <CarCard car={car} />
            </Grid>
          ))
        )}
      </Grid>

      {/* Minimalist Pagination */}
      {!loading && (
        <Pagination
          count={Math.ceil(filteredCars.length / itemsPerPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
            marginBottom: '30px',
            '& .MuiPaginationItem-root': {
              color: '#000', // Black color for pagination text
              border: 'none', // No border for minimalist look
              '&.Mui-selected': {
                backgroundColor: '#d32f2f', // Red color for selected item
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#b71c1c', // Slightly darker red on hover for selected item
                },
              },
              '&:hover': {
                backgroundColor: '#f5f5f5', // Light gray background on hover
              },
            },
            '& .MuiPaginationItem-ellipsis': {
              color: '#757575', // Gray color for ellipsis
            },
            '& .MuiPagination-ul': {
              justifyContent: 'center',
              '& > li': {
                margin: '0 2px 0 2px', // Small space between pagination items
              },
            },
          }}
        />
      )}

      <FAQ />
      <Chat />
      <Testimonial />
    </>
  );
}

export default Homepage;
