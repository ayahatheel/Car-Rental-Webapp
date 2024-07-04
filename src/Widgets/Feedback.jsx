import React, { useState } from 'react';
import './Feedback.css';
import { useAuth } from '../contexts/authContext'; // Adjust the import path as necessary

const Feedback = () => {
  const { currentUser } = useAuth(); // Accessing currentUser from AuthContext
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      email: "user1@example.com",
      location: "بغداد",
      rating: 5,
      comment: "استئجار نيسان جوك كان تغييرًا كبيرًا في مغامرتنا الخارجية. مساحة واسعة للأمتعة ومريحة للغاية للرحلات الطويلة!"
    },
    {
      id: 2,
      email: "user2@example.com",
      location: "بغداد",
      rating: 5,
      comment: "استئجار نيسان جوك كان تجربة رائعة! ميزات السيارة الحديثة، المقاعد المريحة، والأداء السلس جعلت كل رحلة ممتعة."
    }
  ]);

  const [newFeedback, setNewFeedback] = useState({ email: currentUser?.email || '', location: '', rating: 0, comment: '' });

  const handleLeaveFeedbackClick = () => setIsFormVisible(true);
  const handleGoBackClick = () => setIsFormVisible(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const handleSubmitFeedback = () => {
    if (newFeedback.email && newFeedback.location && newFeedback.rating && newFeedback.comment) {
      const feedback = { ...newFeedback, id: feedbacks.length + 1 };
      setFeedbacks([...feedbacks, feedback]);
      setNewFeedback({ email: currentUser?.email || '', location: '', rating: 0, comment: '' });
      setRating(0);
      setIsFormVisible(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDeleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
  };

  return (
    <div className="feedback-section">
      <div className="feedback-content">
        <div className="header">
          <h2>إليك ما يقوله الآخرون عن هذه السيارة</h2>
          {currentUser ? (
            <button className="leave-feedback-button" onClick={handleLeaveFeedbackClick}>اترك ملاحظة</button>
          ) : (
            <p>يرجى تسجيل الدخول لترك ملاحظة.</p>
          )}
        </div>
        <div className="feedback-container">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-card">
              <div className="feedback-header">
                <span className="feedback-name">{feedback.email} - {feedback.location}</span>
                <div className="feedback-rating">
                  {Array.from({ length: feedback.rating }).map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                {currentUser && feedback.email === currentUser.email && (
                  <button className="delete-feedback-button" onClick={() => handleDeleteFeedback(feedback.id)}>حذف</button>
                )}
              </div>
              <p>{feedback.comment}</p>
            </div>
          ))}
        </div>
        <button className="show-all-feedbacks-button">عرض كل الملاحظات</button>
      </div>

      {isFormVisible && (
        <div className="feedback-modal">
          <div className="feedback-form">
            <h2>اكتب ملاحظاتك</h2>
            <input 
              type="text" 
              name="email"
              placeholder="أدخل بريدك الإلكتروني" 
              className="feedback-input" 
              value={newFeedback.email}
              readOnly
            />
            <input 
              type="text" 
              name="location"
              placeholder="أدخل موقعك" 
              className="feedback-input" 
              value={newFeedback.location}
              onChange={handleInputChange}
            />
            <div className="rating-section">
              <span>قيم السيارة</span>
              <div className="feedback-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < (hover || rating) ? 'filled' : 'unfilled'}`}
                    onClick={() => {
                      setRating(i + 1);
                      setNewFeedback({ ...newFeedback, rating: i + 1 });
                    }}
                    onMouseEnter={() => setHover(i + 1)}
                    onMouseLeave={() => setHover(rating)}
                  >☆</span>
                ))}
              </div>
            </div>
            <textarea 
              name="comment"
              placeholder="اكتب ملاحظاتك هنا" 
              className="feedback-textarea"
              value={newFeedback.comment}
              onChange={handleInputChange}
            ></textarea>
            <div className="form-buttons">
              <button className="submit-feedback-button" onClick={handleSubmitFeedback}>اترك ملاحظة</button>
              <button className="go-back-button" onClick={handleGoBackClick}>رجوع</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
