import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import Logo from "../../assets/images/bharatAlt.png";
import Instagram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
import X from "../../assets/images/x.png";
import Youtube from "../../assets/images/youtube.png";
import Tiktok from "../../assets/images/tiktok.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{ duration: 1 }}
          href="#Home"
        >
          {" "}
          <img className="logo" src={Logo} alt="Logo" />
        </motion.a>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{ duration: 1 }}
        >
          <a
            target="__blank"
            href="https://www.instagram.com/bharatmanipaudel_official"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            target="__blank"
            href="https://www.facebook.com/bharatimanipoudel/"
          >
            <img src={Facebook} alt="facebook" />
          </a>
          <a target="__blank" href="https://x.com/BharatManiPaud3">
            <img src={X} alt="x" />
          </a>
          <a target="__blank" href="https://www.youtube.com/@BHARATMANI33">
            <img src={Youtube} alt="youtube" />
          </a>
          <a target="__blank" href="http://tiktok.com/@bharatmanipaudel">
            <img src={Tiktok} alt="tiktok" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
