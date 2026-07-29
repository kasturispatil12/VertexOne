import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaMicrochip,
  FaTools,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";

import "../../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        <h2>VertexOne</h2>
        <p>Admin Panel</p>
      </div>

      <nav>

        <NavLink to="/admin/dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/components">
          <FaMicrochip />
          <span>Components</span>
        </NavLink>

        <NavLink to="/admin/services">
          <FaTools />
          <span>Services</span>
        </NavLink>

        <NavLink to="/admin/faqs">
          <FaQuestionCircle />
          <span>FAQs</span>
        </NavLink>

        

      </nav>

    </div>
  );
}

export default Sidebar;