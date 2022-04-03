import React from "react";
import "./portfolio.css";

// IMAGES
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolio_data = [
  {
    id: 1,
    image: IMG1,
    title: "My Project 1",
    github: "https://github.com/thompsonmanda08",
    demo: "https://inter-webb.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Project 2",
    github: "https://github.com/thompsonmanda08",
    demo: "https://inter-webb.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "My Project 3",
    github: "https://github.com/thompsonmanda08",
    demo: "https://inter-webb.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "My Project 4",
    github: "https://github.com/thompsonmanda08",
    demo: "https://inter-webb.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "My Project 5",
    github: "https://github.com/thompsonmanda08",
    demo: "https://inter-webb.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "My Project 6",
    github: "https://github.com/thompsonmanda08",
    demo: "https://inter-webb.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolio_data.map((portfolioItem) => {
          return (
            <article className="portfolio__item" key={portfolioItem.id}>
              <div className="portfolio__item-image">
                <img src={portfolioItem.image} alt="" />
              </div>
              <h3>{portfolioItem.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={portfolioItem.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={portfolioItem.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
