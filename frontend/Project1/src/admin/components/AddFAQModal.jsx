import { useState, useEffect } from "react";
import "../css/AddFAQModal.css";

function AddFAQModal({
  onClose,
  onSave,
  editingFAQ,
}) {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    if (editingFAQ) {
      setFormData(editingFAQ);
    } else {
      setFormData({
        question: "",
        answer: "",
      });
    }
  }, [editingFAQ]);

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
            {editingFAQ ? "Edit FAQ" : "Add New FAQ"}
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
            <label>Question</label>

            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Answer</label>

            <textarea
              rows="4"
              name="answer"
              value={formData.answer}
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
              {editingFAQ ? "Save Changes" : "Save FAQ"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFAQModal;