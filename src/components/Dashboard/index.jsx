import React from "react";
import Blinds from "../Blinds";
import "./style.css";

const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Blinds state={data.blinds} />
    
    </main>
  );
};

export default Dashboard;
