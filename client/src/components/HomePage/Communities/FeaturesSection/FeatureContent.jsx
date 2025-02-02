import React from "react";
import contentStyles from './FeatureContent.module.css'; // Import the FeatureContent module
import effectStyles from './FeatureEffects.module.css'; // Import the FeatureEffects module

const FeatureContent = ({ content }) => {
  return (
    <div className={contentStyles.featureContent}>
      <div>
        {content.description3 && <p>{content.description3}</p>}
        <div>
          <img src={content.imgSrc} alt={content.title} loading="lazy" />
          {content.imgSrc2 && (
            <img
              className={contentStyles.img2}
              src={content.imgSrc2}
              alt={`${content.title} additional`}
            />
          )}
        </div>
      </div>

      <div className={contentStyles.description}>
        <p>{content.description1}</p>
        {content.description2 && <p>{content.description2}</p>}
        {content.imgSrc3 && (
          <img
            className={contentStyles.img3}
            src={content.imgSrc3}
            alt={`${content.title} additional`} 
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default FeatureContent;
