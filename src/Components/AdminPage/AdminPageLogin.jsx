import "../../Styles/AdminPage.css";
import { useNavigate } from "react-router-dom";

const AdminPageLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/admin/home");
  };

  return (
    <form className="admin-login-form">
      <h1 className="admin-login-title">Admin Login</h1>
      <input className="admin-input" placeholder="Username" />
      <input className="admin-input" placeholder="password" type="password" />
      <button className="admin-page-btn" onClick={handleLogin}>
        Log In
      </button>
    </form>
  );
};

export default AdminPageLogin;
