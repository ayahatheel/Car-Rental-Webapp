import React, { useState, useEffect } from 'react';
import './Feedback.css';
import { useAuth } from '../contexts/authContext'; 
import { Rating } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Feedback = () => {
  const { currentUser } = useAuth(); 
  const [isFormVisible, setIsFormVisible] = useState(false);
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

  useEffect(() => {
    setNewFeedback({ email: currentUser?.email || '', location: '', rating: 0, comment: '' });
  }, [currentUser]);

  const handleLeaveFeedbackClick = () => {
    if (currentUser) {
      setIsFormVisible(true);
    } else {
      alert("يرجى تسجيل الدخول لترك ملاحظة.");
    }
  };

  const handleGoBackClick = () => setIsFormVisible(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const handleSubmitFeedback = () => {
    if (newFeedback.location && newFeedback.rating && newFeedback.comment) {
      const feedback = { ...newFeedback, id: feedbacks.length + 1 };
      setFeedbacks([...feedbacks, feedback]);
      setNewFeedback({ email: currentUser?.email || '', location: '', rating: 0, comment: '' });
      setIsFormVisible(false);
    } else {
      alert("يرجى ملء جميع الحقول.");
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
                <Rating value={feedback.rating} readOnly />
                {currentUser && feedback.email === currentUser.email && (
                  <IconButton onClick={() => handleDeleteFeedback(feedback.id)}>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                )}
              </div>
              <p>{feedback.comment}</p>
            </div>
          ))}
        </div>
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
              <Rating
                name="rating"
                value={newFeedback.rating}
                onChange={(event, newValue) => {
                  setNewFeedback({ ...newFeedback, rating: newValue });
                }}
              />
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
