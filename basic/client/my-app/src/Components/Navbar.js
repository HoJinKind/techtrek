import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const show = localStorage.getItem("expiresIn") ? true : false;
  console.log(localStorage.getItem("expiresIn"));
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link Link to="/">
          <i className="fas fa-code"></i> DBS Onboarding
        </Link>
      </h1>
      <ul>
        <li>
          <Link Link to="./forms">
            Forms
          </Link>
        </li>
        {show ? (
          <li>
            <Link Link to="./login">
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link Link to="./login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
