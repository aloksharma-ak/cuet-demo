import React from 'react';
import styles from './BenefitsOfCuetCoaching.module.css';

const validateSections = (sections) => {
    return sections.map(section => ({
      ...section,
      content: Array.isArray(section.content) ? section.content : [], // Ensure content is always an array
    }));
  };

const BenefitsOfCuetCoaching = ({ benefitsOfCuetCoaching }) => {
    const validatedSections = validateSections(benefitsOfCuetCoaching.sections);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{benefitsOfCuetCoaching.title}</h1>
      <p className={styles.introduction}>{benefitsOfCuetCoaching.introduction}</p>
      <div className={styles.sections}>
        {validatedSections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            <ul className={styles.content}>
              {section.content.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            {section.example && <p className={styles.example}>Example: {section.example}</p>}
            {section.fact && <p className={styles.fact}>Fact: {section.fact}</p>}
            {section.proTip && <p className={styles.proTip}>Pro Tip: {section.proTip}</p>}
            {section.testimonial && <p className={styles.testimonial}>"{section.testimonial}"</p>}
          </div>
        ))}
      </div>
      <p className={styles.conclusion}>{benefitsOfCuetCoaching.conclusion}</p>
    </div>
  );
};

export default BenefitsOfCuetCoaching;
