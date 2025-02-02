import React from "react";
import styles from "./WhyCUETPlus.module.css";
import b1 from "../../../assets/b1.png";
import b2 from "../../../assets/b2.png";
import b3 from "../../../assets/b3.png";

const WhyCUETPlus = () => {
  const promoCards = [
    {
      img: b1,
      title: "Student-Centered Approach",
      desc: "Our counseling services focus on each student’s unique needs, goals, and personality.",
    },
    {
      img: b2,
      title: "Experienced Counselors",
      desc: "With years of expertise, our counselors understand the nuances of academic and career pathways.",
    },
    {
      img: b3,
      title: "Proven Tools & Techniques",
      desc: "From aptitude testing to skill-building workshops, our resources are tailored for maximum impact.",
    },
  ];

  return (
    <div className={styles.whyContainer}>
      <h2>Why Choose CUET Plus Counseling?</h2>
      <div className={styles.promoCard}>
        {promoCards.map((card, index) => (
          <div key={index} className={styles.promoCardItem}>
            <div className={styles.image}>
              <img src={card.img} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCUETPlus;
