import React, { useState } from 'react';
import './FAQ.scss';

const faqData = [
  {
    id: 1,
    question: "What do we do to help you other than other companies?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    question: "What is the favorite destination for our customers?",
    answer: "Our customers love tropical islands and historical European cities. We offer exclusive packages for both!"
  },
  {
    id: 3,
    question: "How do you make the payment?",
    answer: "You can pay via credit card, bank transfer, or digital wallets like PayPal and Stripe safely."
  },
  {
    id: 4,
    question: "What criteria should you consider when choosing a destination for your vacation?",
    answer: "Consider your budget, the season, cultural interests, and the type of activities you enjoy most."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Eğer tıklanan zaten açıksa kapat (null yap), değilse o indeksi aç
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={item.id} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <button className="toggle-btn">
                <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
              </button>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;