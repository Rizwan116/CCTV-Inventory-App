import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Left side (empty for now) */}
        <div className="navbar-brand">CCTV Inventory</div>

        {/* Right side (logo and navigation links) */}
        <div className="d-flex ms-auto">
          {/* Logo */}
          {/* <div className="navbar-logo">
            <img src="https://your-logo-url.com/logo.png" alt="Logo" style={{ height: '40px' }} />
          </div> */}
          
          {/* Navigation Links */}
          <ul className="navbar-nav ms-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon/1">Coming Soon 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon/2">Coming Soon 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon/3">Coming Soon 3</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coming-soon/4">Coming Soon 4</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
