import React from "react";
import { Link } from "react-router-dom";
import styles from "./ScholarshipPrize.module.css";

function ScholarshipPrize({ heading, prizeData, whoCanApply, keyHighlights }) {
  return (
    <div className={styles.scholarshipPrize}>
      <div className={styles.prizeText}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.prizeContainer}>
          <div className={styles.prizeItem}>
            {prizeData.map((prize, index) => (
              <div
                className={`${styles.item} ${
                  index === 0 || index === 1 ? styles.size : ""
                }`}
                key={index}
              >
                <img src={prize.img} alt={prize.title} />
                <h3>{prize.title}</h3>
              </div>
            ))}
            <ul className={styles.list}>
              <h3 className={styles.listTitle}>Who Can Apply?</h3>
              {whoCanApply.map((item, index) => (
                <li className={styles.listItem} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.highlights}>
            <h3>Key Highlights</h3>
            {keyHighlights.map((highlight, index) => (
              <div className={styles.highlightItem} key={index}>
                <img src={highlight.icon} alt="green tick" />
                <p>{highlight.text}</p>
              </div>
            ))}
            <Link to="/scholarship-form">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipPrize;
