import React from "react";
import "./global-footer.scss";

const GlobalFooter = () => (
  <footer className="global-footer">
    <div className="global-footer__container">
      <div className="global-footer__brand">
        <h2 className="global-footer__title">GufiCars</h2>
        <p className="global-footer__desc">
          Platform jual beli mobil terpercaya. Temukan mobil impian Anda dengan
          mudah, aman, dan cepat.
        </p>
      </div>
      <div className="global-footer__nav">
        <h4 className="global-footer__subtitle">Navigasi</h4>
        <ul className="global-footer__nav-list">
          <li>
            <a href="/cars" className="global-footer__nav-link">
              Daftar Mobil
            </a>
          </li>
          <li>
            <a href="/sell" className="global-footer__nav-link">
              Jual Mobil
            </a>
          </li>
          <li>
            <a href="/about" className="global-footer__nav-link">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="/contact" className="global-footer__nav-link">
              Kontak
            </a>
          </li>
        </ul>
      </div>
      <div className="global-footer__contact">
        <h4 className="global-footer__subtitle">Kontak</h4>
        <p>Email: info@guficars.com</p>
        <p>Telepon: 0812-3456-7890</p>
        <p>Alamat: Jl. Mobil Impian No. 123, Jakarta</p>
      </div>
      <div className="global-footer__social">
        <h4 className="global-footer__subtitle">Ikuti Kami</h4>
        <div>
          <a
            href="https://facebook.com/guficars"
            className="global-footer__social-link"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/guficars"
            className="global-footer__social-link"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/guficars"
            className="global-footer__social-link"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
    <div className="global-footer__copyright">
      &copy; {new Date().getFullYear()} GufiCars. All rights reserved.
    </div>
  </footer>
);

export default GlobalFooter;
