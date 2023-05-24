import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <About />
      <Banner />
      <Locations />
    </div>
  );
}

export default App;
