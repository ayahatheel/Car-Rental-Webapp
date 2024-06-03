import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import JoinUsComponent from '../Widgets/JoinUsComponent';

const services = [
  {
    icon: <DirectionsCarIcon sx={{ color: 'red' }} fontSize="large" />,
    title: 'مجموعة متنوعة من السيارات',
    description: 'نوفر مجموعة متنوعة من السيارات لتلبية جميع احتياجاتك، من السيارات الاقتصادية إلى السيارات الفاخرة.',
  },
  {
    icon: <ThumbUpIcon sx={{ color: 'red' }} fontSize="large" />,
    title: 'خدمة عملاء متميزة',
    description: 'نحن هنا لتقديم أفضل خدمة عملاء وضمان رضاك التام عن تجربتك معنا.',
  },
  {
    icon: <LocalOfferIcon sx={{ color: 'red' }} fontSize="large" />,
    title: 'أسعار تنافسية',
    description: 'نقدم أسعار تنافسية وخيارات تأجير مرنة لتناسب ميزانيتك.',
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {/* About Us Section */}
      <Box sx={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', marginBottom: '2rem',  textAlign: 'right' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          عن موقعنا
        </Typography>
        <Typography variant="body1" paragraph>
          مرحبًا بكم في موقع تأجير السيارات الخاص بنا! نحن ملتزمون بتقديم تجربة تأجير سيارات سلسة ومريحة
          لعملائنا الكرام. سواء كنت تبحث عن سيارة للسفر، أو لحضور مناسبة خاصة، نحن هنا لتلبية جميع احتياجاتك.
        </Typography>
        <Typography variant="body1" paragraph>
          نحن نفتخر بتقديم مجموعة واسعة من السيارات الفاخرة والاقتصادية، مع خيارات تأجير مرنة وأسعار تنافسية.
          هدفنا هو تقديم خدمة متميزة وتجربة لا تُنسى لعملائنا.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'right'  }}>
          خدماتنا
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                {service.icon}
                <Typography variant="h6" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <JoinUsComponent/>
    </Container>
  );
};

export default Services;
