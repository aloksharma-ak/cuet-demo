import React from "react";
import styles from "./CenterNewsletter.module.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CenterNewsletter = () => {
  return (
    <div className={styles.newsletter}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2>Take the Leap!</h2>
        <p>Your dream university starts with the right preparation.</p>
      </div>

      <div className={styles.container}>
        {/* Content Section */}
        <div className={styles.content}>
          <p>
            Securing a seat in a top university starts with choosing the right
            coaching center. Delhi’s thriving coaching culture, combined with
            expert guidance and unparalleled resources, makes it the go-to
            destination for CUET preparation.
          </p>
          <p>
            <strong>CUET Plus</strong> stands out for its tailored approach,
            outstanding results, and dedication to student success. Don't just
            dream about your dream university—take action today.
          </p>
          <p>
            Enroll with CUET Plus now and get access to{" "}
            <strong>free demo classes</strong> and{" "}
            <strong>scholarship opportunities</strong>. Your academic goals are
            within reach!
          </p>
        </div>

        <div className={styles.box}>
          {/* Call to Action Section */}
          <div className={styles.cta}>
            <h2>Join CUET Plus Today!</h2>
            <button className={styles.ctaButton}>Enroll Now</button>
          </div>

          {/* Footer Section */}
          <div className={styles.footer}>
            <p>Contact Us</p>
            <div className={styles.contact}>
              <Link to="mailto:info@cuet.plus">
                <FaEnvelope /> <span>info@cuet.plus</span>
              </Link>
              <Link to="tel:7428989898">
                <FaPhoneAlt /> <span>+91-7428989898</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNewsletter;
