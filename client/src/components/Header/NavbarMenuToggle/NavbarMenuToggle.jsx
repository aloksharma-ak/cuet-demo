import React, { useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import styles from "./NavbarMenuToggle.module.css";

function NavbarMenuToggle({ isMenuDropVisible, handleToggle, handleOverlayClick }) {
  const menuRef = useRef(null);

  // Variants for Framer Motion animations
  const overlayVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.navbarToggle}>
      {/* Toggler Button */}
      <button
        className={styles.navbarToggler}
        type="button"
        onClick={handleToggle}
      >
        <span className={styles.navbarTogglerIcon}>
          {isMenuDropVisible ? <IoClose /> : <IoMenu />}
        </span>
      </button>

      {/* Animated Sidebar and Overlay */}
      <AnimatePresence>
        {isMenuDropVisible && (
          <>
            {/* Sidebar */}
            <MobileSidebar
              className={isMenuDropVisible ? "activeSlide" : ""}
              menuRef={menuRef}
              handleToggle={handleToggle}
            />

            {/* Overlay */}
            <motion.div
              className={`${styles.navbarMenuListOverlay}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={handleOverlayClick}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavbarMenuToggle;
