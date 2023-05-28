import "../Styles/ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <h1 className="contact-title">Contact Us!</h1>
      <input className="contact-input" type="text" placeholder="Name" />
      <input className="contact-input" type="email" placeholder="Email" />
      <textarea className="contact-input contact-input-msg" type="text" placeholder="Message" />
      <div className="contact-captcha-msg">email something blah blah blah blah</div>
      <button className="contact-btn">Send</button>
    </form>
  );
};

export default ContactForm;
