import React from "react";
import styles from "./ExcelWhatsNext.module.css";
import performanceImg from '../../../assets/statistics.png'
import notificationImg from '../../../assets/ipmat.png'
import enrollImg from '../../../assets/will.png'

const ExcelWhatsNext = () => {
  const cards = [
    {
      icon: performanceImg,
      title: "Performance Analysis:",
      description: "Receive a detailed report highlighting your strengths and areas to improve.",
      alt: "Performance Analysis Icon",
    },
    {
      icon: notificationImg,
      title: "Scholarship Notification:",
      description: "Winners will be notified via email and phone by 30th December 2024.",
      alt: "Scholarship Notification Icon",
    },
    {
      icon: enrollImg,
      title: "Enroll in CUET Plus Programs:",
      description: "Use your scholarship to join our expert-led CUET preparation courses.",
      alt: "Enroll in CUET Plus Programs Icon",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>What's Next After the Test?</h3>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>
              {/* <img
                src={card.icon}
                alt={card.alt}
                className={styles.iconImage}
              /> */}
            </div>
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcelWhatsNext;
