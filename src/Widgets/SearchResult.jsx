import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car/${result.id}?image1=${encodeURIComponent(result.car_image.url)}&image2=${encodeURIComponent(result.car_image2.url)}`);
  };

  return (
    <div className="search-result" onClick={handleClick}>
      <div className="result-text">{result.Car_name}</div>
    </div>
  );
};

export default SearchResult;
