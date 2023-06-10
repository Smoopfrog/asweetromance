import "../Styles/AdminPage.css";

const AdminPage = () => {
  return (
    <section className="admin-page">
      <form className="admin-login-form">
        <h1 className="admin-login-title">Admin Login</h1>
        <input className="admin-input" placeholder="Username" />
        <input className="admin-input" placeholder="password" type="password" />
        <button className="admin-page-btn">Log In</button>
      </form>
    </section>
  );
};

export default AdminPage;
