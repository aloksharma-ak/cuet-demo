import React from "react";
import styles from "./PartnersSection.module.css";
import NEC from "../../../assets/NEC.jpg";
import TRUEPHYSICS from "../../../assets/TRUEPHYSICS.jpg";
import RIIT from "../../../assets/RIIT.jpg";
import AA from "../../../assets/AAPartner.jpg";
import PLUS from "../../../assets/PLUS.jpg";
import UNI from "../../../assets/UNILOGO.jpg";

import DU from "../../../assets/5-university.png";
import BHU from "../../../assets/6-university.png";
import AU from "../../../assets/3-university.jpg";
import JNU from "../../../assets/7-university.png";
import JMI from "../../../assets/8-university.png";
import { useNavigate } from "react-router-dom";

const PartnersSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/partnership-form");
  }
  return (
    <div className={styles.PartnersSection}>
      <h2 className={styles.title}>Building Success Together</h2>
      <p className={styles.desc}>
        Collaboration is at the heart of what we do. We are proud to partner
        with industry leaders, community organizations, and technology
        innovators to deliver unparalleled value to our customers.
      </p>
      <div className={styles.partnersContainer}>
        <div className={styles.centerPartner}>
          <h3 className={styles.partnerTitle}>Center Partner</h3>
          <div className={styles.partnerBox}>
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${RIIT})` }}
            />
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${NEC})` }}
            />
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${TRUEPHYSICS})` }}
            />
            <div
              className={`${styles.partnerLogo} ${styles.plus}`}
              style={{ backgroundImage: `url(${PLUS})` }} onClick={handleNavigate}
            >
              <div className={styles.overlay}>Join Us</div>
            </div>
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${UNI})` }}
            />
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${AA})` }}
            />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.collegePartner}>
          <h3 className={styles.partnerTitle}>College Partner</h3>
          <div className={styles.partnerBox}>
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${DU})` }}
            />
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${BHU})` }}
            />
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${AU})` }}
            />
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${JNU})` }}
            />
            <div
              className={styles.partnerLogo}
              style={{ backgroundImage: `url(${JMI})` }}
            />
            <div
              className={`${styles.partnerLogo} ${styles.plus}`}
              style={{ backgroundImage: `url(${PLUS})` }} onClick={handleNavigate}
            >
              <div className={styles.overlay}>Join Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
