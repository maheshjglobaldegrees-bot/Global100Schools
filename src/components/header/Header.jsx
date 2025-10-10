import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
  return (
    <div className="container-fluid sticky">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        
      <div className="container">
        {/* Brand/Logo */}
        <Link className="navbar-brand fw-bold text-danger fs-1 shadow-danger" to="/">
          Global100Schools
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

            {/* Dropdown for Destinations */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="destinationsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destinations
              </Link>
              <ul className="dropdown-menu" aria-labelledby="destinationsDropdown">
                <li>
                  <Link className="dropdown-item" to="/destinations/usa">
                    Study in USA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/uk">
                    Study in UK
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/australia">
                    Study in Australia
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/canada">
                    Study in Canada
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/singapore">
                    Study in Singapore
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/process">
                Process
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  );
};

export default Header;
