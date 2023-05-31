import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Locations from "./Components/Locations";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HeroPage />
      <About />
      <Banner />
      <Locations />
      <ContactForm /> */}
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App;
