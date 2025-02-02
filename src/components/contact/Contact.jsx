import React, { useRef, useState } from "react";
import "./contact.scss";
import { IoIosMail } from "react-icons/io";
import { RiPhoneFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSucess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6o2ubip", "template_cdjoyx3", formRef.current, {
        publicKey: "KDhdXRVRCj3AeHYyl",
      })
      .then(
        () => {
          setSucess(true);
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Connect with me...</motion.h1>

        <motion.div className="item" variants={variants}>
          <IoIosMail className="icon" />

          <span>bharatmanidublicate@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <FaLocationDot className="icon" />

          <span>Kathmandu Nepal</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <RiPhoneFill className="icon" />

          <span>+977 9824906826</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Enter your name" required name="name" />
          <input type="email" placeholder="Enter your e-mail" required name="email" />
          <textarea rows={8} placeholder="Enter your message" name="message" />
          <button>Submit</button>
          <p className="displayMessage">
            {error &&
              "!! Error in delivering your message, You can also call us!!"}
          </p>
          <p className="displayMessage">
            {" "}
            {success && "!! Your message is successfully delivered !!"}
          </p>
        </form>
      </div>

      
    </motion.div>
  );
};

export default Contact;
