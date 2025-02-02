import React from "react";
import PropTypes from "prop-types";
import styles from "./SparkClassRoomProgram.module.css";

const SparkClassRoomProgram = ({ title, description, cardData }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <img src={card.img_url} alt={card.title} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

SparkClassRoomProgram.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      img_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SparkClassRoomProgram;
