import React from "react";
import { Link } from "react-router-dom";

// Assets
import logo from "../assets/logo.svg";

const SidebarLayout = ({ children }) => {
  return (
    <div className="app">
      <div className="sidebar">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default SidebarLayout;
