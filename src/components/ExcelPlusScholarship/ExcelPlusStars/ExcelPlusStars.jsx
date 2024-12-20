import React from "react";
import styles from "./ExcelPlusStars.module.css";
import { Link } from "react-router-dom";
import TOPACHIEVERS from "../../../assets/TOPACHIEVERS.jpg";
import MERITBASEDDISCOUNTS from "../../../assets/MERIT-BASEDDISCOUNTS.jpg";
import SUPPORTFORSUCCESS from "../../../assets/SUPPORTFORSUCCESS.jpg";

const ExcelPlusStars = () => {
  const cards = [
    {
      imageUrl: TOPACHIEVERS,
      title: "TOP ACHIEVERS",
      items: [
        "100% tuition waiver for CUET preparation.",
        "Additional support for CUET application and college admission fees.",
      ],
    },
    {
      imageUrl: MERITBASEDDISCOUNTS,
      title: "MERIT-BASED DISCOUNTS",
      items: [
        "Discounts based on performance in the scholarship test or past academic results.",
      ],
    },
    {
      imageUrl: SUPPORTFORSUCCESS,
      title: "SUPPORT FOR SUCCESS",
      items: [
        "Access to personalized mentorship, expert guidance, and mock test series.",
      ],
    },
  ];

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
        <button className={styles.scholarshipButton}>
          Start Your Application Today
        </button>
      </Link>
    </section>
  );
};

const Card = ({ imageUrl, title, items }) => (
  <div className={styles.scholarshipCard}>
    <img src={imageUrl} alt={title} className={styles.cardImage} loading="lazy" />
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

export default ExcelPlusStars;
