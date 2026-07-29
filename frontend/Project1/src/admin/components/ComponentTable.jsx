import "../css/ComponentTable.css";

function ComponentTable({ components, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table className="component-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Manufacturer</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {components.map((component, index) => (
            <tr key={component._id}>
              <td>{index + 1}</td>

              <td>
                {component.image ? (
                  <img
                    src={`http://localhost:5000${component.image}`}
                    alt={component.name}
                    className="component-image"
                  />
                ) : (
                  <div className="no-image">No Image</div>
                )}
              </td>

              <td>{component.name}</td>
              <td>{component.category}</td>
              <td>{component.manufacturer}</td>

              <td>
                <span
                  className={
                    component.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {component.status}
                </span>
              </td>

              <td>
                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(component)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(component._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComponentTable;