// ChoosingTheRightCoachingInstitute.js
import React from "react";
import styles from "./ChoosingTheRightCoaching.module.css";

const ChoosingTheRightCoaching = ({ choosingTheRightCoachingInstitute }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {choosingTheRightCoachingInstitute.title}
      </h1>
      <p className={styles.introduction}>
        {choosingTheRightCoachingInstitute.introduction}
      </p>

      {choosingTheRightCoachingInstitute.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionHeading}>{section.heading}</h2>

          {section.content && (
            <p className={styles.sectionContent}>{section.content}</p>
          )}

          {section.points && (
            <ul className={styles.pointsList}>
              {section.points.map((point, idx) => (
                <li key={idx} className={styles.pointItem}>
                  {point.title && <strong>{point.title}:</strong>}{" "}
                  {point.description}
                </li>
              ))}
            </ul>
          )}

          {section.checklist && (
            <ul className={styles.checklist}>
              {section.checklist.map((item, idx) => (
                <li key={idx} className={styles.checklistItem}>
                  {item.material && <strong>{item.material}:</strong>}{" "}
                  {item.importance}
                </li>
              ))}
            </ul>
          )}

          {section.proTip && (
            <p className={styles.proTip}>
              <em>Pro Tip:</em> {section.proTip}
            </p>
          )}
          {section.fact && (
            <p className={styles.proTip}>
              <em>Fact:</em> {section.fact}
            </p>
          )}
          {section.StudentQuote && (
            <p className={styles.proTip}>
              <em>Student Quote:</em> {section.StudentQuote}
            </p>
          )}
          {section.conclusion && (
            <p className={styles.proTip}>
              <em></em> {section.conclusion}
            </p>
          )}
          {section.CaseStudy && (
            <p className={styles.proTip}>
              <em>Case Study:</em> {section.CaseStudy}
            </p>
          )}
          {section.StudentTestimonial && (
            <p className={styles.proTip}>
              <em>Student Testimonial:</em> {section.StudentTestimonial}
            </p>
          )}

          {section.example && (
            <p className={styles.example}>Example: {section.example}</p>
          )}

          {section.component && (
            <div>{section.component}</div>
          )}

          {section.questions && (
            <ul className={styles.questionsList}>
              {section.questions.map((question, idx) => (
                <li key={idx} className={styles.questionItem}>
                  {question}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <p className={styles.conclusion}>
        {choosingTheRightCoachingInstitute.conclusion}
      </p>
    </div>
  );
};

export default ChoosingTheRightCoaching;
