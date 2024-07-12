import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { CarContext } from '../components/CarContext';

const SearchBar = ({ setResults }) => {
  const { carData } = useContext(CarContext);
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    const results = carData.filter((car) => {
      return (
        value &&
        car &&
        car.Car_name &&
        car.Car_name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="ابحث عن سيارتك المفضلة"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
