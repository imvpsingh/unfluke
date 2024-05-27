import React, { useState } from "react";
import "./App.css";
import Leaderboard from "./Leaderboard";
import Tabs from "./Tabs";
import AppBar from "./appbar";

function App() {
  const [selectedTab, setSelectedTab] = useState("LeaderBoard");

  return (
    <div className="App">
      <AppBar />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div
        className={`content ${selectedTab === "LeaderBoard" ? "selected" : ""}`}
      >
        {selectedTab === "LeaderBoard" ? (
          <Leaderboard />
        ) : (
          <div className="othore">Data Not Available in {selectedTab}</div>
        )}
      </div>
    </div>
  );
}

export default App;
