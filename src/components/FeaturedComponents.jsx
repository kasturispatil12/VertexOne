import "./FeaturedComponents.css";
import { componentsData } from "../data/components";
import ComponentCard from "./ComponentCard";

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
        {componentsData.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedComponents;