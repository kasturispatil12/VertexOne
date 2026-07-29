import { useState, useEffect } from "react";
import "../css/ComponentTable.css";
import ServiceTable from "../components/ServiceTable";
import AddServiceModal from "../components/AddServiceModal";

function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/services");
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const saveService = async (serviceData) => {
    try {
      if (editingService) {
        await fetch(
          `http://localhost:5000/api/services/${editingService._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(serviceData),
          }
        );
      } else {
        await fetch("http://localhost:5000/api/services", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(serviceData),
        });
      }

      fetchServices();
      setShowModal(false);
      setEditingService(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      await fetch(`http://localhost:5000/api/services/${id}`, {
        method: "DELETE",
      });

      fetchServices();
    } catch (error) {
      console.error(error);
    }
  };

  const editService = (service) => {
    setEditingService(service);
    setShowModal(true);
  };

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-admin">
      <div className="page-header">
        <div>
          <h1>Services</h1>
          <p>Manage all services.</p>
        </div>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search services..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            className="add-btn"
            onClick={() => {
              setEditingService(null);
              setShowModal(true);
            }}
          >
            + Add Service
          </button>
        </div>
      </div>

      <ServiceTable
        services={filteredServices}
        onEdit={editService}
        onDelete={deleteService}
      />

      {showModal && (
        <AddServiceModal
          onClose={() => {
            setShowModal(false);
            setEditingService(null);
          }}
          onSave={saveService}
          editingService={editingService}
        />
      )}
    </div>
  );
}

export default ServicesAdmin;