import "./Services.css";
import { Link } from "react-router-dom";

import {
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaSnowflake,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      slug: "infrastructure-design",
      icon: <FaServer />,
      title: "Infrastructure Design",
      description:
        "Design scalable and efficient data center infrastructure for enterprises.",
    },
    {
      slug: "network-solutions",
      icon: <FaNetworkWired />,
      title: "Network Solutions",
      description:
        "High-speed networking with switches, routers, and firewalls.",
    },
    {
      slug: "storage-solutions",
      icon: <FaDatabase />,
      title: "Storage Solutions",
      description:
        "Reliable storage systems for enterprise applications and backups.",
    },
    {
      slug: "cooling-systems",
      icon: <FaSnowflake />,
      title: "Cooling Systems",
      description:
        "Efficient cooling solutions to maintain optimal server temperatures.",
    },
    {
      slug: "security-services",
      icon: <FaShieldAlt />,
      title: "Security Services",
      description:
        "Protect infrastructure with enterprise-grade security solutions.",
    },
    {
      slug: "power-backup",
      icon: <FaBolt />,
      title: "Power Backup",
      description:
        "UPS, generators, and redundant power systems for uninterrupted operations.",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          VertexOne provides enterprise-grade data center solutions to
          ensure reliability, scalability, and high performance.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.slug}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link className="service-btn" to={`/services/${service.slug}`}>
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;