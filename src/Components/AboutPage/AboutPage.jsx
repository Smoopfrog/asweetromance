import "../../Styles/AboutPage.css";
import couplePic from "../../Assets/cuties.jpg";

const AboutPage = () => {
  return (
    <section className="about-page">
      <article className="about-page-article">
        <img className="about-page-img" src={couplePic} alt="a bunch of cuties" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          veniam nam reiciendis architecto dolorem voluptatem quo sint facere
          natus voluptates esse cum, dignissimos quidem enim omnis adipisci nemo
          cupiditate quibusdam.
        </p>
      </article>
      <article className="about-page-article">
        <img className="about-page-img" src={couplePic} alt="a bunch of cuties" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          veniam nam reiciendis architecto dolorem voluptatem quo sint facere
          natus voluptates esse cum, dignissimos quidem enim omnis adipisci nemo
          cupiditate quibusdam.
        </p>
      </article>
      <button className="about-page-btn">Contact Us</button>
    </section>
  );
};

export default AboutPage;
