import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CarProvider } from './components/CarContext'; // Import CarProvider

// Define your custom theme
const theme = createTheme({
  // Customize your theme here
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  // Add more theme customizations as needed
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <CarProvider> {/* Wrap App with CarProvider */}
            <App />
          </CarProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
