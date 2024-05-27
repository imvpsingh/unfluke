import React from "react";
import "./AppBar.css";
import websiteLogo from "./logo.png";
import notificationIcon from "./notification.png";
import coinIcon from "./dollar.png";
import profileIcon from "./user.png";
<link
  href="https://fonts.googleapis.com/css?family=Bungee+Inline"
  rel="stylesheet"
></link>;

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="logo">
        <img src={websiteLogo} alt="Website Logo" />
      </div>
      <div className="icons">
        <div className="icon">
          <img src={notificationIcon} alt="Notification" />
        </div>
        <div className="icon">
          <img src={coinIcon} alt="Coin" />
        </div>
        <div className="icon">
          <img src={profileIcon} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
