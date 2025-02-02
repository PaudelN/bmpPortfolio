import React, { useState } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import "./sidebar.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 40,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {

  const [open, setOpen] = useState(false);
  
  return (
    <motion.div
      className="sidebar"
      initial={false}
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="bg"
        variants={variants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
