import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../css/Topbar.css";

function Topbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="topbar-right">
        <div className="admin-profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>{user?.name || "Admin"}</h4>
            <p>{user?.role || "Administrator"}</p>
          </div>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;