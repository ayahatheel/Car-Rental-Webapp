import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('جميع السيارات');
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    axios.get('https://x8ki-letl-twmt.n7.xano.io/api:IzeJrQwI/carinfo')
      .then(response => {
        console.log('Fetched car data:', response.data); // Debugging log
        setCarData(response.data);
        setFilteredCars(response.data); // Initially, all cars are shown
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log('Selected category:', selectedCategory); // Debugging log
    if (selectedCategory === 'جميع السيارات') {
      setFilteredCars(carData);
    } else {
      const filtered = carData.filter(car => {
        console.log(`Checking car: ${car.Car_name} in category: ${car.catgories}`); // Debugging log
        return car.catgories === selectedCategory;
      });
      console.log('Filtered cars:', filtered); // Debugging log
      setFilteredCars(filtered);
    }
  }, [selectedCategory, carData]);

  return (
    <CarContext.Provider value={{ carData, loading, selectedCategory, setSelectedCategory, filteredCars }}>
      {children}
    </CarContext.Provider>
  );
};
