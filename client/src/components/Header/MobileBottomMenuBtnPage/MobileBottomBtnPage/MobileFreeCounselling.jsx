import React from "react";
import styles from "./mobileBtnPage.module.css";
import CounselingMobile from "./CounselingMobile/CounselingMobile";


const MobileFreeCounselling = () => {
  

  return (
    <>
      <div className={styles.MobilePage}>
        <CounselingMobile/>
      </div>
      
    </>
  );
};

export default MobileFreeCounselling;
