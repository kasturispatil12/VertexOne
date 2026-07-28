import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="contact-info">

      <h2>Contact Information</h2>

      <div className="info-card">
        <FaMapMarkerAlt className="icon" />
        <div>
          <h3>Location</h3>
          <p>Mumbai, Maharashtra, India</p>
        </div>
      </div>

      <div className="info-card">
        <FaEnvelope className="icon" />
        <div>
          <h3>Email</h3>
          <p>support@vertexone.com</p>
        </div>
      </div>

      <div className="info-card">
        <FaPhoneAlt className="icon" />
        <div>
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="info-card">
        <FaClock className="icon" />
        <div>
          <h3>Working Hours</h3>
          <p>Mon - Fri</p>
          <p>9:00 AM - 6:00 PM</p>
        </div>
      </div>

    </div>
  );
}

export default ContactInfo;