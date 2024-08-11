import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const JoinUsComponent = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem', textAlign: 'center' }}>
      <Box 
        sx={{ 
          padding: '3rem 2rem', 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          marginBottom: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          تريد تأجير سيارتك؟
        </Typography>
        <Typography variant="body1" paragraph>
          هل تملك سيارة وتريد تأجيرها؟ انضم إلينا الآن وابدأ في كسب المال من خلال تأجير سيارتك عبر منصتنا.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/Contactus"  sx={{
                      color: 'white',
                      width: '140px',
                      backgroundColor: '#E90224',
                      borderRadius: '10px',
                      fontFamily: 'Tajawal, sans-serif',
                      '&:hover': {
                        backgroundColor: '#ff0033',
                      },
                    }}>
        اتصل بنا
      </Button>
      </Box>

      <Box 
        sx={{ 
          padding: '3rem 2rem', 
          backgroundColor: '#f7f7f7', 
          borderRadius: '16px', 
          marginBottom: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          هل أنت وكالة تريد الانضمام إلينا؟
        </Typography>
        <Typography variant="body1" paragraph>
          نحن نبحث دائمًا عن شركاء جدد. إذا كنت تدير وكالة تأجير سيارات وترغب في الانضمام إلى شبكتنا، تواصل معنا الآن.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/Contactus"  sx={{
                      color: 'white',
                      width: '140px',
                      backgroundColor: '#E90224',
                      borderRadius: '10px',
                      fontFamily: 'Tajawal, sans-serif',
                      '&:hover': {
                        backgroundColor: '#ff0033',
                      },
                    }}>
        اتصل بنا
      </Button>
      </Box>

    
    </Container>
  );
};

export default JoinUsComponent;
