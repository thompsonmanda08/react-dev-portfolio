import React from "react";
import Header from "./components/header-component/Header";
import Nav from "./components/nav-component/Nav";
import About from "./components/about-component/About";
import Experience from "./components/experience-component/Experience";
import Services from "./components/services-component/Services";
import Portfolio from "./components/portfolio-component/Portfolio";
import Testimonials from "./components/testimonials-component/Testimonials";
import Contact from "./components/contact-component/Contact";
import Footer from "./components/footer-component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
