import React from "react";
import styles from "./HomeStreamCareer.module.css";
import { Link } from "react-router-dom";

const HomeStreamCareer = () => {
  return (
    <div id={styles.HomeStreamCareer}>
      <h2 className={styles.streamCareerTitle}>
        <span>Let's Identify Your Preferences</span>
        <br /> Personalized one-on-one session with our expert counselors
      </h2>
      <div className={styles.streamCareerDiv}>
          <Link to="/counselling">
        <div className={styles.cardDiv}>
          <div className={styles.card}>
            <h5>For Students of Class 8th, 9th & 10th</h5>
            <div className={styles.floatingDiv}>
              <div className={styles.floatingText}>Stream</div>
              <p>
                With <span>Disha</span> Plus
              </p>
            </div>
          </div>
            <div className={styles.card}>
              <h5>For Students of Class 11th & 12th</h5>
              <div className={styles.floatingDiv}>
                <div className={styles.floatingText}>Career</div>
                <p>
                  With <span>Vision</span> plus
                </p>
              </div>
            </div>
        </div>
          </Link>
        {/* <p className="streamCareerLink">
          For more details <a className="link">Click Here</a>
        </p> */}
      </div>
    </div>
  );
};

export default HomeStreamCareer;
