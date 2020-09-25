import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar bg-dark">
    <h1>
      <Link Link to="/">
        <i className="fas fa-code"></i> DBS Onboarding
      </Link>
    </h1>
    <ul>
      {true ? (
        <li>
          <Link Link to="./login">
            Login
          </Link>
        </li>
      ) : (
        <li>
          <Link Link to="./login">
            Logout
          </Link>
        </li>
      )}
    </ul>
  </nav>
);

export default Navbar;
