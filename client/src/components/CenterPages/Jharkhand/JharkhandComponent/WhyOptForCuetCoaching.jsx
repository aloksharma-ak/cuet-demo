import React from "react";
import styles from "./WhyOptForCuetCoaching.module.css";

const WhyOptForCuetCoaching = ({ whyOptContent }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{whyOptContent.title}</h2>
      {whyOptContent.description && (
        <p className={styles.description}>{whyOptContent.description}</p>
      )}
      {whyOptContent.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionHeading}>{section.heading}</h2>
          <p className={styles.content}>{section.content}</p>
          {section.points && (
            <ul className={styles.pointsList}>
              {section.points.map((point, idx) => (
                <li key={idx} className={styles.point}>
                  {typeof point === "string" ? (
                    // Render simple point (string type)
                    <span>{point}</span>
                  ) : (
                    // Render detailed point (object with title and description)
                    <>
                      <strong>{point.title}</strong>: {point.description}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
          {section.example && (
            <p className={styles.proTip}>
              <em>Example:</em> {section.example}
            </p>
          )}
          {section.proTip && (
            <p className={styles.proTip}>
              <em>Pro Tip:</em> {section.proTip}
            </p>
          )}
          {section.funFact && (
            <p className={styles.proTip}>
              <em>Fun Fact:</em> {section.funFact}
            </p>
          )}
        </div>
      ))}
      <p className={styles.conclusion}>{whyOptContent.conclusion}</p>
    </div>
  );
};

export default WhyOptForCuetCoaching;
