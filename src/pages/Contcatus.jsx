import React, { useState } from "react";
import bgImage from "../Widgets/Images/formbg.png";
import "../Widgets/contact.css";
import Alert from "@mui/material/Alert";

function Contactus() {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(userPhone)) {
      setAlertMessage("رقم الهاتف غير صحيح. يجب أن يبدأ بـ 077 أو 078 أو 075 ويكون 11 رقمًا.");
      setAlertSeverity("error");
      return;
    }

    const data = {
      user_name: userName,
      user_phone: userPhone,
      user_maesgae: userMessage,
    };

    try {
      const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:NgsY8ztc/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setAlertMessage("تم إرسال الرسالة بنجاح!");
        setAlertSeverity("success");
        setUserName("");
        setUserPhone("");
        setUserMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setAlertMessage("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى لاحقًا.");
      setAlertSeverity("error");
    }
  };

  const validatePhone = (phone) => {
    const phonePattern = /^(077|078|075)\d{8}$/;
    return phonePattern.test(phone);
  };

  return (
    <div
      className="contact-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="contact-form">
        <h2>تواصل معنا</h2>
        <p>نحن هنا لمساعدتك! ارسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="اسمك"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="رقم هاتفك"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="رسالتك"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          ></textarea>
          <div className="button-container">
            <button type="submit">→ إرسال</button>
          </div>
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

export default Contactus;
