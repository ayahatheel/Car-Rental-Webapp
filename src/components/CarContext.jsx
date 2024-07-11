import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://x8ki-letl-twmt.n7.xano.io/api:IzeJrQwI/carinfo')
      .then(response => {
        setCarData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <CarContext.Provider value={{ carData, loading }}>
      {children}
    </CarContext.Provider>
  );
};
