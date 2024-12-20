import React, { useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import styles from "./NavbarMenuToggle.module.css";

function NavbarMenuToggle({ isMenuDropVisible, handleToggle, handleOverlayClick }) {
  const menuRef = useRef(null);

  return (
    <div className={styles.navbarToggle}>
      <button
        className={styles.navbarToggler}
        type="button"
        onClick={() => handleToggle("isMenuDropVisible")}
      >
        <span className={styles.navbarTogglerIcon}>
          {isMenuDropVisible ? <IoClose /> : <IoMenu />}
        </span>
      </button>

      {isMenuDropVisible && (
        <>
          <MobileSidebar
            className={isMenuDropVisible ? 'activeSlide' : ""}
            menuRef={menuRef}
            handleToggle={handleToggle} // Pass down the handleToggle prop
          />
          <div
            className={`${styles.navbarMenuListOverlay} ${
              isMenuDropVisible ? styles.active : ""
            }`}
            onClick={handleOverlayClick}
          />
        </>
      )}
    </div>
  );
}

export default NavbarMenuToggle;
