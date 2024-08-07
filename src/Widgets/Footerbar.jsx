import React from 'react';
import { Box, Container, Grid, Typography, IconButton, TextField, Button } from '@mui/material';
import { LocationOn, Phone, Email, Facebook, Twitter, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#F2F8FF', // Light background color
  color: '#000', // Black text color
  padding: theme.spacing(5, 0),
  fontFamily: 'Tajawal, sans-serif',
  textAlign: 'right', // Right-to-left alignment
}));

const CtaBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  justifyContent: 'flex-end', // Right-to-left alignment
  textAlign: 'right',
}));

const CtaIcon = styled(Box)(({ theme }) => ({
  color: '#ff0000', // Red icons
  marginRight: theme.spacing(2), // Align the icon to the right
}));

const FooterLogo = styled('img')({
  maxWidth: '120px', // Smaller logo size
  marginBottom: '20px',
});

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#000', // Black links
  textDecoration: 'none',
  marginBottom: theme.spacing(1), // Spacing between links
  '&:hover': {
    color: '#ff0000', // Red on hover
  },
}));

const SocialIcon = styled(IconButton)({
  color: '#fff', // White icons
  backgroundColor: '#ff0000', // Red background
  marginRight: '10px',
  '&:hover': {
    backgroundColor: '#ff0000', // Red background on hover
  },
});

const SubscribeButton = styled(Button)({
  backgroundColor: '#ff0000', // Red button
  color: '#fff', // White text
  '&:hover': {
    backgroundColor: '#ff0000', // Red background on hover
  },
});

const Footerbar = () => {
  return (
    <FooterContainer>
      <Container>
        <Box className="footer-cta">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <CtaBox>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>اعثر علينا</Typography>
                  <Typography>1010 شارع، SW 54321، بغداد، العراق</Typography>
                </Box>
                <CtaIcon>
                  <LocationOn fontSize="large" />
                </CtaIcon>
              </CtaBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <CtaBox>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>اتصل بنا</Typography>
                  <Typography>9876543210</Typography>
                </Box>
                <CtaIcon>
                  <Phone fontSize="large" />
                </CtaIcon>
              </CtaBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <CtaBox>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>راسلنا</Typography>
                  <Typography>info@iraqiwheels.com</Typography>
                </Box>
                <CtaIcon>
                  <Email fontSize="large" />
                </CtaIcon>
              </CtaBox>
            </Grid>
          </Grid>
        </Box>
        <Box className="footer-content" pt={5} pb={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FooterLogo src="/iconiraqiwheels.png" alt="IraqiWheels Logo" />
              <Typography variant="body2" color="#000" sx={{ lineHeight: 1.6 }}>
                نحن فريق من المحترفين المتحمسين لتقديم أفضل خدمات تأجير السيارات في العراق. نسعى جاهدين لتوفير تجربة مريحة وسهلة لعملائنا من خلال مجموعة واسعة من السيارات وخدمات العملاء الممتازة.
              </Typography>
              <Box mt={2}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>تابعنا</Typography>
                <Box>
                  <SocialIcon href="#"><Facebook /></SocialIcon>
                  <SocialIcon href="#"><Twitter /></SocialIcon>
                  <SocialIcon href="#"><Google /></SocialIcon>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>روابط مفيدة</Typography>
              <Box display="flex" flexDirection="column">
                <FooterLink to="/home">الرئيسية</FooterLink>
                <FooterLink to="/services">خدماتنا</FooterLink>
                <FooterLink to="/contactus">اتصل بنا</FooterLink>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>اشترك</Typography>
              <Typography variant="body2" color="#000" mb={2} sx={{ lineHeight: 1.6 }}>
                لا تفوت الاشتراك في آخر الأخبار، يرجى ملء النموذج أدناه.
              </Typography>
              <form action="#">
                <TextField
                  variant="outlined"
                  placeholder="عنوان البريد الإلكتروني"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <SubscribeButton>
                        <Google />
                      </SubscribeButton>
                    ),
                  }}
                  sx={{
                    backgroundColor: '#fff', // White background
                    border: '1px solid #000', // Black border
                    color: '#000',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: '#ff0000', // Red border on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#ff0000', // Red border when focused
                      },
                    },
                  }}
                />
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box bgcolor="white" py={3}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6} textAlign="center">
              <Typography variant="body2" color="#000">
                &copy; 2024, جميع الحقوق محفوظة <Link to="https://iraqiwheels.netlify.app/" style={{ color: '#ff0000' }}>IraqiWheels</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </FooterContainer>
  );
};

export default Footerbar;
