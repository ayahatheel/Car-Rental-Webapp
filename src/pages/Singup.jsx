import React from "react";
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/singup.css";

function Singup() {
  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="signup-form">
        <h2>أنشئ حسابك المجاني</h2>
        <p>وادر حجوزاتك بسهولة!</p>
        <form>
          <div className="name-fields">
            <input type="text" placeholder="الاسم الثاتي" />
            <input type="text" placeholder="الاسم الأول" />
          </div>
          <input type="number" placeholder="رقم الهاتف" />
          <input type="password" placeholder="كلمة المرور" />
          <input type="password" placeholder="تأكيد كلمة المرور" />
          <div className="button-container">
            <button type="submit">→ سجل</button>
          </div>
        </form>
        <p className="login-link">
          هل لديك حساب؟ <a href="/login">سجيل الدخول</a>
        </p>
      </div>
    </div>
  );
}

export default Singup;
