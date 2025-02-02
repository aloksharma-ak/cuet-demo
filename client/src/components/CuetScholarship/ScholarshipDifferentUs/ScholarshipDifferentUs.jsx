import React from "react";
import styles from "./ScholarshipDifferentUs.module.css";
import scbICON from "../../../assets/scbICON.jpg";
import faICON from "../../../assets/faIMG.jpg";
import fegICON from "../../../assets/fegIMG.jpg";
import worldICON from "../../../assets/world.png";
import ufsICON from "../../../assets/ufsIMG.jpg";
import { Link } from "react-router-dom";
import { CallToActionBtn } from "../HowToRegister/HowToRegister";

const ScholarshipDifferentUs = () => {
  return (
    <>
      <section className={styles.ScholarshipDifferentUs}>
        <h2 className={styles.heading}>What makes ScholarPlus Different?</h2>
        <p className={styles.desc}>
          ScholarPlus is more than just financial support—it’s an opportunity to
          access premium education from one of India’s top CUET coaching
          institutes. With ScholarPlus, you can benefit from
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img className={styles.cardIcon} src={ufsICON} alt="ufsICON" />
            </div>
            <h2 className={styles.subHeading}>Unmatched Financial Support</h2>
            <p className={styles.description}>
              From high school to college, ScholarPlus supports students through
              each phase, ensuring financial hurdles don't stand in the way of
              achieving their goals.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img className={styles.cardIcon} src={scbICON} alt="scbICON" />
            </div>
            <h2 className={styles.subHeading}>Student-Centered Benefits</h2>
            <p className={styles.description}>
              We recognize and reward student effort at every level, making
              CUETPlus an affordable pathway to success.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img className={styles.cardIcon} src={faICON} alt="faICON" />
            </div>
            <h2 className={styles.subHeading}>Expert Guidance & Mentorship</h2>
            <p className={styles.description}>
              Students gain access to CUET Plus’s dedicated mentors and
              structured programs designed for peak performance.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img className={styles.cardIcon} src={worldICON} alt="fegICON" />
            </div>
            <h2 className={styles.subHeading}>Access Across India</h2>
            <p className={styles.description}>
              Our scholarships are open to students across India, ensuring equal
              opportunity for aspiring candidates from all backgrounds.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img className={styles.cardIcon} src={fegICON} alt="fegICON" />
            </div>
            <h2 className={styles.subHeading}>
              Simplified Application Process
            </h2>
            <p className={styles.description}>
              Applying for ScholarPlus is straightforward, making it easy for
              students and parents to take the first step toward quality
              education.
            </p>
          </div>
        </div>
        <Link to="/our-courses">
          <CallToActionBtn title="Discover CUET Plus Programs" />
        </Link>
      </section>
    </>
  );
};

export default ScholarshipDifferentUs;
