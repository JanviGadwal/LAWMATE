import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Welcome, {user?.name}</h1>
        <p>This is your LawMate dashboard</p>
      </div>
    </>
  );
};

export default Dashboard;