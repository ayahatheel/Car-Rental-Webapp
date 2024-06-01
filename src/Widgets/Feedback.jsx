import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const feedbacks = [
    {
      name: "جين دو",
      location: "بغداد",
      rating: 5,
      comment: "استئجار نيسان جوك كان تغييرًا كبيرًا في مغامرتنا الخارجية. مساحة واسعة للأمتعة ومريحة للغاية للرحلات الطويلة!"
    },
    {
      name: "جين دو",
      location: "بغداد",
      rating: 5,
      comment: "استئجار نيسان جوك كان تجربة رائعة! ميزات السيارة الحديثة، المقاعد المريحة، والأداء السلس جعلت كل رحلة ممتعة."
    }
  ];

  const handleLeaveFeedbackClick = () => {
    setIsFormVisible(true);
  };

  const handleGoBackClick = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="feedback-section">
      <div className={`feedback-content ${isFormVisible ? 'hidden' : 'visible'}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>إليك ما يقوله الآخرون عن هذه السيارة</h2>
          <button className="leave-feedback-button" onClick={handleLeaveFeedbackClick}>اترك ملاحظة</button>
        </div>
        <div className="feedback-container">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <div className="feedback-header">
                <span className="feedback-name">{feedback.name} - {feedback.location}</span>
                <div className="feedback-rating">
                  {Array.from({ length: feedback.rating }).map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <p>{feedback.comment}</p>
            </div>
          ))}
        </div>
        <button className="show-all-feedbacks-button">عرض كل الملاحظات</button>
      </div>
      
      <div className={`feedback-content ${isFormVisible ? 'visible' : 'hidden'}`}>
        <div className="feedback-form">
          <h2>اكتب ملاحظاتك</h2>
          <div style={{ display: "flex", alignItems: "right" }}>
            <input type="text" placeholder="أدخل اسمك الكامل" className="feedback-input" style={{ flex: "1", marginRight: "20px" }} />
            <div className="rating-section">
              <span>قيم السيارة</span>
              <div className="feedback-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="star">☆</span>
                ))}
              </div>
            </div>
          </div>
          <textarea placeholder="اكتب ملاحظاتك هنا" className="feedback-textarea"></textarea>
          <button className="submit-feedback-button">اترك ملاحظة</button>
          <button className="go-back-button" onClick={handleGoBackClick}>رجوع</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
