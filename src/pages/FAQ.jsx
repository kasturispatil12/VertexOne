import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "What is a Data Center?",
      answer:
        "A data center is a facility that houses servers, storage devices, networking equipment, power systems, and cooling infrastructure to process and store data securely."
    },
    {
      question: "What is a Server Rack?",
      answer:
        "A server rack is a standardized frame used to organize and protect servers, networking devices, and storage equipment."
    },
    {
      question: "Why is Cooling Important?",
      answer:
        "Cooling prevents servers from overheating, ensuring reliable performance and increasing hardware lifespan."
    },
    {
      question: "What is a Network Switch?",
      answer:
        "A network switch connects multiple devices within a network and efficiently forwards data between them."
    },
    {
      question: "What is a UPS?",
      answer:
        "A UPS (Uninterruptible Power Supply) provides temporary backup power during electrical failures."
    },
    {
      question: "Can I compare multiple components?",
      answer:
        "Yes. VertexOne allows you to compare multiple data center components side by side."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">

      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about data center technologies.
        </p>
      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default FAQ;