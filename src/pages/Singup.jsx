import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/singup.css";
import { useAuth } from '../contexts/authContext';

function Signup() {
  const { signUp, userLoggedIn } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
              placeholder="الاسم الثاني"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              onFocus={(e) => e.target.select()}
            />
            <input
              type="text"
              placeholder="الاسم الأول"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              onFocus={(e) => e.target.select()}
            />
          </div>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onFocus={(e) => e.target.select()}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onFocus={(e) => e.target.select()}
          />
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
