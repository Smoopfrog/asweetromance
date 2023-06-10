import "../Styles/AdminPage.css"

const AdminPage = () => {
  return (
    <section className="admin-page">
      <h1>Admin Login</h1>
      <input placeholder="Username" />
      <input placeholder="password" type="password" />
      <button>Log In</button>
    </section>
  );
};

export default AdminPage;
