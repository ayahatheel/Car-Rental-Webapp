import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/singup.css";
import { useAuth } from '../contexts/authContext';

function Signup() {
  const { signUp, userLoggedIn } = useAuth();
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formValues;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('يرجى ملء جميع الحقول');
      return;
    }
    if (password !== confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return;
    }
    try {
      await signUp(email, password);
    } catch (error) {
      setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="signup-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="signup-form">
        <h2>أنشئ حسابك المجاني</h2>
        <p>وادر حجوزاتك بسهولة!</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="name-fields">
           
            <input
              type="text"
              name="lastName"
              placeholder="الاسم الثاني"
              value={formValues.lastName}
              onChange={handleInputChange}
              required
              onFocus={(e) => e.target.select()}
            />
             <input
              type="text"
              name="firstName"
              placeholder="الاسم الأول"
              value={formValues.firstName}
              onChange={handleInputChange}
              required
              onFocus={(e) => e.target.select()}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formValues.email}
            onChange={handleInputChange}
            required
            onFocus={(e) => e.target.select()}
          />
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={formValues.password}
            onChange={handleInputChange}
            required
            onFocus={(e) => e.target.select()}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="تأكيد كلمة المرور"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            required
            onFocus={(e) => e.target.select()}
          />
          <div className="button-container">
            <button type="submit">→ سجل</button>
          </div>
        </form>
        <p className="login-link">
          هل لديك حساب؟ <a href="/login">تسجيل الدخول</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
