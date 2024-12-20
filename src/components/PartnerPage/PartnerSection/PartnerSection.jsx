import React from "react";
import styles from "./PartnerSection.module.css";
// Aliasing the Link import from react-scroll
import { Link as ScrollLink } from "react-scroll"; 
// Importing Link from react-router-dom as is
import { Link as RouterLink } from "react-router-dom";
import partnership_image from '../../../assets/partnership_Program.png'

const PartnerSection = () => {
  return (
    <div className={styles.partnerSection}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>
          Let’s Shape Futures Together — <br /> Partner with CUET Plus
        </h2>
        <p className={styles.desc}>
          Join hands with India’s leading CUET coaching institute and unlock new
          avenues of growth and success in education.
        </p>
        {/* Use RouterLink for navigation between pages */}
        <RouterLink to="/partnership-form">
          <button className={styles.partnerButton}>
            Become a Partner Today
          </button>
        </RouterLink>
        {/* Use ScrollLink for smooth scrolling within the same page */}
        <ScrollLink
          to="partnershipSection"
          smooth={true}
          duration={800}
          offset={-50}
        >
          <button className={styles.learnMoreButton}>
            Learn More About Our Partnerships
          </button>
        </ScrollLink>
      </div>
      <div className={styles.imageSection}>
        <img
          src={partnership_image}
          alt="Partner"
        />
      </div>
    </div>
  );
};

export default PartnerSection;
