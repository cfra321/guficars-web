import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div
      className="about-page"
      style={{ minHeight: "80vh", padding: "40px 20px", background: "#f9f9f9" }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#222" }}>Tentang GufiCars</h1>
        <p style={{ color: "#555" }}>
          GufiCars adalah platform jual beli mobil terpercaya di Indonesia. Kami
          membantu Anda menemukan mobil impian dengan mudah, aman, dan cepat.
        </p>
      </header>
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.07)",
          padding: "30px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#007bff" }}>Visi</h2>
        <p>
          Membantu masyarakat Indonesia mendapatkan mobil terbaik dengan proses
          yang transparan dan nyaman.
        </p>
        <h2 style={{ textAlign: "center", color: "#007bff" }}>Misi</h2>
        <ul>
          <li>Menyediakan informasi mobil terlengkap dan terbaru.</li>
          <li>Memberikan layanan konsultasi dan transaksi yang aman.</li>
          <li>Mendukung penjual dan pembeli dengan teknologi modern.</li>
        </ul>
        <h2 style={{ color: "#007bff" }}>Kontak Kami</h2>
        <p>Email: info@guficars.com</p>
        <p>Telepon: 0812-3456-7890</p>
      </section>
    </div>
  );
};

export default About;
