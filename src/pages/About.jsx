import "./About.css";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <span className="section-tag">ABOUT VERTEXONE</span>

          <h2>
            Building the Future of Intelligent Data Centers
          </h2>

          <p>
            VertexOne is a fictional technology company
            specializing in modern data center infrastructure.
            Our platform showcases essential components,
            networking equipment, storage systems, power
            solutions, cooling technologies, and enterprise
            services that ensure reliable digital operations.
          </p>

          <ul className="about-features">
            <li>✔ Enterprise-grade Infrastructure</li>
            <li>✔ Reliable & Secure Systems</li>
            <li>✔ High Performance Networking</li>
            <li>✔ Energy Efficient Architecture</li>
          </ul>

          
        </div>
      </div>
    </section>
  );
}

export default AboutSection;