import React from "react";
import styles from "./LatestUpdate.module.css"; // Import the CSS module

const LatestUpdate = () => {
  return (
    <section id={styles.LatestUpdate}>
      <h6 className={styles.latestUpdateTitle}>Subscribe blog for latest updates</h6>
      <div className={styles.latestUpdateContainer}>
        <input
          type="email"
          className={styles.latestUpdateInput}
          spellCheck="false"
          placeholder="example@example.com"
        />
        <button className={styles.latestUpdateButton}>Subscribe</button>
      </div>
    </section>
  );
};

export default LatestUpdate;
