import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage/AboutPage";
import HomePage from "./Components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./Components/ContactPage/ContactPage";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
