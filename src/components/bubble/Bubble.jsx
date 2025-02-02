import React from "react";
import { motion } from "framer-motion";
import "./bubble.scss";

const Bubble = ({ size, left, top, delay, color }) => {
  return (
    <motion.div
      className="bubble"
      style={{
        width: size,
        height: size,
        left: left,
        top: top,
        backgroundColor: color || "rgba(166, 32, 238, 0.2)", // Default color
      }}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 180],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        repeatType: "loop",
        delay: delay,
      }}
    />
  );
};

export default Bubble;