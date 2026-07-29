import StatCard from "../components/layout/StatCard";
import RecentActivity from "../components/layout/RecentActivity";
import "../css/Dashboard.css";
import { FaMicrochip, FaTools, FaUsers,FaQuestionCircle,} from "react-icons/fa";
import { useEffect, useState } from "react";

function Dashboard() {

  const [stats, setStats] = useState({
    totalComponents: 0,
    totalFAQs: 0,
    totalServices: 0,
    totalUsers: 0,
  });


  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/dashboard"
        );
        const data = await response.json();
        setStats(data);
        setActivities(data.activities);
      } catch (error) {
        console.log("Dashboard Fetch Error:", error);
      }
    };
    fetchDashboardStats();
  }, []);

  const [activities, setActivities] = useState([]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <StatCard
          title="Components"
          value={stats.totalComponents}
          icon={<FaMicrochip />}
        />
        <StatCard
          title="Services"
          value={stats.totalServices}
          icon={<FaTools />}
        />
        <StatCard
          title="FAQs"
          value={stats.totalFAQs}
          icon={<FaQuestionCircle />}
        />
        <StatCard
          title="Users"
          value={stats.totalUsers}
          icon={<FaUsers />}
        />
      </div>
      <RecentActivity activities={activities}/>
    </div>
  );
}
export default Dashboard;