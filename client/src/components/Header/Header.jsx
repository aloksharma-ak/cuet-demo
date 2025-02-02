import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import MenuList from "./MenuList";
import NavbarBrandSection from "./NavbarBrandSection/NavbarBrandSection";
import NavbarMenuToggle from "./NavbarMenuToggle/NavbarMenuToggle";
import MenuButtons from "./MenuButtons/MenuButtons";

function Header({ onLogoClick }) {
  const [isMenuDropVisible, setIsMenuDropVisible] = useState(false);
  const menuRef = useRef(null);

  // Toggle state for menu visibility
  const handleToggle = () => setIsMenuDropVisible((prev) => !prev);

  // Close menu when overlay is clicked
  const handleOverlayClick = () => setIsMenuDropVisible(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuDropVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.wrapperDiv}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logoSection}>
            <NavbarMenuToggle
              isMenuDropVisible={isMenuDropVisible}
              handleToggle={handleToggle}
              handleOverlayClick={handleOverlayClick}
            />
            <NavbarBrandSection onLogoClick={onLogoClick} />
          </div>
          <div className={styles.navbarMenuList}>
            <MenuList />
          </div>
          <MenuButtons />
        </nav>
      </header>
    </section>
  );
}

export default Header;
