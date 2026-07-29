import "./ComponentDetails.css";
import { useParams, Link } from "react-router-dom";
import { componentsData } from "../data/components";

function ComponentDetails() {
  const { id } = useParams();

  const component = componentsData.find(
    (item) => item.id === Number(id)
  );

  if (!component) {
    return <h2>Component Not Found</h2>;
  }

  return (
    <div className="component-details">
      <Link to="/components" className="back-btn">
        ← Back to Components
      </Link>

      <div className="details-header">
        <div className="details-image">
          <img alt={component.name} src={component.image} />
        </div>

        <div className="details-info">
          <span className="details-category">{component.category}</span>

          <h1>{component.name}</h1>

          <p className="details-description">{component.description}</p>

          <h3>Function</h3>
          <p>{component.function}</p>
        </div>
      </div>

      <div className="details-section">
        <h2>Advantages</h2>
        <ul className="details-list">
          {component.advantages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="details-section">
        <h2>Applications</h2>
        <ul className="details-list">
          {component.applications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="details-section">
        <h2>Specifications</h2>
        <table className="spec-table">
          <tbody>
            {Object.entries(component.specifications).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComponentDetails;