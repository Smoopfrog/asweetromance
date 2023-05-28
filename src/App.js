import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Locations from "./Components/Locations";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <About />
      <Banner />
      <Locations />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
