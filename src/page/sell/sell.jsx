import React from "react";
import "./sell.scss";

const carsData = [
  {
    id: 1,
    name: "Toyota Avanza",
    price: "Rp 200.000.000",
    year: 2020,
    image:
      "https://toyotanasmocomagelang.com/wp-content/uploads/2020/09/3-avanza-black-metallic.png",
  },
  {
    id: 2,
    name: "Honda Brio",
    price: "Rp 160.000.000",
    year: 2019,
    image:
      "https://hondamuliacianjur.co.id/wp-content/uploads/2019/05/BRIO_3per4-Front-1.png",
  },
  {
    id: 3,
    name: "Mitsubishi Xpander",
    price: "Rp 250.000.000",
    year: 2021,
    image:
      "https://icms.bumenredjaabadi.com/assets/cars/thumbnail/car-thumbnail-1661152765.png",
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    price: "Rp 550.000.000",
    year: 2022,
    image:
      "https://astradigitaldigiroomuat.blob.core.windows.net/storage-uat-001/fitur-keselamatan-toyota-fortuner.png",
  },
  {
    id: 5,
    name: "Honda Civic",
    price: "Rp 520.000.000",
    year: 2021,
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Honda-Civic-EG-Hatch-Transparent-File.png",
  },
  {
    id: 6,
    name: "Suzuki Ertiga",
    price: "Rp 230.000.000",
    year: 2020,
    image:
      "https://rai.suzukipromo.co.id/wp-content/uploads/2020/08/30_06_2024-13.38.02.png",
  },
  {
    id: 7,
    name: "Daihatsu Terios",
    price: "Rp 280.000.000",
    year: 2021,
    image:
      "https://www.daihatsulombok.com/wp-content/uploads/2024/03/terios.png",
  },
  {
    id: 8,
    name: "Hyundai Creta",
    price: "Rp 350.000.000",
    year: 2022,
    image: "https://hyundaigubengsby.com/wp-content/uploads/2024/10/creta.png",
  },
  {
    id: 9,
    name: "Mazda CX-5",
    price: "Rp 600.000.000",
    year: 2021,
    image:
      "https://di-sitebuilder-assets.dealerinspire.com/Mazda/model-pages/2024/CX-5/Trims/2024_cx5_2_5_Turbo_PremiumPlus_SoulRedCrystal_Car_0000.png",
  },
  {
    id: 10,
    name: "Pajero Sport",
    price: "Rp 420.000.000",
    year: 2019,
    image:
      "https://mitsubishi-batam.com/wp-content/uploads/2024/01/1627575510-pajero-4x4-blackpng-1.png",
  },
];

const Sell = () => {
  return (
    <div className="cars-page">
      <header className="cars-page__header">
        <h1>
          <b>Daftar Katalog Mobil GufiCars</b>
        </h1>
        <p>Temukan mobil impian Anda di sini</p>
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

export default Sell;
