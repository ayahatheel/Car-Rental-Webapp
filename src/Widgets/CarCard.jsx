
import React from 'react';
import './CarCard.css'; 

const CarCard = () => {
  const carData = {
    image: 'https://via.placeholder.com/300x200?text=Jaguar+XE+L+P250', 
    name: 'جاكوار XE L P250',
    rating: 4.8,
    reviews: 36,
    passengers: 4,
    type: 'سوبر',
    price: '25000 دينار / يوم'
  };

  return (
    <div className="car-card">
      <img src={carData.image} alt={carData.name} className="car-image" />
      <h2>{carData.name}</h2>
      <div className="rating">
        <span className="star">⭐</span>
        <span>{carData.rating} ({carData.reviews} تقييمات)</span>
      </div>
      <div className="details">
        <span>{carData.passengers} ركاب</span>
        <span className="super">{carData.type}</span>
      </div>
      <div className="price">
        <span>السعر</span>
        <span>{carData.price}</span>
      </div>
      <button className="rent-button">استئجار الآن →</button>
    </div>
  );
};

export default CarCard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './CarCard.css'; 

// const CarCard = () => {
//   const [carData, setCarData] = useState(null);

//   useEffect(() => {
//     axios.get('YOUR_API_URL')
//       .then(response => {
//         setCarData(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the car data!', error);
//       });
//   }, []);

//   if (!carData) return <p>Loading...</p>;

//   return (
//     <div className="car-card">
//       <img src={carData.image} alt={carData.name} className="car-image" />
//       <h2>{carData.name}</h2>
//       <div className="rating">
//         <span className="star">⭐</span>
//         <span>{carData.rating} ({carData.reviews} reviews)</span>
//       </div>
//       <div className="details">
//         <span>{carData.passengers} Passengers</span>
//         <span className="super">{carData.type}</span>
//       </div>
//       <div className="price">
//         <span>Price</span>
//         <span>{carData.price} IQD/day</span>
//       </div>
//       <button className="rent-button">Rent Now →</button>
//     </div>
//   );
// };

// export default CarCard;
