import React from "react";
import styles from "./StarStars.module.css";
import { Link } from "react-router-dom";

const StarStars = ({ cards, btnTitle }) => {
  return (
    <section className={styles.scholarshipSection}>
      {/* <h2 className={styles.scholarshipTitle}>
        A SCHOLARSHIP TAILORED FOR ASPIRING CUET STARS
      </h2> */}
      <div className={styles.scholarshipCards}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Link to="/scholarship-form">
        <button className={styles.scholarshipButton}>{btnTitle}</button>
      </Link>
    </section>
  );
};

const Card = ({ imageUrl, title, items }) => (
  <div className={styles.scholarshipCard}>
    <img
      src={imageUrl}
      alt={title}
      className={styles.cardImage}
      loading="lazy"
    />
    <div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.cardList}>
        {items.map((item, index) => (
          <li key={index} className={styles.cardListItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default StarStars;
