import React, { useState, useEffect } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Scroll-based fade-in effect
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight; // Declare windowHeight here
      const containerElement = document.querySelector('.faq-box-container');
      const questionElements = document.querySelectorAll('.faq-box');

      if (containerElement) {
        const containerTop = containerElement.getBoundingClientRect().top;
        if (containerTop < windowHeight * 0.75) { // Adjust threshold as needed
          containerElement.classList.add('visible');
        }
      }

      questionElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.75) { // Adjust threshold as needed
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "ما هو التأمين وهل يجب عليّ شراؤه؟",
      answer:
        "التأمين هو خدمة اختيارية تقدم لحماية السيارة والركاب في حال وقوع حادث. يُفضل شراء التأمين وفقًا لسياسة الوكالة.",
    },
    {
      question: "ما هي المستندات المطلوبة لاستئجار السيارة؟",
      answer:
        "تعتمد المستندات المطلوبة على سياسة كل وكالة لكن عادةً ما تشمل بطاقة الهوية الوطنية أو جواز السفر ورخصة القيادة.",
    },
    {
      question: "هل يمكنني تأجير سيارة بدون بطاقة ائتمان؟",
      answer:
        "تعتمد الشروط على سياسة الوكالة. بعض الوكالات تسمح بالتأجير بدون بطاقة ائتمان ولكن قد يتطلب ذلك إجراءات إضافية.",
    },
    {
      question: "كيف يتم دفع رسوم الاستئجار؟",
      answer:
        "يمكن دفع رسوم الاستئجار عبر بطاقة ائتمان أو نقدًا، وفي بعض الحالات يمكن الدفع عبر تطبيقات الدفع الإلكتروني.",
    },
    {
      question: "هل يوجد سن القيادة الحد الأدنى لاستئجار السيارة؟",
      answer:
        "نعم، توجد شروط عمرية لاستئجار السيارة وتختلف حسب سياسة الوكالة، وعادة ما يكون الحد الأدنى للعمر 21 عامًا.",
    },
  ];

  return (
    <div className="faq-box-container fade-in">
      <h5 className="HFAQ">الأسئلة الشائعة</h5>
      <p className="PFAQ">
        احصل على كل المعلومات التي تحتاجها لخدمات تأجير السيارات لدينا أدناه.
      </p>
      {faqItems.map((item, index) => (
        <div className="faq-box fade-in" key={index}>
          <div
            className={`faq-box-question ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <h4>{item.question}</h4>
            <span className="faq-box-icon"></span>
          </div>
          <div
            className="faq-box-answer"
            style={{ maxHeight: activeIndex === index ? "100px" : "0px" }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
      <div className="faq-box-footer fade-in">
        <p>سؤالك ليس هنا؟</p>
        <Link component={Link} to="/Contactus">
          <Button
            sx={{
              color: "white",
              width: "210px",
              backgroundColor: "#E90224",
              borderRadius: "10px",
            }}
          >
            تواصل معنا{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
