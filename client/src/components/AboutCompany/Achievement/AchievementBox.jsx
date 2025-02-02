import React from "react";
import styles from "./AchievementBox.module.css";

const AchievementBox = ({ achievements }) => {
  return (
    <section className={styles.achievementContent}>
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className={`${styles.achievementBox} ${
            achievement.img ? styles.achievementBoxPadding : ""
          }`}
        >
          {achievement.title && (
            <h2 className={styles.achievementTitle}>{achievement.title}</h2>
          )}
          {achievement.description && (
            <p className={styles.achievementDescription}>
              {achievement.description}
            </p>
          )}
          {achievement.img && (
            <img
              src={achievement.img}
              alt="image"
              className={styles.achievementImg}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default AchievementBox;
