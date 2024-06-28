import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import './Testimonial.css';

const testimonials = [
  {
    name: "جون دو",
    title: "مدير منتج",
    testimonial: "أنا سعيد جدًا لأنني عملت مع مايكل لتنمية أعمالي. إنه مبدع ومبتكر ولديه أفكار رائعة. أتطلع للعمل معه أكثر.",
    img: "/path-to-avatar.jpg" // Replace with actual image path
  },
  {
    name: "جين دو",
    title: "أخصائي تسويق",
    testimonial: "كان العمل مع مايكل تجربة رائعة. ساعدتنا أفكاره المبتكرة وتنفيذها على نجاح حملتنا بشكل فاق التوقعات.",
    img: "/path-to-avatar.jpg" // Replace with actual image path
  },
  {
    name: "بوب سميث",
    title: "مطور",
    testimonial: "كانت خبرة مايكل وإبداعه محوريين في نجاح مشروعنا. أوصي به بشدة.",
    img: "/path-to-avatar.jpg" // Replace with actual image path
  },
];

const Testimonial = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box className="testimonial-section">
      <Typography variant="h4" align="center" className="testimonial-title">
        اسمع من عملاء سعداء
      </Typography>
      <Grid container justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className="testimonial-card" ref={ref}>
              <Typography variant="body1" className="testimonial-text">
                "{testimonial.testimonial}"
              </Typography>
              <Avatar src={testimonial.img} className="testimonial-avatar" />
              <Typography variant="h6" className="testimonial-name">{testimonial.name}</Typography>
              <Typography variant="subtitle1" className="testimonial-title-text">
                {testimonial.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;
