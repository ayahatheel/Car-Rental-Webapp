import React, { useState } from 'react';
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/singup.css";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      // Handle successful registration, e.g., redirect to login or home page
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      // Handle successful Google sign-in, e.g., redirect to login or home page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="signup-form">
        <h2>أنشئ حسابك المجاني</h2>
        <p>وادر حجوزاتك بسهولة!</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <input
              type="text"
              placeholder="الاسم الثاتي"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="الاسم الأول"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="button-container">
            <button type="submit">→ سجل</button>
          </div>
        </form>
        <div className="google-signin-container">
          <button onClick={handleGoogleSignIn} className="google-signin-button">
            سجل باستخدام Google
          </button>
        </div>
        <p className="login-link">
          هل لديك حساب؟ <a href="/login">سجيل الدخول</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
