import React, { useState } from "react";
import OnlineAdmissionImg from '../../../assets/OnlineAdmissionBgImage-removebg.png';
import ContactForm from "../../HomePage/IntroSection/ContactForm";
import styles from "./OnlineAdmission.module.css";

function OnlineAdmission() {
  const [formClick, setFormClick] = useState(false);

  const handleClick = () => {
    setFormClick(true);
  };

  const handleOverlayClick = () => {
    console.log("Contact form clicked!");
    setFormClick(false);
  };

  return (
    <div className={styles.onlineAdmission}>
      <div className={styles.onlineIntroContent}>
        <div className={styles.text}>
          <h2>Crack CUET with <span>CUETPlus</span>: Learn from Top Educators</h2>
          <p>Get into your desired university</p>
          <span className={styles.centerBtn}>Batch Starting Soon</span>
          <span className={styles.bbb}>Course Mode: Online</span>
        </div>
        <img src={OnlineAdmissionImg} alt="online admission" />
      </div>
      <div className={styles.form}>
        <ContactForm
          onClick={handleClick}
          className={formClick ? styles.formHide : ""}
          formHead={`Enquire Now`}
        />
        {formClick && (
          <div className={styles.overlayDiv}>
            <div
              className={styles.overlayForm}
              onClick={handleOverlayClick}
            ></div>
            <div className={styles.cf}>
              <ContactForm formHead={`Enquire Now`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OnlineAdmission;
