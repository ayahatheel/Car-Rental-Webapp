import React, { useState } from 'react';
import './FAQ.css'; // Ensure this file exists to style the component
import Button from '@mui/material/Button'; // Assuming you are using Material-UI for the button

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is a ‘Credit’?",
      answer: "Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month."
    },
    {
      question: "What does ‘Web Development’ mean?",
      answer: "Web development is the work involved in developing a website for the Internet or an intranet. This can range from developing a simple single static page of plain text to complex web applications."
    },
    {
      question: "What is a ‘User’?",
      answer: "A user is an individual who uses a computer or network service. Users of computer systems and software products generally lack the technical expertise required to fully understand how they work."
    },
    {
      question: "Do I have to connect ad accounts to use the website?",
      answer: "No, you do not have to connect ad accounts to use the website. However, connecting ad accounts can provide additional features and benefits."
    },
    {
      question: "What do you mean by frontend?",
      answer: "Frontend refers to the client-side of a web application. It is the part of the website or application that users interact with directly. The frontend is usually built with HTML, CSS, and JavaScript."
    }
  ];

  return (
    <div className="faq-box-container">
      <h5 className='HFAQ'>Frequently Asked Questions</h5>
      <p className='PFAQ'>Get all the information you need for our car rental services below.</p>
      {faqItems.map((item, index) => (
        <div className="faq-box" key={index}>
          <div
            className={`faq-box-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
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
      <div className="faq-box-footer">
        <p>Your question is not here?</p>
        <Button sx={{ color: 'white', width:'150px', backgroundColor: '#E90224', borderRadius: '10px' }}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
