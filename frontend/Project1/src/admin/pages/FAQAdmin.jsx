import { useState ,useEffect } from "react";
import "../css/FAQAdmin.css";
import FAQTable from "../components/FAQTable";
import AddFAQModal from "../components/AddFAQModal";

function FAQAdmin() {
  const [faqs, setFaqs] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/faqs");
      const data = await response.json();
      setFaqs(data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  const saveFAQ = async (faq) => {
  try {
    const response = await fetch(
      editingFAQ
        ? `http://localhost:5000/api/faqs/${editingFAQ._id}`
        : "http://localhost:5000/api/faqs",
      {
        method: editingFAQ ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: faq.question,
          answer: faq.answer,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("API ERROR:", data);
      return;
    }

    fetchFAQs();

    setShowModal(false);

    setEditingFAQ(null);

  } catch (error) {
    console.log("Save FAQ Error:", error);
  }
};

  const editFAQ = (faq) => {
    setEditingFAQ(faq);
    setShowModal(true);
  };

  const deleteFAQ = async (id) => {
  if (!window.confirm("Delete this FAQ?")) return;

  try {
    await fetch(`http://localhost:5000/api/faqs/${id}`, {
      method: "DELETE",
    });

    fetchFAQs();
  } catch (error) {
    console.error(error);
  }
};

const filteredFAQs = faqs.filter((faq) =>
  (faq.question || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase()) ||
  (faq.answer || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);

  return (
    <div className="faq-admin">
      <div className="page-header">
        <div>
          <h1>FAQs</h1>
          <p>Manage frequently asked questions.</p>
        </div>

        <div className="header-actions">
          <input
            type="text"
            className="search-input"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            className="add-btn"
            onClick={() => {
              setEditingFAQ(null);
              setShowModal(true);
            }}
          >
            + Add FAQ
          </button>
        </div>
      </div>

      <FAQTable
        faqs={filteredFAQs}
        onEdit={editFAQ}
        onDelete={deleteFAQ}
      />

      {showModal && (
        <AddFAQModal
          onClose={() => {
            setShowModal(false);
            setEditingFAQ(null);
          }}
          onSave={saveFAQ}
          editingFAQ={editingFAQ}
        />
      )}
    </div>
  );
}

export default FAQAdmin;