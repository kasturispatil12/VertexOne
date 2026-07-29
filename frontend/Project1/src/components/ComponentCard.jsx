import "./ComponentCard.css";
import { Link } from "react-router-dom";

function ComponentCard({ component }) {
  return (
    <div className="component-card">
      <img src={component.image} alt={component.name} />

      <div className="component-card-content">
        <span className="component-category">{component.category}</span>

        <h3>{component.name}</h3>

        <p>{component.description}</p>

        <Link to={`/components/${component.id}`} className="component-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default ComponentCard;