import About from "./About";
import Banner from "./Banner";
import HeroPage from "./HeroPage";
import Locations from "./Locations";
import ContactForm from "./ContactForm";
import ProductBanner from "./ProductBanner";

const HomePage = () => {
  return (
    <>
      <HeroPage />
      <About />
      <ProductBanner />
      <Locations />
      <Banner />
      <ContactForm />
    </>
  );
};

export default HomePage;
