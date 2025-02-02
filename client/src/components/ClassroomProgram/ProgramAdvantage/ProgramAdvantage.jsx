import React from 'react';
import styles from './ProgramAdvantage.module.css';

function ProgramAdvantage({ desc }) {
  return (
    <div className={styles.programAdvantage}>
      <div className={styles.programAdvantageDiv}>
        <span>Program Advantage</span>
        {desc.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default ProgramAdvantage;
