import React from "react";
import styles from "./ContactNewLatter.module.css";
import { Link } from "react-router-dom";

const ContactNewLatter = () => {
  return (
    <section className={styles.ContactNewLatter}>
      <div className={styles.NewsCard}>
        <div className={styles.left}>
          <p className={styles.NewsCardDesc}>
            Build your Own Success Today <br />
            Benefit From Our Exceptional Pedagogy <br />
            Be a Part of our Learning Network
          </p>
          <h1 className={styles.NewsCardTitle}>
            To Join <span>CUETPlus</span> Today
          </h1>
        </div>
        <Link to="/" className={styles.btn}>
          <button className={styles.NewsCardBtn}>Join CUETPlus</button>
        </Link>
      </div>
    </section>
  );
};

export default ContactNewLatter;
