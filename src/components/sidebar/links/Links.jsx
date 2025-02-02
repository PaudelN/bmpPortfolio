import React from "react";
import { HiBriefcase } from "react-icons/hi2";
import { IoCall as Contact, IoImage as Gallery } from "react-icons/io5";
import { PiMicrophoneStageFill as Services } from "react-icons/pi";
import {
  TbAlertCircleFilled as About,
  TbLayoutDashboardFilled as Home,
} from "react-icons/tb";

const Links = () => {
  const items = [
    { name: "Home", icon: <Home /> },
    { name: "About", icon: <About /> },
    { name: "Services", icon: <Services /> },
    { name: "Portfolio", icon: <HiBriefcase /> },
    { name: "Gallery", icon: <Gallery /> },
    { name: "Contact", icon: <Contact /> },
  ];

  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item.name}`} key={item.name} className="link">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Links;
