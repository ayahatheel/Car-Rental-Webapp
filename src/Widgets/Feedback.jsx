import React, { useState, useEffect } from 'react';
import './Feedback.css';
import { useAuth } from '../contexts/authContext'; 
import { Rating } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Feedback = ({ selectedCarId }) => {
  const { currentUser } = useAuth(); 
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState({ name: '', rating: 0, comment: '' });

  useEffect(() => {
    setFeedbacks([]); // Clear feedbacks before fetching new ones
    fetchFeedbacks(selectedCarId);
  }, [selectedCarId]);

  const fetchFeedbacks = (carId) => {
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:55e70dMC/comments`)
      .then(response => response.json())
      .then(data => {
        // Client-side filter
        const filteredFeedbacks = data.filter(comment => comment.car_id === parseInt(carId));
        setFeedbacks(filteredFeedbacks);
      })
      .catch(error => {
        console.error('Error fetching feedbacks:', error);
      });
  };

  const handleLeaveFeedbackClick = () => {
    setIsFormVisible(true);
  };

  const handleGoBackClick = () => setIsFormVisible(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const handleSubmitFeedback = () => {
    if (newFeedback.name && newFeedback.rating && newFeedback.comment) {
      const feedback = { ...newFeedback, car_id: selectedCarId }; // Add car_id to feedback

      fetch('https://x8ki-letl-twmt.n7.xano.io/api:55e70dMC/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      })
      .then(response => response.json())
      .then(data => {
        setFeedbacks([...feedbacks, data]);
        setNewFeedback({ name: '', rating: 0, comment: '' });
        setIsFormVisible(false);
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
    } else {
      alert("يرجى ملء جميع الحقول.");
    }
  };

  const handleDeleteFeedback = (id) => {
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:55e70dMC/comments/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
    })
    .catch(error => {
      console.error('Error deleting feedback:', error);
    });
  };

  return (
    <div className="feedback-section">
      <div className="feedback-content">
        <div className="header">
          <h2>إليك ما يقوله الآخرون عن هذه السيارة</h2>
          <button className="leave-feedback-button" onClick={handleLeaveFeedbackClick}>اترك ملاحظة</button>
        </div>
        <div className="feedback-container">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-card">
              <div className="feedback-header">
                <span className="feedback-name">{feedback.name}</span>
                <Rating value={feedback.rating} readOnly />
                {currentUser && feedback.name === currentUser.name && (
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
              name="name"
              placeholder="أدخل اسمك" 
              className="feedback-input" 
              value={newFeedback.name}
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
