import React from "react";
import styles from "./OurJourney.module.css";
import Timeline, { TimelineNew } from "./Timeline";

const OurJourney = () => {
  return (
    <section className={styles.OurJourney}>
      <h2 className={styles.title}>The Journey Begins</h2>
      <span className={styles.date}>
        From Humble Beginnings to Industry Leaders
      </span>
      <p className={styles.description}>
        Established in 2022, CUETPlus is India's leading and fastest-growing
        coaching platform for Common University Entrance Test (CUET)
        preparation. we go beyond traditional coaching by offering a blend of
        classroom and online learning options, along with expertly curated study
        materials, and an extensive mock test series, all designed to help
        students excel in the CUET. Our approach is rooted in personalized
        learning, led by top educators who are dedicated to guiding you at every
        step. We're not just preparing you for an exam—we're paving the way to
        your dream college and setting the foundation for a brighter future.
        Join CUETPlus — your pathway to knowledge, confidence, and academic
        excellence.
      </p>
      <div className={styles.timelineContainer}>
        {/* <Timeline /> */}
        <TimelineNew/>
      </div>
    </section>
  );
};

export default OurJourney;
