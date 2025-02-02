import React from "react";
import styles from "./Achievement.module.css";
import AchievementBox from "./AchievementBox";

const Achievement = ({achievements, heading}) => {
  
  return (
    <section className={styles.achievement}>
      <h3 className={styles.subHeading}>{heading[0]}</h3>
      <h2 className={styles.heading}>{heading[1]}</h2>
      <AchievementBox achievements={achievements} />
    </section>
  );
};

export default Achievement;
