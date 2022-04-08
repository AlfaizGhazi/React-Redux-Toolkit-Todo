import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { darkModeToggle } from "../../app/slices/darkModeSlice";

export const Navbar = (props) => {
  const { isDarkMode } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <nav
        className={
          isDarkMode
            ? "navbar navbar-expand-lg navbar-light bg-secondary"
            : "navbar navbar-expand-lg navbar-dark bg-dark"
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React Redux-Toolkit
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">
                  Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/apitesting">
                  API-Testing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workout">
                  Workout
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => dispatch(darkModeToggle())}
                />
                <label
                  className={
                    isDarkMode
                      ? "form-check-label text-dark"
                      : "form-check-label text-light"
                  }
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
