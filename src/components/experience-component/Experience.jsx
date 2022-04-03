import React from "react";
import "./experience.css";

// REACT ICONS
import { GoVerified } from "react-icons/go";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Core skills in</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontendDevelopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>Python (Django)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>JavaScript (Node)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>Dart</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
