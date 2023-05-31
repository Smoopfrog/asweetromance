import { Link } from "react-router-dom";
import "../Styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <h1 className="error-page-title">404 Page Not Found</h1>
      <Link className="error-page-text" to="/">
        The page you requested does not exist. Click here to continue shopping.
      </Link>
    </section>
  );
};

export default ErrorPage;
