import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>A Sweet Romance</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Something
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
