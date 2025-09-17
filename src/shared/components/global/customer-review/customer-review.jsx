import React from "react";
import "./customer-review.scss";

const testimonials = [
  {
    name: "Budi Santoso",
    comment:
      "Proses beli mobil di GufiCars sangat mudah dan transparan. Mobil saya langsung dapat dalam 3 hari!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Siti Aminah",
    comment:
      "Pelayanan sangat ramah dan profesional. Saya bisa menjual mobil lama dan langsung upgrade ke mobil baru.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Agus Salim",
    comment:
      "Harga bersaing dan banyak pilihan mobil bekas berkualitas. Sangat puas dengan pembelian di sini!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const CustomerReview = () => {
  return (
    <section className="customer-review">
      <div className="customer-review__container">
        <h2 className="customer-review__title">Apa Kata Mereka</h2>
        <p className="customer-review__subtitle">
          Beberapa ulasan dari pelanggan setia GufiCars.
        </p>

        <div className="customer-review__grid">
          {testimonials.map((review, index) => (
            <div key={index} className="customer-review__card">
              <img
                src={review.image}
                alt={review.name}
                className="customer-review__avatar"
              />
              <p className="customer-review__comment">"{review.comment}"</p>
              <h4 className="customer-review__name">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
