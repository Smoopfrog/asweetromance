import "../AboutPage/AboutPage";
import couplePic from "../../Assets/cuties.jpg";

const AboutPage = () => {
  return (
    <section className="about-page">
      <article>
        <img src={couplePic} alt="a bunch of cuties" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          veniam nam reiciendis architecto dolorem voluptatem quo sint facere
          natus voluptates esse cum, dignissimos quidem enim omnis adipisci nemo
          cupiditate quibusdam.
        </p>
      </article>
      <article>
        <img src={couplePic} alt="a bunch of cuties" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          veniam nam reiciendis architecto dolorem voluptatem quo sint facere
          natus voluptates esse cum, dignissimos quidem enim omnis adipisci nemo
          cupiditate quibusdam.
        </p>
      </article>
    </section>
  );
};

export default AboutPage;
