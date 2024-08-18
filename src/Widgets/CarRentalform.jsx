import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; 
import { Alert, Checkbox, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControlLabel } from '@mui/material';
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
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

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
    const isValid = formValues.fullName && formValues.delivery && formValues.documents && formValues.fee && (deliveryOption !== 'specific-location' || formValues.address) && checked;
    setIsFormValid(isValid);
  }, [formValues, deliveryOption, checked]);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <div className="container" style={{ direction: 'rtl' }}>
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

          {/* Checkbox for Rental Agreement */}
          <div style={{ marginTop: '20px' }}>
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        style={{ color: '#e53935' }} 
      />
    }
    label={
      <span style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', fontFamily: 'Tajawal, sans-serif', letterSpacing: '0.5px' }}> {/* Set text color to red */}
        أوافق على
        <Button variant="text" style={{ color: '#e53935', fontSize: '16px' }} onClick={handleClickOpen}>
          شروط الاتفاقية
        </Button>
      </span>
    }
    style={{ marginLeft: '8px' }} 
  />
</div>



          <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ textAlign: 'right', fontWeight: 'bold' }}>اتفاقية الإيجار</DialogTitle>
            <DialogContent style={{ textAlign: 'right', lineHeight: '1.6' }}>
              <p>بموجب هذه الاتفاقية، فإن المستأجر يوافق على الالتزام بالشروط التالية:</p>
              <ul style={{ paddingRight: '20px' }}>
                <li>يجب أن يكون المستأجر حاملًا لرخصة قيادة سارية المفعول طوال فترة الإيجار.</li>
                <li>يجب أن يكون عمر المستأجر 21 عامًا أو أكبر.</li>
                <li>المركبة مؤمنة ضد الحوادث والأضرار وفقًا لشروط وأحكام بوليصة التأمين الخاصة بالشركة.</li>
                <li>المستأجر مسؤول عن دفع أي غرامات ناتجة عن مخالفات المرور التي تقع خلال فترة الإيجار.</li>
                <li>لا يجوز استخدام المركبة لأغراض غير قانونية أو في أنشطة مخالفة للقوانين.</li>
                <li>يحظر نقل المواد الخطرة أو المتفجرة في المركبة.</li>
                <li>يجب إعادة المركبة في حالة نظيفة وبحالة جيدة كما تم استلامها.</li>
                <li>المستأجر مسؤول عن أي أضرار تلحق بالمركبة نتيجة الإهمال أو الاستخدام غير السليم.</li>
                <li>الوقود المستخدم في المركبة يجب أن يكون من النوع الموصى به من قبل الشركة.</li>
                <li>لا يجوز للمستأجر السماح لأي شخص آخر بقيادة المركبة دون موافقة الشركة.</li>
                <li>في حالة الحوادث، يجب على المستأجر إبلاغ الشرطة وشركة التأمين فورًا.</li>
                <li>لا يجوز استخدام المركبة في السباقات أو القيادة بطريقة تعرض الآخرين للخطر.</li>
                <li>المركبة يجب أن لا تغادر حدود الدولة دون إذن مسبق من الشركة.</li>
                <li>تحتفظ الشركة بحقها في إنهاء العقد واستعادة المركبة في أي وقت إذا تبين أن المستأجر قد انتهك أيًا من الشروط.</li>
                <li>جميع المدفوعات المتعلقة بالإيجار يجب أن تتم مسبقًا قبل استلام المركبة.</li>
                <li>في حالة التأخير في إعادة المركبة، قد يتم فرض رسوم إضافية على المستأجر.</li>
                <li>هذه الاتفاقية تخضع لقوانين الدولة وتفسر بموجبها.</li>
              </ul>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} style={{ color: 'red', fontWeight: 'bold' }}>
                موافق
              </Button>
            </DialogActions>
          </Dialog>

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
