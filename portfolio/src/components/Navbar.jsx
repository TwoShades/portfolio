import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="pixel-navbar">
      <div className="logo">👾 Samuel</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="nav-item">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
