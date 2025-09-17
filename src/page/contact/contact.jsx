import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>Kontak Kami</h1>
        <p>Hubungi kami untuk pertanyaan, saran, atau kerjasama.</p>
      </header>
      <section>
        <form className="contact-page__form">
          <div>
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Pesan</label>
            <textarea id="message" name="message" rows={4} required />
          </div>
          <button type="submit">Kirim Pesan</button>
        </form>
        <div className="contact-page__info">
          <h2>Info Kontak</h2>
          <p>Email: info@guficars.com</p>
          <p>Telepon: 0812-3456-7890</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
