
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-form">
        <img src="../../assets/girl.png" alt="girl" className="girl-img" />
        <div>
          <h3>Get in touch</h3>
          <p>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
          <div>
            <img src={"assets/Email.svg"}/>
            1-514-456-2753
          </div>
          <div>
            <img src={"assets/Email.svg"}/>
            Sou12@gmail.com
          </div>
        </div>
        <form>
          <h2>Send me a message</h2>
          <div>
            <input type="text" placeholder='Name' id="name" name="name" />
          </div>
          <div>
            <input type="email" placeholder='Email Adress' id="email" name="email" />
          </div>
          <div>
            <input type="text" placeholder='Subject' id="email" name="email" />
          </div>
          <div>
            <textarea id="message" placeholder='Your message' name="message" />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;