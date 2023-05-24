import "../Styles/HeroPage.css";
import cake from "../Assets/cake.jpg";
import macarons from "../Assets/macarons.jpg";
import pie from "../Assets/pie.jpg";
import cupcakes from "../Assets/cupcakes.jpg";
import { useState } from "react";

const backgrounds = [
  { img: cake, alt: "Delicious looking, colorful birthday cake" },
  { img: macarons, alt: "A collection of multicolored macarons" },
  { img: pie, alt: "A rustic looking pie" },
  {
    img: cupcakes,
    alt: "An assortment of cupcakes",
  },
];

const HeroPage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextIndex = () => {
    if (carouselIndex === backgrounds.length - 1) {
      setCarouselIndex(0);
      return;
    }

    setCarouselIndex(carouselIndex + 1);
  };

  const prevIndex = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(backgrounds.length - 1);
      return;
    }

    setCarouselIndex(carouselIndex - 1);
  };

  return (
    <section className="hero-page">
      {backgrounds.map((background, index) => {
        return (
          <img
            className={
              index === carouselIndex ? "hero-page-img show" : "hero-page-img"
            }
            src={background.img}
            alt={background.alt}
            key={index}
          />
        );
      })}
      <button onClick={prevIndex} className="hero-page-btn left-arrow">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="back-arrow"
          className="hero-page-btn-svg"
        >
          <g data-name="Layer 2">
            <path
              d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
              data-name="arrow-ios-back"
            ></path>
          </g>
        </svg> */}
      </button>
      <button onClick={nextIndex} className="hero-page-btn right-arrow">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="forward-arrow"
          className="hero-page-btn-svg"
        >
          <g data-name="Layer 2">
            <path
              d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
              data-name="arrow-ios-forward"
            ></path>
          </g>
        </svg> */}
      </button>
      {/* <button className="hero-page-btn pause-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hero-page-btn-svg"
          fill="none"
          id="pause"
        >
          <path d="M8 5a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2z"></path>
        </svg>
      </button> */}
      <div className="carousel-btns">
        {backgrounds.map((background, index) => {
          return (
            <svg
              className={
                index === carouselIndex ? "circle carousel-selected" : "circle grey"
              }
              key={index}
              onClick={() => setCarouselIndex(index)}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          );
        })}
      </div>
    </section>
  );
};

export default HeroPage;
