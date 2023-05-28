import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">A Sweet Romance</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <a
              className="nav-link"
              href="https://github.com/Smoopfrog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://github.com/Smoopfrog"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
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
