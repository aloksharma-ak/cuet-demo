import React from "react";
import styles from "./HomeCallToAction.module.css";
import { Link } from "react-router-dom";

const HomeCallToAction = () => {
  return (
    <div className={styles.HomeCallToAction}>
      <div>
        <h2 className={styles.HomeCallToAction__title}>
          Empowering Education, Together!
        </h2>
        <h3 className={styles.HomeCallToAction__subtitle}>
          Let's connect and explore how we can grow together.
        </h3>
      </div>
      <Link to="/become-a-partner">
        <button className={styles.HomeCallToAction__button}>
          Partner with us
        </button>
      </Link>
    </div>
  );
};

export default HomeCallToAction;
