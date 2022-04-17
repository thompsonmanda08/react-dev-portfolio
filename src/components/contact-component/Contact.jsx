import React from "react";
import "./contact.css";
//ICONS
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";

//FORM EMAIL.JS
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bdf3edx", // SERVICE ID
        "template_x1gxhmv", //TEMPLATE ID
        form.current,
        "IF1xwZIhkaCzzr8xc" // USER ID (FROM INTEGRATION API)
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article key={1} className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thompsonmanda08@gmail.com</h5>
            <a href="mailto:thompsonmanda08@outlook.com">Send a Message</a>
          </article>
          <article key={2} className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+90 535 959 8057</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+905359598057"
              target="_blank"
              rel="noreferrer"
            >
              Send a text
            </a>
          </article>
          <article key={3} className="contact__option">
            <MdMyLocation className="contact__option-icon" />
            <h4>Address</h4>
            <h5>55 Ndola Road</h5>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              Mufulira, Zambia
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form rel={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
