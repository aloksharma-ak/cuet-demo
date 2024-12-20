import React, { useState } from "react";
import FeatureTabs from "./FeatureTabs";
import FeatureContent from "./FeatureContent";
import styles from "./FeaturesSection.module.css"; // Import the CSS module for features section
import effects from "./FeatureEffects.module.css"; // Import the CSS module for animations
import dual_pedagogy from "../../../../assets/dual-pedagogy.webp";
import doubt_solving from "../../../../assets/doubt-solving.webp";
import content_relevancy from "../../../../assets/content-relevancy.webp";
import p2p from "../../../../assets/p2p.webp";
import p2p2 from "../../../../assets/p2p2.webp";

const features = [
  {
    title: "Dual Pedagogy",
    content: {
      imgSrc: dual_pedagogy,
      description1: `Listening passively has certain disadvantages because one is not actively involved in the learning process. And as we have limited attention spans, any student will not be able to listen attentively for an extended period of time.`,
      description2: `Hence short attention spans can be increased through iQuanta’s Dual pedagogy in the CAT online classes wherein the focus is not only on teaching theoretical concepts but also application-based learning.`,
    },
  },
  {
    title: "24*7 Doubt Solving",
    content: {
      imgSrc: doubt_solving,
      description1: "",
    },
  },
  {
    title: "Content Relevancy",
    content: {
      imgSrc: content_relevancy,
      description1:
        "Content Relevancy is one of the biggest features of iQuanta's best CAT coaching. Over the years it has been observed several times that the questions in exams like CAT, XAT and IIFT were similar to what was taught in the class.",
    },
  },
  {
    title: "Peer to Peer Learning",
    content: {
      imgSrc: p2p,
      imgSrc3: p2p2,
      description3:
        "A community is very important as having a dedicated community in one place will provide you with the necessary support for your CAT coaching.",
    },
  },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(effects.contentEnterActive);

  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      // Determine the direction of the animation based on the clicked index
      const isNext = index > activeIndex;

      // Set exit animation based on direction
      setAnimationClass(
        isNext ? effects.contentExitToLeft : effects.contentExitToRight
      );

      // Wait for the exit animation to finish before updating the content
      setTimeout(() => {
        setActiveIndex(index);
        // Set entry animation after content update
        setAnimationClass(
          isNext ? effects.contentEnterFromRight : effects.contentEnterFromLeft
        );

        // Trigger the actual entry animation
        setTimeout(() => {
          setAnimationClass(effects.contentEnterActive);
        }, 20); // Small timeout to ensure the class is applied
      }, 500); // Match the transition duration (0.5s)
    }
  };

  return (
    <div className={styles.fs}>
      <div className={styles.featuresSection}>
        <h2>iQuanta Features</h2>
        <FeatureTabs
          features={features}
          activeIndex={activeIndex}
          onTabClick={handleTabClick}
        />
        <div className={`${styles.featureContent} ${animationClass}`}>
          <FeatureContent content={features[activeIndex].content} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
