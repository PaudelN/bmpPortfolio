import React, { useRef } from "react";
import "./portfolio.scss";
import comedyChampion from "../../assets/images/comedyChampion.png";
import gaijatra from "../../assets/images/gaiJatra.png";
import worldTour from "../../assets/images/worldTour.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Bubble from "../bubble/Bubble"; // Import the Bubble component

const items = [
  {
    id: 1,
    title: "Comedy Champion",
    img: comedyChampion,
    desc: "Bharat Mani Paudel won Comedy Champion Season 2, defeating Bikki Agarwal from Sikkim, India, and Santosh Thapa from Gorkha.This win brought him widespread recognition in Nepal's comedy scene.  His victory not only established him as a comedian in Nepal but also opened doors to various opportunities in the entertainment industry, including television and live performances.",
  },
  {
    id: 2,
    title: "World Tour",
    img: worldTour,
    desc: "Following success in Comedy Champion Season 2, Bharat Mani Paudel toured internationally, performing in various part of the world like The USA, Australia, Europe, Middle East and many more. His comedy performances gained a significant following among Nepali communities abroad.",
  },
  {
    id: 3,
    title: "Gaijatra",
    img: gaijatra,
    desc: "Bharat Mani Paudel has participated in Nepal’s renowned Gaijatra festival, a platform known for its satirical take on social and political issues. His comedic sketches during Gaijatra have addressed various societal topics with a mix of humor and hard-hitting reality. He entertains audience using his political sattaires and caricatures in the festival.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="workImage" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      {/* Add Bubble components for the dynamic background */}
      <Bubble size="50px" left="20%" top="10%" delay={0} />
      <Bubble size="30px" left="90%" top="25%" delay={2} />
      <Bubble size="70px" left="40%" top="30%" delay={1} />
      <Bubble size="60px" left="10%" top="40%" delay={2} />
      <Bubble size="60px" left="40%" top="65%" delay={2} />
      <Bubble size="30px" left="30%" top="95%" delay={2} />
      <Bubble size="50px" left="80%" top="79%" delay={2} />
      <Bubble size="40px" left="60%" top="50%" delay={3} />
      <Bubble size="55px" left="20%" top="70%" delay={4} />

      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
