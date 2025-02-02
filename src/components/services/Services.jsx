import React, { useRef } from "react";
import "./services.scss";
import { useInView, motion } from "framer-motion";
import Comica from "../../assets/images/comica.png";
import { IoMdCall } from "react-icons/io";

const textVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const bounceVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const boxHoverVariants = {
  hover: {
    background: "linear-gradient(180deg, #471562, #111132)",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

const fadeInVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const servicesData = [
  {
    title: "Reality Shows",
    description:
      "Reality shows designed to foster laughter and bring audiences together. Whether it’s character-driven comedy or content-based humor, my aim is to create an atmosphere where everyone can unwind, connect, and enjoy themselves, all while keeping the vibe light and fun.",
  },
  {
    title: "Stand-up Comedy",
    description:
      "Stand-up comedy performances tailored specifically for your event. Whether it’s a corporate gathering, a private party, or a stand-up show, I craft each set to match the audience’s preferences and the tone of the event, ensuring only indoor programs and events.",
  },
  {
    title: "International Shows",
    description:
      "Services for international events, offering humor that resonates across nepalese audience. If you're hosting a cross-cultural program or an international gathering, I can provide comedy that bridges gaps and keeps everyone entertained.",
  },
  {
    title: "Live Performances",
    description:
      "Live comedy performances designed to captivate and entertain. Live shows, events, and performances, my goal is to bring energy, joy, and plenty of laughs, keeping your audience engaged and ensuring they leave with a smile.",
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInVariants}
    >
      <motion.div className="textContainer" variants={textVariants}>
        <p>
          Let’s stay happy, smiling and
          <br /> embrace positivity in every moment.
        </p>
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div className="titleContainer">
        <motion.div className="title" variants={floatVariants}>
          <motion.img
            src={Comica}
            alt="comica"
            className="titleImage"
            variants={bounceVariants}
          />
          <h1>
            <span>Shows</span>
            <br /> Services and Live <span>Performance</span>
          </h1>
        </motion.div>
      </motion.div>

      <motion.button variants={floatVariants}>
        <a href="#Contact">
          <IoMdCall />
        </a>
      </motion.button>
      <motion.div
        className="listContainer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="box"
            whileHover="hover"
            variants={boxHoverVariants}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
