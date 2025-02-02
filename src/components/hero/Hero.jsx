import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import Scroll from "../../assets/images/scroll.png";
import standUpBharat from "../../assets/images/hero2.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BHARAT MANI PAUDEL</motion.h2>
          <motion.h1 variants={textVariants}>
            Standup Comedian and Mimicry Artist{" "}
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="#Portfolio"> See the latest works</a>
            </motion.button>
            <motion.button variants={textVariants} className="contactMe">
              <a href="#Contact"> Contact Me</a>
            </motion.button>
          </motion.div>
          <a href="#About">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src={Scroll}
              alt="scrollDown"
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        className="slidingTextContainer"
        initial="initial"
        animate="animate"
      >
        Actor Mimic Artist Comedian
      </motion.div>
      <div className="imageContainer">
        <img src={standUpBharat} alt="standUpBharat" />
      </div>
    </div>
  );
};

export default Hero;
