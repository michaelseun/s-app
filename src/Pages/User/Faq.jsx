import './Faq.css';
import { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is ScholarApex?",
      answer:
     "Scholar Apex is a student-built, student-focused academic platform and community designed to propel university learners toward their highest potential",
    },
    {
      question: "How does ScholarApex Work",
      answer:
        "Through its AI-driven perso nalization, dynamic community engagement, and focused career preparation, Scholar Apex transforms the university experience. It empowers students to take ownership of their learning journey, benefit from collective wisdom, and step confidently into the professional world—truly making Scholar Apex a launchpad for academic excellence and professional growth.",
    },
    {
      question: "Who is ScholarApex for?",
      answer:
        "ScholarAPpex is designed for students, professionals, educators, and lifelong learners who want to maximize their learning efficiency. Whether you're studying for exams, acquiring new skills, or expanding your knowledge, our platform adapts to your specific needs.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <span className="faq-tag">FAQS</span>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-description">
            Here's a set of frequently asked questions (FAQ) for ScholarApex, along with answers that highlight key
            features and details about your platform:
          </p>
          <button className="faq-button">
            Still have a question? <span className="arrow-icon">→</span>
          </button>
        </div>

        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="plus-icon">+</span>
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
