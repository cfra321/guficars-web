import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import CustomerReview from "../../shared/components/global/customer-review";
import CarsCategory from "../../shared/components/global/cars-category";
import OurPartners from "../../shared/components/global/partner-guficars";

const DashboardHome = () => {
  return (
    <div
      className="dashboard-home"
      style={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}
    >
      <main style={{ flex: 1, padding: "40px 20px", textAlign: "center" }}>
        <h1 className="dashboard-home__title">
          Selamat Datang di{" "}
          <span style={{ color: "rgb(26 109 197)" }}>GufiCars</span>{" "}
          <ReactTyped
            strings={[
              " Temukan Mobil Anda",
              " Jual Beli Mobil ",
              " Jadi Lebih Mudah",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </h1>
        <p>Kelola mobil, pesanan, dan data Anda dengan mudah di satu tempat.</p>
        <div style={{ marginTop: "30px", marginBottom: "300px" }}>
          <button
            style={{
              padding: "10px 24px",
              fontSize: "16px",
              background: "#FFD700",
              color: "#222",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <Link
              to="/sell"
              className="global-navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Lihat Daftar Mobil
            </Link>
          </button>
        </div>
        <CarsCategory />
        <CustomerReview />
        <OurPartners />
      </main>
    </div>
  );
};

export default DashboardHome;
