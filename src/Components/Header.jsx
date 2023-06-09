import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileView(true);
    }
  }, []);

  const toggleNav = () => {
    setShowAside(!showAside);
  };

  return (
    <header className="header">
      <Link
        className="nav-link header-title"
        to="/"
        onClick={() => {
          setShowAside(false);
        }}
      >
        A Sweet Romance
      </Link>
      {mobileView ? (
        <button onClick={toggleNav} className="header-menu-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="menu-bar"
            className="header-menu-icon"
          >
            <rect width="24" height="24" fill="none"></rect>
            <path
              d="M18.2,12.7H5.8C5.3,12.7,5,12.4,5,12s0.3-0.7,0.7-0.7h12.5c0.4,0,0.7,0.3,0.7,0.7S18.7,12.7,18.2,12.7z M19,7.8
		C19,7.3,18.7,7,18.3,7H5.8C5.3,7,5,7.4,5,7.8s0.3,0.7,0.7,0.7h12.5C18.7,8.5,19,8.2,19,7.8z M19,16.2c0-0.4-0.3-0.7-0.7-0.7H5.8
		c-0.4,0-0.7,0.3-0.7,0.7C5,16.6,5.4,17,5.8,17h12.5C18.7,17,19,16.7,19,16.2z"
            ></path>
          </svg>
        </button>
      ) : (
        <nav>
          <ul className="nav-list">
            <li>
              <Link
                className="nav-link"
                to="/about"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                Something
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                Something
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {mobileView && (
        <aside
          className={`header-links ${showAside ? "show-nav" : "hide-nav"}`}
        >
          <ul className="nav-list">
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/about"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                Something
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  setShowAside(false);
                }}
              >
                Something
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Header;
