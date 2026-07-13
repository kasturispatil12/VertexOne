import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";
import { FaArrowDown } from "react-icons/fa";



function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(10,37,64,0.75),
          rgba(10,37,64,0.75)
        ), url(${heroImage})`,
      }}
    >
      <div className="hero-content">

        <p className="hero-tag">
          Reliable • Secure • Scalable
        </p>

        <h1>
          Powering Intelligent
          <br />
          Data Infrastructure
        </h1>

        <p className="hero-description">
          VertexOne delivers enterprise-grade data center
          infrastructure solutions, helping businesses build
          secure, scalable, and high-performance digital
          environments.
        </p>

        <div className="hero-buttons">
          <Link to="/components" className="hero-btn primary">
            Explore Components
          </Link>

          <Link to="/services" className="hero-btn secondary">
            Our Services
          </Link>
        </div>

        <div className="explore-more">
          <Link to="/components" className="explore-btn">
            Explore More Components <FaArrowDown />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;