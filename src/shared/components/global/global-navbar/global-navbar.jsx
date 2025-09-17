import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./global-navbar.scss";

const GlobalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="global-navbar">
      <div className="global-navbar__container">
        {/* Brand / Logo */}
        <div className="global-navbar__brand">
          <Link to="/" className="global-navbar__logo">
            GufiCars
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="global-navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <ul className={`global-navbar__menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              className="global-navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sell"
              className="global-navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Jual Mobil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="global-navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="global-navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="global-navbar__cta">
          <Link to="/sell" className="global-navbar__button">
            Jual Mobil Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNavbar;
