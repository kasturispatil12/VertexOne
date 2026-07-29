import { useState, useEffect } from "react";
import "../css/AddComponentModal.css";

function AddComponentModal({
  onClose,
  onSave,
  editingComponent,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    manufacturer: "",
    status: "Active",
    description: "",
    image: "",
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (editingComponent) {
      setFormData(editingComponent);
      setPreview(editingComponent.image || "");
    } else {
      setFormData({
        name: "",
        category: "",
        manufacturer: "",
        status: "Active",
        description: "",
        image: "",
      });
      setPreview("");
    }
  }, [editingComponent]);

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleImage = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  setPreview(URL.createObjectURL(file));

  setFormData({
    ...formData,
    image: file,
  });
};
 

  const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("name", formData.name);
  data.append("category", formData.category);
  data.append("manufacturer", formData.manufacturer);
  data.append("status", formData.status);
  data.append("description", formData.description);

  if (formData.image) {
    data.append("image", formData.image);
  }

  onSave(data);
};

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>
            {editingComponent
              ? "Edit Component"
              : "Add New Component"}
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
            <label>Component Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
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
            <label>Manufacturer</label>

            <input
              type="text"
              name="manufacturer"
              value={formData.manufacturer}
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
            />
          </div>

          <div className="form-group">
            <label>Upload Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

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
              {editingComponent
                ? "Save Changes"
                : "Save Component"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComponentModal;