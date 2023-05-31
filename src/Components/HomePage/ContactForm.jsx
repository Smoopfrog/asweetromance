import { useState } from "react";
import "../../Styles/ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    const emailContent = {
      name,
      email,
      message,
    };

    console.log("emailContent", emailContent);
  };

  return (
    <form className="contact-form">
      <h1 className="contact-title">Contact Us</h1>
      <input
        className="contact-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="contact-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        className="contact-input contact-input-msg"
        type="text"
        placeholder="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="contact-captcha-msg">
        email something blah blah blah blah
      </div>
      <button onClick={sendEmail} className="contact-btn">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
