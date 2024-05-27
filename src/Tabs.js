import React from "react";
import "./Tabs.css";

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    "LeaderBoard",
    "Historical Trading",
    "Historical Chart",
    "Scanners",
    "Alerts",
    "Basic Backtest",
    "Advanced Backtest",
    "Pricing",
    "My Earnings",
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${selectedTab === tab ? "selected" : ""}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
