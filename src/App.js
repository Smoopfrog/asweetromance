import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage/AboutPage";
import HomePage from "./Components/HomePage/HomePage";
import AdminPageLogin from "./Components/AdminPage/AdminPageLogin";
import AdminPage from "./Components/AdminPage/AdminPage";
import ErrorPage from "./Components/ErrorPage";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPageLogin />} />
        <Route path="/admin/home" element={<AdminPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
