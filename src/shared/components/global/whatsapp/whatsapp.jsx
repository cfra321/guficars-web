import React, { useState } from "react";
import "./WhatsAppButton.scss"; // SCSS

const WhatsAppButton = () => {
  const phoneNumber = "6281290723221";
  const chatOptions = [
    "Halo Admin GufiCars, saya ingin bertanya lebih lanjut mengenai mobil yang tersedia.",
    "Halo, saya tertarik dengan salah satu mobil di GufiCars. Bisa minta detail spesifikasi dan harganya?",
    "Halo, saya ingin menjual mobil saya melalui GufiCars. Bisa bantu jelaskan prosesnya?",
    "Halo, saya ingin menanyakan layanan dan promo terbaru di GufiCars.",
  ];

  const [showOptions, setShowOptions] = useState(false);

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="whatsapp-button">
      {/* Tombol utama */}
      <button
        className="whatsapp-button__main"
        onClick={() => setShowOptions(!showOptions)}
      >
        <img
          src="https://img.icons8.com/color/512/whatsapp.png"
          alt="Chat via WhatsApp"
          className="whatsapp-icon"
        />
      </button>
      <span className="whatsapp-label">Chat via WhatsApp</span>

      {/* Dropdown opsi chat */}
      {showOptions && (
        <div className="whatsapp-options">
          {chatOptions.map((msg, idx) => (
            <button
              key={idx}
              className="whatsapp-option"
              onClick={() => openWhatsApp(msg)}
            >
              {msg}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
