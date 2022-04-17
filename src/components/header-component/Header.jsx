import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";
import myImage from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tutu Simz</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />

        <div className="my__image">
          <img src={myImage} alt="Tutu" />
        </div>
        <a className="scroll__down" href="#contact">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
