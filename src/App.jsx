import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Gallery from "./components/gallery/Gallery";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Cursor className="cursor" />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section id="Services">
        <Services />
      </section>

      <div id="Portfolio">
        {" "}
        <Portfolio />
      </div>

      <section id="Gallery">
        <Gallery />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
