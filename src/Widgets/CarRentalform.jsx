import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./CarRentalform.css";

function CarRentalform() {
  const [carData, setCarData] = useState(null);
  const [days, setDays] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState('');
  const [formValues, setFormValues] = useState({
    fullName: '',
    delivery: '',
    address: '',
    optional: '',
    documents: '',
    fee: '',
    extra: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const { id } = useParams(); // Assume car ID is passed as a URL parameter

  useEffect(() => {
    // Fetch car details based on the car ID
    axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:IzeJrQwI/carinfo/${id}`)
      .then(response => {
        setCarData(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, [id]);

  const decreaseDays = () => {
    if (days > 1) {
      setDays(days - 1);
    }
  };

  const increaseDays = () => {
    setDays(days + 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleDeliveryChange = (event) => {
    setDeliveryOption(event.target.value);
    handleInputChange(event);
  };

  useEffect(() => {
    const isValid = formValues.fullName && formValues.delivery && formValues.documents && formValues.fee && (deliveryOption !== 'specific-location' || formValues.address);
    setIsFormValid(isValid);
  }, [formValues, deliveryOption]);

  if (!carData) return <p>Loading...</p>; // Handle loading state

  const totalPrice = carData.price * days;

  return (
    <div className="container">
      <div className="car-info">
        <h2>{carData.catgories}</h2>
        <h1>{carData.Car_name}</h1>
        <p><strong>سنة الصنع:</strong> {carData.Year_of_Manufacture}</p>
        <p><strong>نوع الوقود:</strong> {carData.car_fule}</p>
        <p><strong>نوع الناقل:</strong> {carData.transmission}</p>
        <p><strong>سعة التواجد:</strong> {carData.Seating_Capacity}</p>
        <h3>الميزات والمرافق:</h3>
        <p>{carData.Features_and_Amenities}</p>
        <div className="rental-details">
          <p><strong>عدد الأيام:</strong> <span>{carData.price} دينار عراقي/اليوم</span></p>
          <div className="days-selector">
            <button onClick={decreaseDays}>-</button>
            <span>{days}</span>
            <button onClick={increaseDays}>+</button>
          </div>
          <button className="rent-button">استئجار السيارة - {totalPrice} دينار عراقي/ {days} يوم</button>
        </div>
      </div>

      <div className="rental-form">
        <h2>معلومات الاستئجار</h2>
        <form>
          <label htmlFor="full-name">الاسم الكامل</label>
          <input type="text" id="full-name" name="fullName" placeholder="أدخل الاسم الكامل" onChange={handleInputChange} />

          <p>موقع التسليم</p>
          <div className='raidosection'>
            <input type="radio" id="airport" name="delivery" value="airport" onChange={handleDeliveryChange} />
            <label htmlFor="airport">توصيل في المطار</label>
          </div>

          <div className='raidosection'>
            <input type="radio" id="specific-location" name="delivery" value="specific-location" onChange={handleDeliveryChange} />
            <label htmlFor="specific-location">توصيل في موقع محدد</label>
          </div>

          <div className={`raidosection transition ${deliveryOption === 'specific-location' ? 'show' : ''}`}>
            <input type="text" id="address" name="address" placeholder="أدخل العنوان" onChange={handleInputChange} />
            <input type="text" id="optional" name="optional" placeholder="الشقة، الشارع، الخ (اختياري)" onChange={handleInputChange} />
          </div>

          <p>الوثائق التي ستسلم</p>
          <div className='raidosection'>
            <input type="radio" id="passport" name="documents" value="passport" onChange={handleInputChange} />
            <label htmlFor="passport">جواز السفر</label>
          </div>

          <div className='raidosection'>
            <input type="radio" id="personal-id" name="documents" value="personal-id" onChange={handleInputChange} />
            <label htmlFor="personal-id">الهوية الشخصية</label>
          </div>

          <input type="text" id="fee" name="fee" placeholder="الرسوم (+200 دينار عراقي)" onChange={handleInputChange} />

          <label htmlFor="extra">معلومات إضافية</label>
          <input type="text" id="extra" name="extra" placeholder="اختياري" onChange={handleInputChange} />

          <button type="submit" className={`submit-button ${isFormValid ? 'enabled' : 'disabled'}`} disabled={!isFormValid}>استئجار السيارة</button>
        </form>
      </div>
    </div>
  );
}

export default CarRentalform;
