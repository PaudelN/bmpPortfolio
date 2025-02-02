import React, { useState, useEffect } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Update position on mouse move
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add hover effects
    const addHoverEffect = () => setIsHovered(true);
    const removeHoverEffect = () => setIsHovered(false);

    // Add event listeners
    window.addEventListener("mousemove", mouseMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      // Clean up event listeners
      window.removeEventListener("mousemove", mouseMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <motion.div
      className={`cursor ${isHovered ? "hovered" : ""}`}
      animate={{ x: position.x - 15, y: position.y - 15 }}
      transition={{ ease: "linear", duration: 0.02 }}
    ></motion.div>
  );
};

export default Cursor;
