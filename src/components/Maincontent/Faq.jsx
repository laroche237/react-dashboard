import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ.css"; // Ajoutons du style pour les animations

const Faq = () => {
  const faqData = [
    {
      question: "Quel est le budget de la création d'une application mobile ?",
      answer: "React est une bibliothèque JavaScript pour créer des interfaces utilisateur.",
    },
    {
      question: "Comment installer React ?",
      answer: "Vous pouvez installer React en utilisant npm ou yarn via la commande `npm install react`.",
    },
    {
      question: "Qu'est-ce qu'un composant React ?",
      answer: "Un composant React est une partie réutilisable d'une interface utilisateur.",
    },
    {
      question: "Qu'est-ce que le state dans React ?",
      answer: "Le state est un objet local à un composant qui stocke des données dynamiques.",
    },
    {
      question: "Comment utiliser les props dans React ?",
      answer: "Les props sont utilisées pour passer des données d'un composant parent à un composant enfant.",
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