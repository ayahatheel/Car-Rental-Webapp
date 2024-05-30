import React from "react";
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/contact.css";

function Contactus() {
  return (
    <div
      className="contact-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="contact-form">
        <h2>تواصل معنا</h2>
        <p>نحن هنا لمساعدتك! ارسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.</p>
        <form action="https://formspree.io/f/xjvnqvoa" method="POST">
          <input type="text" name="name" placeholder="اسمك" required />
          <input
            type="email"
            name="_replyto"
            placeholder="بريدك الإلكتروني"
            required
          />
          <textarea name="message" placeholder="رسالتك" required></textarea>
          <div className="button-container">
            <button type="submit">→ إرسال</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
