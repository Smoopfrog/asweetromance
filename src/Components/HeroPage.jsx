import "../Styles/HeroPage.css";
import cake from "../Assets/cake.jpg";

const HeroPage = () => {
  return (
    <section className="hero-page">
      <img
        className="hero-page-img"
        src={cake}
        alt="Delicious looking, colorful birthday cake"
      />
      <button className="hero-page-btn left-arrow">
        <svg
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
        </svg>
      </button>
      <button className="hero-page-btn right-arrow">
        <svg
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
        </svg>
      </button>
      <button className="hero-page-btn pause-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="pause"
          className="hero-page-btn-svg"
        >
          <g data-name="Layer 2">
            <g data-name="pause-circle">
              <rect width="24" height="24" opacity="0"></rect>
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
              <path d="M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zM9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"></path>
            </g>
          </g>
        </svg>
      </button>
    </section>
  );
};

export default HeroPage;
