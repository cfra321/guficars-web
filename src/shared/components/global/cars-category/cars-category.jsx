import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useRef } from "react";
import "./cars-category.scss";

const CarsCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const cars = [
    {
      title: "Toyota Avanza",
      items: 12,
      img: "https://toyotanasmocomagelang.com/wp-content/uploads/2020/09/3-avanza-black-metallic.png",
    },
    {
      title: "Honda Brio",
      items: 8,
      img: "https://hondamuliacianjur.co.id/wp-content/uploads/2019/05/BRIO_3per4-Front-1.png",
    },
    {
      title: "Mitsubishi Xpander",
      items: 15,
      img: "https://icms.bumenredjaabadi.com/assets/cars/thumbnail/car-thumbnail-1661152765.png",
    },
    {
      title: "Suzuki Ertiga",
      items: 10,
      img: "https://rai.suzukipromo.co.id/wp-content/uploads/2020/08/30_06_2024-13.38.02.png",
    },
    {
      title: "Daihatsu Terios",
      items: 7,
      img: "https://www.daihatsulombok.com/wp-content/uploads/2024/03/terios.png",
    },
  ];

  return (
    <section className="cars-category">
      <div className="cars-category__container">
        <h2 className="cars-category__title">Kategori Mobil</h2>
        <p className="cars-category__subtitle">
          Pilih dari berbagai macam kategori mobil populer
        </p>

        <div className="cars-category__wrapper">
          {/* Tombol scroll */}
          <button
            className="cars-category__button cars-category__button--left"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft />
          </button>
          <button
            className="cars-category__button cars-category__button--right"
            onClick={() => scroll("right")}
          >
            <FaChevronRight />
          </button>

          {/* Konten scrollable */}
          <div ref={scrollRef} className="cars-category__scroll">
            {cars.map((car, idx) => (
              <div key={idx} className="cars-category__card">
                <img
                  src={car.img}
                  alt={car.title}
                  className="cars-category__image"
                />
                <h3 className="cars-category__card-title">{car.title}</h3>
                <p className="cars-category__card-items">
                  {car.items} tersedia
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsCategory;
