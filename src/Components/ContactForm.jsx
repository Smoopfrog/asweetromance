import "../Styles/ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <h1>Contact Us!</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Message" />
      <div>email something blah blah blah blah</div>
      <button>Send</button>
    </form>
  );
};

export default ContactForm;
