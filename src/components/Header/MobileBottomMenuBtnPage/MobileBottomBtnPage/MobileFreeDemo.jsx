import React from "react";
import styles from "./mobileBtnPage.module.css";

const MobileFreeDemo = () => {
  return (
    <div
      className={styles.MobilePage}
      style={{
        height: "100vh",
        fontSize: "2rem",
        color: "#e07525",
        display: "grid",
        placeItems: "center",
      }}
    >
      <span>Coming Soon</span>
    </div>
  );
};

export default MobileFreeDemo;
