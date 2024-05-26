import React, { useState } from 'react';
import './FAQ.css'; // Ensure this file exists to style the component

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is a “Credit”",
      answer: "Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month."
    },
    {
      question: "What does “Web Development” mean?",
      answer: "Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month."
    },
    {
      question: "What is a “User”?",
      answer: "Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month."
    },
    {
      question: "Do I have to connect ad accounts to use Website?",
      answer: "Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month."
    },
    {
      question: "What do you mean by frontend?",
      answer: "Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month."
    }
  ];

  return (
    <div className="faq-box-container">
      {faqItems.map((item, index) => (
        <div className="faq-box" key={index}>
          <div
            className={`faq-box-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
            style={{ height: '30px' }} // Change the height here
          >
            <h4>{item.question}</h4>
            <span className="faq-box-icon"></span>
          </div>
          <div
            className="faq-box-answer"
            style={{ maxHeight: activeIndex === index ? '100px' : '0px' }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
