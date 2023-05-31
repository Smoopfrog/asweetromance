import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link className="nav-link" to="/">
        A Sweet Romance
      </Link>
      <nav>
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://github.com/Smoopfrog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Locations
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://github.com/Smoopfrog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Something
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
