import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import "../css/Admin.css";

function Admin() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">
        <Topbar />

        <div className="admin-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default Admin;