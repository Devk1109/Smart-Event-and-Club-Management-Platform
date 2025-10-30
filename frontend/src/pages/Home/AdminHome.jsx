// src/components/home/AdminHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  const goToAdminPanel = () => navigate("/admin_dashboard");

  return (
    <div className="home-button-container">
      <h2>🧭 Admin Dashboard</h2>

      <button className="home-btn admin-btn" onClick={goToAdminPanel}>
        ⚙️ Go to Admin Panel
      </button>
    </div>
  );
};

export default AdminHome;
