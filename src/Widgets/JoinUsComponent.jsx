import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const JoinUsComponent = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem', textAlign: 'center' }}>
      <Box 
        sx={{ 
          padding: '2rem', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '8px', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          تريد تأجير سيارتك؟
        </Typography>
        <Typography variant="body1" paragraph>
          هل تملك سيارة وتريد تأجيرها؟ انضم إلينا الآن وابدأ في كسب المال من خلال تأجير سيارتك عبر منصتنا.
        </Typography>
      </Box>

      <Box 
        sx={{ 
          padding: '2rem', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '8px', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          هل أنت وكالة تريد الانضمام إلينا؟
        </Typography>
        <Typography variant="body1" paragraph>
          نحن نبحث دائمًا عن شركاء جدد. إذا كنت تدير وكالة تأجير سيارات وترغب في الانضمام إلى شبكتنا، تواصل معنا الآن.
        </Typography>
      </Box>

      <Box 
        sx={{ 
          padding: '2rem', 
          backgroundColor: '#d0d0d0', 
          borderRadius: '8px',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          اتصل بنا
        </Typography>
        <Typography variant="body1" paragraph>
          إذا كانت لديك أي استفسارات أو تحتاج إلى مزيد من المعلومات، لا تتردد في الاتصال بنا.
        </Typography>
      </Box>

      <Button variant="contained" color="primary" component={Link} to="/contact" sx={{ marginTop: '2rem' }}>
        اتصل بنا
      </Button>
    </Container>
  );
};

export default JoinUsComponent;
