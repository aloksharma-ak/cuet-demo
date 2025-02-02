import React from "react";
import styles from "./SparkHero.module.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const SparkHero = ({ subTitle, title, description, buttons, imageSrc }) => {
  return (
    <section className={styles.sparkHero}>
      <div className={styles.sparkContent}>
        <h2 className={styles.subTitle}>{subTitle}</h2>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.btnContainer}>
          {/* {buttons.map((button, index) => ( */}
          <Link to={buttons[0].link} className={styles.btn}>
            {buttons[0].text}
          </Link>
          <ScrollLink
            to={buttons[1].link}
            smooth={true}
            duration={800}
            offset={-80}
            className={styles.btn}
          >
            {buttons[1].text}
          </ScrollLink>
          {/* ))} */}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Class 11th" />
        <div className={styles.overlay} />
      </div>
    </section>
  );
};

export default SparkHero;
