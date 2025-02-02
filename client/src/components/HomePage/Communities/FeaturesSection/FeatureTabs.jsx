import React from 'react';
import styles from './FeatureTabs.module.css'; // Importing the CSS module

const FeatureTabs = ({ features, activeIndex, onTabClick }) => {
  return (
    <div className={styles.featureTabs}>
      {features.map((feature, index) => (
        <button
          key={index}
          className={`${styles.tabButton} ${activeIndex === index ? styles.active : ''}`}
          onClick={() => onTabClick(index)}
        >
          {feature.title}
        </button>
      ))}
    </div>
  );
};

export default FeatureTabs;
