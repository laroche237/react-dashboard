import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ.css"; // Ajoutons du style pour les animations

const Faq = () => {
  const faqData = [
    {
      question: "What are the cost for a project ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a.",
    },
    {
      question: "I want to start my campaign on social media, how start?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et ",
    },
    {
      question: "What leads us ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et .",
    },
    {
      question: "How does the application process work ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et .",
    },
    {
      question: "How to create an account?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div class="row">
       <h3 className="mb-4 m-2 text-center fs-2 fw-bold">FAQ</h3>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item mb-3" >
            {/* Question */}
            <button
              className="btn btn-link w-100 text-left bg-white"
              onClick={() => toggleFAQ(index)}
              style={{color:"blueviolet"}}
            >
              {item.question} <i class="fa fa-arrow-down"></i>
            </button>

            {/* Réponse */}
            <div
              className={`faq-answer ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq;