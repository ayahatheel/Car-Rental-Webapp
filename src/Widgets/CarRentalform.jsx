import React, { useState, useEffect } from 'react';
import "./CarRentalform.css";

function CarRentalform() {
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

  return (
    <div className="container">
      <div className="car-info">
        <h2>سيارات السيدان</h2>
        <h1>نيسان جوك</h1>
        <p><strong>سنة الصنع:</strong> 2024</p>
        <p><strong>نوع الوقود:</strong> بنزين</p>
        <p><strong>نوع الناقل:</strong> أوتوماتيكي</p>
        <p><strong>سعة التواجد:</strong> 5</p>
        <h3>الميزات والمرافق:</h3>
        <p>تكييف الهواء، نوافذ كهربائية، نظام ترفيه بشاشة تعمل باللمس، اتصال بلوتوث، كاميرا خلفية، تحكم سرعة تكيفية، تحذير من الخروج عن المسار، ونظام فرملة طوارئ تلقائي.</p>
        <div className="rental-details">
          <p><strong>عدد الأيام:</strong> <span>25000 دينار عراقي/اليوم</span></p>
          <div className="days-selector">
            <button onClick={decreaseDays}>-</button>
            <span>{days}</span>
            <button onClick={increaseDays}>+</button>
          </div>
          <button className="rent-button">استئجار السيارة - {25000 * days} دينار عراقي/ {days} يوم</button>
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
