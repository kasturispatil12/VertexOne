import "./FeaturedComponents.css";
import { componentsData } from "../data/components";
import ComponentCard from "./ComponentCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function FeaturedComponents() {
  return (
    <section className="featured-components">
      <div className="featured-header">
        <h2>Featured Components</h2>
        <p>
          Explore the essential building blocks of a modern
          data center infrastructure.
        </p>
      </div>

      <div className="featured-grid">
        {componentsData.slice(0, 8).map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>

      <div className="featured-more">
        <Link to="/components" className="featured-more-btn">
          View All Components <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default FeaturedComponents;