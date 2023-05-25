import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Locations from "./Components/Locations";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <About />
      <Banner />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
