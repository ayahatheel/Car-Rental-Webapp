import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../contexts/authContext'; // Import useAuth hook from your context

const pages = [
  { name: 'الرئيسية', link: '/' },
  // { name: 'عرض السيارات', link: '/Carlisting' },
  // { name: 'المفضلة', link: '/favorites' },
  { name: 'خدماتنا', link: '/services' },
  { name: 'تواصل معنا', link: '/Contactus' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { userLoggedIn, signOut } = useAuth(); // Get userLoggedIn state and signOut function from context

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User signed out successfully"); // Debugging: Log successful sign-out
    } catch (error) {
      console.error("Sign out error:", error); // Debugging: Log the error
    }
  };

  return (
    <div dir="rtl" className="navbar">
      <AppBar position="static" sx={{ backgroundColor: '#EFF5FD', boxShadow: 'none' }}>
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'black',
                textDecoration: 'none',
                fontFamily: 'Tajawal, sans-serif',
              }}
            >
              IraqiWheels
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="red"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography
                      component={Link}
                      to={page.link}
                      textAlign="left"
                      sx={{
                        color: 'black',
                        textDecoration: 'none',
                        fontFamily: 'Tajawal, sans-serif',
                        '&:hover': {
                          color: '#E90224', // Adjust hover text color
                        },
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.link}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontFamily: 'Tajawal, sans-serif',
                    '&:hover': {
                      color: '#E90224', // Adjust hover text color
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {userLoggedIn ? (
                <>
                  <Button component={Link} to="/profile" sx={{ color: 'black', mr: 2, fontFamily: 'Tajawal, sans-serif' }}>
سياراتي المفضلة                  </Button>
                  <Button onClick={handleSignOut} sx={{ color: 'black', mr: 2, fontFamily: 'Tajawal, sans-serif' }}>
                    تسجيل الخروج
                  </Button>
                </>
              ) : (
                <>
                  <Button component={Link} to="/login" sx={{ color: 'black', mr: 2, fontFamily: 'Tajawal, sans-serif' }}>
                    تسجيل الدخول
                  </Button>
                  <Button
                    component={Link}
                    to="/signup"
                    sx={{
                      color: 'white',
                      width: '140px',
                      backgroundColor: '#E90224',
                      borderRadius: '10px',
                      fontFamily: 'Tajawal, sans-serif',
                      '&:hover': {
                        backgroundColor: '#ff0033',
                      },
                    }}
                  >
                    مستخدم جديد؟
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default ResponsiveAppBar;
