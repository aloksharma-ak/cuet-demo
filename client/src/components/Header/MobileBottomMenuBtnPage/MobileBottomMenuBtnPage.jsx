import React from "react";
import { IoClose } from "react-icons/io5";
import MobileFreeCounselling from "./MobileBottomBtnPage/MobileFreeCounselling";
import MobileFreeDemo from "./MobileBottomBtnPage/MobileFreeDemo";
import MobileCourses from "./MobileBottomBtnPage/MobileCourses";
import styles from "./MobileBottomMenuBtnPage.module.css";

function MobileBottomMenuBtnPage({ mobileBottomMenuVisible, mobileBottomBtnActive, animDivRef, handleCloseMenu, pageRef }) {
  return (
    <>
      {mobileBottomMenuVisible && (
        <div className={styles.mobileBottomMenuBtnPage} ref={(el) => {
          animDivRef.current = el;
          pageRef.current = el; // Assign to both refs
        }}>
          <button
            onClick={handleCloseMenu}
            className={styles.mobileBottomMenuBtnPageCloseBtn}
          >
            <IoClose />
          </button>
          <div className={styles.mobileBottomMenuBtnPageContent}>
            {mobileBottomBtnActive === "counseling" && <MobileFreeCounselling />}
            {mobileBottomBtnActive === "course" && <MobileCourses />}
            {mobileBottomBtnActive === "demo" && <MobileFreeDemo />}
          </div>
        </div>
      )}
    </>
  );
}

export default MobileBottomMenuBtnPage;
