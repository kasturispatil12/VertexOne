import "../css/ComponentTable.css";

function ServiceTable({ services, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table className="component-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Service</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service, index) => (
            <tr key={service._id}>
              <td>{index + 1}</td>

              <td>{service.title}</td>

              <td>{service.category}</td>

              <td>{service.description}</td>

              <td>
                <span
                  className={
                    service.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {service.status}
                </span>
              </td>

              <td>
                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(service)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(service._id)}
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

export default ServiceTable;