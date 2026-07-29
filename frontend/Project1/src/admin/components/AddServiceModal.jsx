import { useState, useEffect } from "react";
import "../css/AddServiceModal.css";

function AddServiceModal({
  onClose,
  onSave,
  editingService,
}) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    status: "Active",
    description: "",
  });

  useEffect(() => {
    if (editingService) {
      setFormData(editingService);
    } else {
      setFormData({
        title: "",
        category: "",
        status: "Active",
        description: "",
      });
    }
  }, [editingService]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>
            {editingService ? "Edit Service" : "Add New Service"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          className="component-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Service Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-buttons">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {editingService ? "Save Changes" : "Save Service"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddServiceModal;