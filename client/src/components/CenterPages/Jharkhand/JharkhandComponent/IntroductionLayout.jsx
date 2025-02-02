import React from 'react';
import styles from './IntroductionLayout.module.css';

const IntroductionLayout = ({introductionContent}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Introduction</h1>
      {introductionContent.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          {section.content.map((desc, i)=> (
            <p className={styles.sectionContent} key={i}>{desc}</p>
          ))}
          {section.conclusion && (
            <p className={styles.sectionConclusion}>{section.conclusion}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default IntroductionLayout;
