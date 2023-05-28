import "../Styles/About.css";
import ContactForm from "./ContactForm";

const About = () => {
  return (
    <div>
      <section className="about">
        <h1 className="about-title">Our Sweet Romance</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          facilis voluptatibus possimus aperiam corporis dicta iste, recusandae
          repellendus dolor ipsum obcaecati ad excepturi quas? Nisi dignissimos
          doloribus adipisci commodi veniam.
        </p>
        <button className="about-btn">Learn More</button>
      </section>
      <ContactForm />
    </div>
  );
};

export default About;
