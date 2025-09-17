import React from "react";
import "./cars.scss";

const carsData = [
  {
    id: 1,
    name: "Toyota Avanza",
    price: "Rp 200.000.000",
    year: 2020,
    image: "https://via.placeholder.com/300x200?text=Toyota+Avanza",
  },
  {
    id: 2,
    name: "Honda Brio",
    price: "Rp 160.000.000",
    year: 2019,
    image: "https://via.placeholder.com/300x200?text=Honda+Brio",
  },
  {
    id: 3,
    name: "Mitsubishi Xpander",
    price: "Rp 250.000.000",
    year: 2021,
    image: "https://via.placeholder.com/300x200?text=Mitsubishi+Xpander",
  },
];

const Cars = () => {
  return (
    <div className="cars-page">
      <header className="cars-page__header">
        <h1>Daftar Mobil</h1>
        <p>Temukan mobil impian Anda di GufiCars</p>
      </header>

      <div className="cars-page__list">
        {carsData.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-card__image" />
            <div className="car-card__body">
              <h3 className="car-card__title">{car.name}</h3>
              <p className="car-card__year">Tahun: {car.year}</p>
              <p className="car-card__price">{car.price}</p>
              <button className="car-card__button">Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
