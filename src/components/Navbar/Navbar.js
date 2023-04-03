import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/amazon.PNG";
const Navbar = () => {
  return (
    <div className="main-nav">
      <div className="nav-header">
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div className="menu-link">
        <ul>
          <li className="content">
            <Link to="/">Home</Link>
          </li>
          <li className="content">
            <Link to="View">View</Link>
          </li>
          <li className="content">
            <Link to="Edit">Edit</Link>
          </li>
          <li className="content">
            <Link to="Undefined">Undefined</Link>
          </li>
        </ul>
      </div>
      <div className="login-button">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
