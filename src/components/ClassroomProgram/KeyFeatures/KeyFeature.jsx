import React from "react";
import styles from "./KeyFeature.module.css";

function KeyFeature({ KeyFeatureData }) {
  return (
    <div className={styles.keyFeature}>
      <div className={styles.courseDetailsDiv}>
        <span className={styles.contentTitle}>Key Features</span>
        <ul>
          {KeyFeatureData.map((feature, index) => (
            <li key={index}>
              <span>{feature.bold}</span>
              {feature.text}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KeyFeature;
