import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import "./MobileSidebar.css";
import logoMob from "../../../assets/CUETPlus_logo_mob.png";
import { IoClose } from "react-icons/io5";

export default function MobileSidebar({ className, handleToggle }) {
  const [openIndex, setOpenIndex] = useState(null);
  const sidebarRef = useRef(null);

  const handleItemToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Close the sidebar if a click occurs outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleToggle(); // Close the sidebar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleToggle]);

  // Framer Motion Variants for Sidebar Animation
  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { x: { duration: 0.4 }, opacity: { duration: 0.3 } },
    },
  };

  return (
    <>
      {/* Sidebar Header with Framer Motion Animation */}
      <motion.aside
        className="MobileSidebar-sidebar-btn"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <img src={logoMob} alt="CUETPlus Logo" className="logoMob" />
        <IoClose onClick={handleToggle} aria-label="Close Sidebar" />
      </motion.aside>

      {/* Sidebar Menu with Framer Motion Animation */}
      <motion.div
        ref={sidebarRef} // Attach the ref here
        className={`MobileSidebar-sidebar ${className}`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleItemToggle(index)}
          />
        ))}
      </motion.div>

      {/* Transparent Overlay */}
      <div
        className={`MobileSidebar-overlay ${className}`}
        onClick={handleToggle}
        aria-hidden="true"
      />
    </>
  );
}
