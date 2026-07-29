import "../css/FAQAdmin.css";

function FAQTable({ faqs, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table className="faq-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {faqs.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No FAQs Found
              </td>
            </tr>
          ) : (
            faqs.map((faq) => (
              <tr key={faq._id}>
                <td>{faq.question}</td>

                <td>{faq.answer}</td>

                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(faq)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(faq._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FAQTable;