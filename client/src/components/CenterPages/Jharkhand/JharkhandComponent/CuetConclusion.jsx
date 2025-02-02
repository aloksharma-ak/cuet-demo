import React from "react";
import styles from "./CuetConclusion.module.css";

const CuetConclusion = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* Summary Section */}
      <section className={styles.summary}>
        <h2 className={styles.summaryTitle}>{data.summary.title}</h2>
        <ul className={styles.summaryList}>
          {data.summary.points.map((point, index) => (
            <li key={index} className={styles.summaryListItem}>
              {point}
            </li>
          ))}
          <h3 className={styles.subPointsTitle}>In this guide, we covered:</h3>
          {data.summary.subPoints && (
            <ul className={styles.subPointsList}>
              {data.summary.subPoints.map((subPoint, index) => (
                <li key={index} className={styles.subPointItem}>
                  {subPoint}
                </li>
              ))}
            </ul>
          )}
        </ul>
      </section>

      {/* Why CUETPlus Section */}
      <section className={styles.whyCUETPlus}>
        <h2 className={styles.whyCUETPlusTitle}>{data.whyCUETPlus.title}</h2>
        <p className={styles.whyCUETPlusContent}>{data.whyCUETPlus.content}</p>
        <ul className={styles.whyCUETPlusList}>
          {data.whyCUETPlus.description.map((desc, index) => (
            <li key={index} className={styles.whyCUETPlusItem}>
              {desc}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className={styles.callToAction}>
        <h2 className={styles.callToActionTitle}>{data.callToAction.title}</h2>
        <ul className={styles.callToActionList}>
          {data.callToAction.actions.map((action, index) => (
            <li key={index} className={styles.callToActionItem}>
              {action}
            </li>
          ))}
        </ul>
        <p className={styles.callToActionContact}>
          {data.callToAction.contact}
        </p>
      </section>
    </div>
  );
};

export default CuetConclusion;
