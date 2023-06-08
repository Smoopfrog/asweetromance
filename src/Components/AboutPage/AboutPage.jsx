import "../../Styles/AboutPage.css";
import couplePic from "../../Assets/cuties.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="about-page">
      <img className="about-page-img" src={couplePic} alt="a bunch of cuties" />
      <div className="about-page-text">
        <h2 className="about-page-text-title">Our Sweet Romance</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          veniam nam reiciendis architecto dolorem voluptatem quo sint facere
          natus voluptates esse cum, dignissimos quidem enim omnis adipisci nemo
          cupiditate quibusdam. Dignissimos quidem enim omnis adipisci nemo
          cupiditate quibusdam.
        </p>
      </div>
      <Link className="about-page-btn" to="/Contact">
        Contact Us
      </Link>
    </section>
  );
};

export default AboutPage;
