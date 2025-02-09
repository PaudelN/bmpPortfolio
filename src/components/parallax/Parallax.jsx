import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import aboutImage from "../../assets/images/hero10.jpg";
import "./parallax.scss";

const firstVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};
const secondVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};
const Parallax = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="about-container">
      <motion.div
        className="image-container"
        variants={firstVariant}
        initial="initial"
        animate={isInView && "animate"}
        ref={ref}
      >
        <img src={aboutImage} alt="About" />
      </motion.div>

      <motion.div
        className="content-container"
        variants={secondVariant}
        initial="initial"
        animate={isInView && "animate"}
      >
        <h1>About</h1>
        <h3>Hi, I am Bharat Mani Paudel</h3>
        <p>
          A standup comedian from Taplejung, Nepal. My journey in comedy started
          when I joined the reality show Comedy Champion Season 2. Before that I
          used to do be a radio jockey in my hometown. Upon moving to Kathmandu,
          I ventured into content creation on YouTube.
       
          Through my work, I aim to bring humor and joy to people, The
          appreciation and love I have received over the years motivate me to
          push boundaries and refine my craft. I am incredibly
          grateful for the journey so far and excited for what lies ahead.
        </p>
        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://en.wikipedia.org/wiki/Bharat_Mani_Paudel"
            target="__blank"
          >
            Wikipedia
          </a>
          <LiaGlobeAmericasSolid className="world" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Parallax;
