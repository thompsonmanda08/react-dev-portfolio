import React from "react";
import "./footer.css";
// ICONS IMPORT
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <div className="container footer__container">
          <div className="logo__img"> WEBB-GRAPHICS</div>
          <div className="footer__socials">
            <a href="https://linkedin.com/in/thompsonmanda08" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/thompsonmanda08" target="_blank">
              <FaGithub />
            </a>
            <a href="https://facebook.com/thompsonmanda08" target="_blank">
              <FaFacebook />
            </a>
          </div>
          <div className="footer__credits">
            <address>Developed by: Eng. Thompson Manda</address>
            <address>React Course &copy; 2022</address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
