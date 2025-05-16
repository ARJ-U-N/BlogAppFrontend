import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const isLoggedIn = !!sessionStorage.getItem("token");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  // Function to determine if a link is active based on the current route
  const isActive = (path) => {
    if (path === "/viewall") {
      // For "View All", also consider /posts/:id as active
      return location.pathname === "/viewall" || location.pathname.startsWith("/posts");
    }
    return location.pathname === path;
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <a
                className={`nav-link ${isActive("/create") ? "active" : ""}`}
                href="/create"
              >
                Create
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${isActive("/viewall") ? "active" : ""}`}
                href="/viewall"
              >
                View All
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${isActive("/viewmypost") ? "active" : ""}`}
                href="/viewmypost"
              >
                profile
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={handleLogout}
                style={{ background: "none", border: "none", padding: 0 }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <a
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                href="/"
              >
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${isActive("/signup") ? "active" : ""}`}
                href="/signup"
              >
                Sign Up
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;