import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CarProvider } from './components/CarContext';
import App from './App';
import Layout from './components/Layout';
import Carderails from './pages/Carderails';

// Define your custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <CarProvider>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/car/:id" element={<Carderails />} />
              <Route path="*" element={<App />} />
            </Routes>
          </CarProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
