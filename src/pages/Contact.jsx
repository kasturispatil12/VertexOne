import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact VertexOne</h1>
        <p>
          Have questions about data center infrastructure or our platform?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>

      <div className="map-section">
        <h2>Find Us</h2>

        <iframe
          title="VertexOne Location"
          src="https://www.google.com/maps?q=Mumbai&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;