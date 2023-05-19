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
      <button className="arrow left-arrow">Left arrow</button>
      <button className="arrow right-arrow">Right arrow</button>
      <button className="pause-button">Pause Button</button>
    </section>
  );
};

export default HeroPage;
