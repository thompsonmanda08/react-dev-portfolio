import React from "react";
import "./header.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/thompsonmanda08"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/thompsonmanda08"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://facebook.com/thompsonmanda08"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
