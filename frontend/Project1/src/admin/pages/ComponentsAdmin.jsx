import { useState, useEffect } from "react";
import "../css/ComponentsAdmin.css";
import ComponentTable from "../components/ComponentTable";
import AddComponentModal from "../components/AddComponentModal";

function ComponentsAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [editingComponent, setEditingComponent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [components, setComponents] = useState([]);

    const fetchComponents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/components");
      const data = await response.json();
      setComponents(data);
    } catch (error) {
      console.error("Error fetching components:", error);
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

const saveComponent = async (formData) => {
  try {
    let response;

    if (editingComponent) {
      response = await fetch(
        `http://localhost:5000/api/components/${editingComponent._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
    } else {
      response = await fetch("http://localhost:5000/api/components", {
        method: "POST",
        body: formData,
      });
    }

    if (!response.ok) {
      throw new Error("Failed to save component");
    }

    await fetchComponents();

    setEditingComponent(null);
    setShowModal(false);
  } catch (error) {
    console.error("Error saving component:", error);
    alert("Failed to save component.");
  }
};

  const editComponent = (component) => {
    setEditingComponent(component);
    setShowModal(true);
  };

  const deleteComponent = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this component?"
  );

  if (!confirmDelete) return;

  try {
    await fetch(`http://localhost:5000/api/components/${id}`, {
      method: "DELETE",
    });

    fetchComponents();
  } catch (error) {
    console.error(error);
  }
};

  // Search
  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="components-admin">
      <div className="page-header">
        <div>
          <h1>Components</h1>
          <p>Manage all data center components.</p>
        </div>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search components..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button className="add-btn"
            onClick={() => {
              setEditingComponent(null);
              setShowModal(true);
            }}
          >
            + Add Component
          </button>
        </div>
      </div>

      <ComponentTable components={filteredComponents}onEdit={editComponent}onDelete={deleteComponent}/>

      {showModal && (
        <AddComponentModal
          onClose={() => {
            setShowModal(false);
            setEditingComponent(null);
          }}
          onSave={saveComponent}
          editingComponent={editingComponent}
        />
      )}
    </div>
  );
}

export default ComponentsAdmin;