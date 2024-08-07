import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../xanoAuth';
import { useAuth } from '../contexts/authContext';
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/login.css";

const Login = () => {
  const { userLoggedIn, setUserLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        const user = await doSignInWithEmailAndPassword(email, password);
        console.log("Login successful:", user); // Debugging: Log successful login
        setUserLoggedIn(true);
      } catch (error) {
        console.error("Login error:", error); // Debugging: Log the error
        setErrorMessage(error.message || "خطأ في تسجيل الدخول. يرجى المحاولة مرة أخرى.");
        setIsSigningIn(false);
      }
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="login-form">
        <h2>تسجيل الدخول</h2>
        <p className='welcoming'>مرحبا بك مجددا</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
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
          <div className="button-container">
            <button type="submit" disabled={isSigningIn}>
              → تسجيل الدخول
            </button>
          </div>
        </form>
        <p className="signup-link">
          ليس لديك حساب؟ <Link to="/signup">أنشئ حساباً</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
