import React, { useEffect } from 'react';
import { Box, Typography, Avatar, Grid, Card, CardContent, Container } from '@mui/material';
import './Testimonial.css';
import man1 from './Images/man1.png';
import man2 from './Images/man2.png';
import woman1 from './Images/woman1.png';


const testimonials = [
  {
    name: "علي أحمد",
    title: "مدير مبيعات",
    testimonial: "تجربتي مع IraqiWheels كانت ممتازة. السيارة كانت نظيفة وفي حالة ممتازة، والخدمة كانت سريعة وموثوقة.",
    img: man1 
  },
  {
    name: "سارة حسين",
    title: "أخصائية تسويق",
    testimonial: "إيجار سيارة من IraqiWheels جعل رحلتي سهلة ومريحة. الأسعار كانت معقولة والخدمة كانت رائعة.",
    img: woman1
  },
  {
    name: "محمد علي",
    title: "مطور",
    testimonial: "IraqiWheels قدمت لي أفضل تجربة تأجير سيارات. السيارة كانت حديثة ونظيفة والخدمة كانت ممتازة.",
    img: man2
  },
];

const Testimonial = () => {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const testimonialElements = document.querySelectorAll('.iw-testimonial-card');

      testimonialElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.75) {
          setTimeout(() => {
            element.classList.add('iw-visible');
          }, index * 200); // Delay each animation
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className="iw-testimonial-section">
      <div className="fade-in">
          <Typography variant="h5" sx={{ margin: '10px 100px 40px 0px', padding: 0, textAlign: 'right' }}>
          اسمع من عملاء السعداء
          </Typography>        
        </div>
   
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="iw-testimonial-card">
                <CardContent>
                  <Typography variant="body1" className="iw-testimonial-text">
                    "{testimonial.testimonial}"
                  </Typography>
                  <Avatar src={testimonial.img} className="iw-testimonial-avatar" />
                  <Typography variant="h6" className="iw-testimonial-name">{testimonial.name}</Typography>
                  <Typography variant="subtitle1" className="iw-testimonial-title-text">{testimonial.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
