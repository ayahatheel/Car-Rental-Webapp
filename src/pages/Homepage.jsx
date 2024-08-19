import React, { useContext, useEffect, useState } from 'react';
import Mainsentn from "../../src/Widgets/Mainsentn";
import FAQ from "../../src/Widgets/FAQ";
import CarCard from "../Widgets/CarCard";
import "../Widgets/CarCard.css";
import Categories from "../Widgets/Categories";
import Chat from "../Widgets/Chat";
import Testimonial from "../Widgets/Testimonial";
import { Typography, useMediaQuery, Pagination, Grid, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'; 
import { CarContext } from '../components/CarContext';
import AdvertisementModal from "../Widgets/AdvertisementModal";
import { Skeleton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList'; // Only import used icons

function Homepage() {
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for low to high, 'desc' for high to low
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

  // Sort cars based on the selected sort order
  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  // Calculate the cars to display based on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const displayedCars = sortedCars.slice(startIndex, startIndex + itemsPerPage);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
    setAnchorEl(null);
  };

  return (
    <>
      <AdvertisementModal />
      <Mainsentn />

      {isDesktop && (
        <Typography variant="h5" sx={{ margin: '30px 100px 0 0', padding: 0, textAlign: 'right', fontWeight: 'bold', color: '#3c3c3c' }}>
          اختر حسب الفئة
        </Typography>
      )}

      <Categories />

      {isDesktop && (
        <div 
          className="fade-in" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginRight: '100px', 
            marginLeft: '100px', 

          }}
        >
          <Tooltip title="ترتيب حسب السعر" placement="top">
            <IconButton 
              aria-controls="sort-menu" 
              aria-haspopup="true" 
              onClick={handleClick} 
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                color: '#d32f2f', 
                '&:hover': { 
                  backgroundColor: '#f5f5f5', 
                  transform: 'scale(1.1)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                }, 
                marginLeft: '10px',
                borderRadius: '12px',
                padding: '10px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
              }}
            >
              <FilterListIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Menu
            id="sort-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ 
              '& .MuiMenuItem-root': {
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#d32f2f',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              },
            }}
          >
            <MenuItem onClick={() => handleSortOrder('asc')}>من الأرخص إلى الأغلى</MenuItem>
            <MenuItem onClick={() => handleSortOrder('desc')}>من الأغلى إلى الأرخص</MenuItem>
          </Menu>

          <Typography variant="h5" sx={{ padding: 0, textAlign: 'right', fontWeight: 'bold', color: '#3c3c3c' }}>
            استكشف اختياراتك
          </Typography>
        </div>
      )}

      <Typography variant="h6" sx={{ margin: '0 100px 30px 0px', padding: 0, textAlign: 'right', color: '#757575' }}>
        واختر سيارتك المثالية لمغامرتك القادمة
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          padding: { xs: '0 16px', md: '0 100px' }, // Adjust padding for small screens
        }}
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
              color: '#000', 
              border: 'none', 
              '&.Mui-selected': {
                backgroundColor: '#d32f2f', 
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#b71c1c', 
                },
              },
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            },
            '& .MuiPaginationItem-ellipsis': {
              color: '#757575', 
            },
            '& .MuiPagination-ul': {
              justifyContent: 'center',
              '& > li': {
                margin: '0 2px 0 2px', 
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
