import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Email: <a href="mailto:yashschandra@gmail.com">yashschandra@gmail.com</a></p>
          <p>Phone: <a href="tel:+918109607875">+91 8109607875</a></p>
          <p><a href="https://medium.com/@yashschandra" target="_blank" rel="noreferrer">Read my writing on Medium</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
