import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import counselling_icon from "../../../assets/consulting_icon.png";
import mock_icon from "../../../assets/mock_icon.png";
import demo_icon from "../../../assets/demo_icon.png";
import MobileBottomMenuBtnPage from "../MobileBottomMenuBtnPage/MobileBottomMenuBtnPage";
import styles from "./MobileBottomMenu.module.css";
import { Link } from "react-router-dom";

function MobileBottomMenu() {
  const [mobileBottomMenuVisible, setMobileBottomMenuVisible] = useState(false);
  const [mobileBottomBtnActive, setMobileBottomBtnActive] = useState(null);
  const animDivRef = useRef(null);
  const menuRef = useRef(null); // Reference to the menu container
  const pageRef = useRef(null); // Reference to the MobileBottomMenuBtnPage container

  // Handle menu opening and history management for back button
  const handleMenuClick = (component) => {
    if (mobileBottomMenuVisible && mobileBottomBtnActive === component) {
      handleCloseMenu();
    } else {
      setMobileBottomMenuVisible(true);
      setMobileBottomBtnActive(component);
      window.history.pushState({ menuOpen: true }, ""); // Push state to history

      if (animDivRef.current) {
        gsap.fromTo(
          animDivRef.current,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    }
  };

  const handleCloseMenu = () => {
    if (animDivRef.current) {
      gsap.to(animDivRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => setMobileBottomMenuVisible(false),
      });
    }
  };

  useEffect(() => {
    // Close menu when back button is pressed
    const handlePopState = () => {
      if (mobileBottomMenuVisible) {
        handleCloseMenu();
      }
    };

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        mobileBottomMenuVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        pageRef.current &&
        !pageRef.current.contains(event.target)
      ) {
        handleCloseMenu();
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileBottomMenuVisible]);

  return (
    <>
      <div className={styles.mobileBottomMenu} ref={menuRef}>
        <button className={styles.mobileBottomBtn}>
          <Link to="/counselling">
            <img
              className={styles.mobileBottomBtnIcon}
              src={counselling_icon}
              alt="Counseling"
            />
            Counseling
          </Link>
        </button>
        <button className={styles.mobileBottomBtn}>
          <Link to="/our-courses">
            <img
              className={styles.mobileBottomBtnIcon}
              src={mock_icon}
              alt="Courses"
            />
            Courses
          </Link>
        </button>
        <button className={styles.mobileBottomBtn}>
          <Link to="/test">
            <img
              className={styles.mobileBottomBtnIcon}
              src={demo_icon}
              alt="Free Demo"
            />
            Free Demo
          </Link>
        </button>
        {/* <button
          className={styles.mobileBottomBtn}
          onClick={() => handleMenuClick("counseling")}
        >
          <img
            className={styles.mobileBottomBtnIcon}
            src={counselling_icon}
            alt="Counseling"
          />
          Counseling
        </button>
        <button
          className={styles.mobileBottomBtn}
          onClick={() => handleMenuClick("course")}
        >
          <img
            className={styles.mobileBottomBtnIcon}
            src={mock_icon}
            alt="Courses"
          />
          Courses
        </button>
        <button
          className={styles.mobileBottomBtn}
          onClick={() => handleMenuClick("demo")}
        >
          <img
            className={styles.mobileBottomBtnIcon}
            src={demo_icon}
            alt="Free Demo"
          />
          Free Demo
        </button> */}
      </div>

      {/* <MobileBottomMenuBtnPage
        mobileBottomMenuVisible={mobileBottomMenuVisible}
        mobileBottomBtnActive={mobileBottomBtnActive}
        animDivRef={animDivRef}
        handleCloseMenu={handleCloseMenu}
        pageRef={pageRef} 
      /> */}
    </>
  );
}

export default MobileBottomMenu;
