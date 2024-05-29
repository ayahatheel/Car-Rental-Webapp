import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footerbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F2F8FF',
        padding: '10px 20px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        IraqiWeels @ 2024. جميع الحقوق محفوظة.
      </Typography>
      <Box>
        <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
          <FacebookIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footerbar;
