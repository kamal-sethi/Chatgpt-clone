import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Homepage;
