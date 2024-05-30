import React from "react";
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/login.css";

function Login() {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-form">
        <h2>تسجيل الدخول</h2>
        <p>مرحبا بك مجددا</p>
        <form>
          <input type="number" placeholder="رقم الهاتف"/>
          <input type="password" placeholder="كلمة المرور" />
          <div className="button-container">
            <button type="submit">→ تسجيل الدخول</button>
          </div>
        </form>
        <p className="signup-link">
          ليس لديك حساب؟ <a href="/signup">أنشئ حساباً</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
