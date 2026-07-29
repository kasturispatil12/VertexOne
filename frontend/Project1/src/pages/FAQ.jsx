import { useState, useEffect } from "react";
import "./FAQ.css";

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/faqs");
      const data = await response.json();

      setFaqs(data);
    } catch (error) {
      console.log("Error fetching FAQs:", error);
    }
  };

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
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={faq._id}
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