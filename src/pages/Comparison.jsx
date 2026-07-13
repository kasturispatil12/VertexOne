import { useState } from "react";
import "./Comparison.css";
import { componentsData } from "../data/components";
import { FaCheckCircle } from "react-icons/fa";

function Comparison() {
  const [selectedIds, setSelectedIds] = useState(["", ""]);

  const handleSelect = (index, value) => {

  
  if (value === "") {
    const updated = [...selectedIds];
    updated[index] = value;
    setSelectedIds(updated);
    return;
  }


  const alreadySelected = selectedIds.some(
    (id, i) => i !== index && id === value
  );

  if (alreadySelected) {
    alert("This component is already selected. Please choose a different component.");
    return;
  }

  
  const updated = [...selectedIds];
  updated[index] = value;
  setSelectedIds(updated);
};

  const addSelector = () => {
    setSelectedIds([...selectedIds, ""]);
  };

  const selectedComponents = selectedIds
    .filter((id) => id !== "")
    .map((id) =>
      componentsData.find((component) => component.id === Number(id))
    );

  return (
    <div className="comparison-container">

      <div className="comparison-header">
            <h1>Comparison Hub</h1>
            <p>
                Compare multiple data center components side by side and understand
                their features, applications, and specifications.
            </p>
        </div>

      {selectedIds.map((id, index) => (
        <div className="selector" key={index}>

          <label>Component {index + 1}</label>

          <select
            value={id}
            onChange={(e) => handleSelect(index, e.target.value)}
          >
            <option value="">Select Component</option>

            {componentsData.map((component) => (
              <option key={component.id} value={component.id}>
                {component.name}
              </option>
            ))}

          </select>

        </div>
      ))}

      <button
        className="add-btn"
        onClick={addSelector}
      >
        + Add Another Component
      </button>

      {selectedComponents.length >= 2 && (

        <table>

          <thead>

                <tr>

                    <th></th>

                        {selectedComponents.map((component)=>(
                    <th key={component.id}>
                        <div className="component-card">
                            <h3>{component.name}</h3>

                            <span className="compare-category">
                            {component.category}
                            </span>
                        </div>
                    </th>
                )
                )}

                </tr>

            </thead>

          <tbody>

            
            <tr>

              <td>Function</td>

              {selectedComponents.map((component) => (
                <td key={component.id}>
                  {component.function}
                </td>
              ))}

            </tr>

            <tr>

              <td>Description</td>

              {selectedComponents.map((component) => (
                <td key={component.id}>
                  {component.description}
                </td>
              ))}

            </tr>

            <tr>
                <td>Advantages</td>

                {selectedComponents.map((component) => (
                    <td key={component.id}>
                    <ul className="compare-list">
                        {component.advantages.map((advantage, index) => (
                        <li key={index}>
                            <FaCheckCircle className="check-icon" />
                            <span>{advantage}</span>
                        </li>
                        ))}
                    </ul>
                    </td>
                ))}
            </tr>

            <tr>
                <td>Applications</td>

                {selectedComponents.map((component) => (
                    <td key={component.id}>
                    <ul className="compare-list">
                        {component.applications.map((application, index) => (
                        <li key={index}>
                            <FaCheckCircle className="check-icon" />
                            <span>{application}</span>
                        </li>
                        ))}
                    </ul>
                    </td>
                ))}
            </tr>

            <tr className="spec-heading">
                <td colSpan={selectedComponents.length + 1}>
                    Specifications
                </td>
            </tr>
            
            {Object.keys(selectedComponents[0].specifications).map((key) => (
                <tr key={key}>
                    <td>{key}</td>

                    {selectedComponents.map((component) => (
                    <td key={component.id}>
                        {component.specifications[key] || "-"}
                    </td>
                    ))}
                </tr>
            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default Comparison;