import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; 
import { Alert } from '@mui/material';
import "./CarRentalform.css";

function CarRentalform() {
  const { currentUser } = useAuth(); 
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
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const { id } = useParams();

  useEffect(() => {
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

  if (!carData) return <p>Loading...</p>;

  const totalPrice = carData.price * days;

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username: formValues.fullName,
      daysnumber: days,
      airport: formValues.delivery === 'airport',
      placedlivery: formValues.delivery === 'specific-location',
      placedesc: formValues.address,
      placeapart: formValues.optional,
      pasport: formValues.documents === 'passport',
      idcard: formValues.documents === 'personal-id',
      fee: parseInt(formValues.fee, 10),
      optdetails: formValues.extra,
      carId: parseInt(id, 10),
      carName: carData.Car_name,
      carPricePerDay: carData.price,
      userEmail: currentUser?.email,
      totalPrice: totalPrice
    };

    axios.post('https://x8ki-letl-twmt.n7.xano.io/api:YxBomh6q/car_req', payload)
      .then(response => {
        setAlertMessage('تم إرسال النموذج بنجاح!');
        setAlertSeverity('success');
        console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
        setAlertMessage('حدث خطأ أثناء إرسال النموذج!');
        setAlertSeverity('error');
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="container">
      <div className="car-info">
        <h2>{carData.catgories}</h2>
        <h1>{carData.Car_name}</h1>
        <p><strong>سنة الصنع:</strong> {carData.Year_of_Manufacture}</p>
        <p><strong>نوع الوقود:</strong> {carData.car_fule}</p>
        <p><strong>سعة التواجد:</strong> {carData.Seating_Capacity}</p>
        <h3>الميزات والمرافق:</h3>
        <p>{carData.Features_and_Amenities}</p>
        <div className="rental-details">
          <p><strong>عدد الأيام:</strong> <span>{carData.price} دينار عراقي/اليوم</span></p>
          <div className="days-selector">
            <button className="day-button" onClick={decreaseDays}>-</button>
            <span className="days-value">{days}</span>
            <button className="day-button" onClick={increaseDays}>+</button>
          </div>
          <p className="total-price">استئجار السيارة - {totalPrice} دينار عراقي/ {days} يوم</p>
        </div>
      </div>

      <div className="rental-form">
        <h2>معلومات الاستئجار</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full-name">الاسم الكامل</label>
          <input type="text" id="full-name" name="fullName" placeholder="أدخل الاسم الكامل" onChange={handleInputChange} />

          <label htmlFor="fee">رقم الهاتف</label>
          <input type="text" id="fee" name="fee" placeholder="07000000000" onChange={handleInputChange} />

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

         

          <label htmlFor="extra">معلومات إضافية</label>
          <input type="text" id="extra" name="extra" placeholder="اختياري" onChange={handleInputChange} />

          <button type="submit" className={`submit-button ${isFormValid ? 'enabled' : 'disabled'}`} disabled={!isFormValid}>استئجار السيارة</button>
        </form>
        {alertMessage && (
          <Alert severity={alertSeverity} sx={{ mt: 2 }}>
            {alertMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default CarRentalform;
