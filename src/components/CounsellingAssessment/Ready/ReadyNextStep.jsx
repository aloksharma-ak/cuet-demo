import React from "react";
import styles from "./ReadyNextStep.module.css";
import img from '../../../assets/happy-girl-yellow-dress.png'

const ReadyNextStep = ({toggleFormOverlay}) => {
  return (
    <section className={styles.nextStep}>
      <div className={styles.left}>
        <h2 className={styles.title}>Ready to Take the <span>Next Step?</span></h2>
        <p className={styles.description}>
          Whether you're just starting to explore or preparing for college, CUETPlus is here to guide you.
        </p>
        <p className={styles.description}>
          Connect with us today to begin a journey of self-discovery and
          academic excellence.
        </p>
        <button className={styles.button} onClick={toggleFormOverlay}>Contact Us</button>
      </div>
      <div className={styles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default ReadyNextStep;
