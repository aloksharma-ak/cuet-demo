import React from "react";
import styles from "./CuetGuideDelhi.module.css";
import { Link } from "react-scroll";

const cuetGuide = {
  title: "The Ultimate Guide to CUET Coaching in Delhi",
  tableOfContents: [
    {
      section: 1,
      title: "Introduction",
      subsections: [
        { subsection: 11, title: "What is CUET, and Why is It Important?" },
        { subsection: 12, title: "Why Delhi is a Hub for CUET Coaching" },
      ],
    },
    {
      section: 2,
      title: "Understanding CUET Coaching",
      subsections: [
        { subsection: 21, title: "What is CUET Coaching?" },
        { subsection: 22, title: "How CUET Coaching in Delhi Stands Out" },
        { subsection: 23, title: "Do You Really Need Coaching for CUET?" },
      ],
    },
    {
      section: 3,
      title: "CUET Coaching in NCR Cities",
    },
    {
      section: 4,
      title: "Choosing the Right CUET Coaching in Delhi",
    },
    {
      section: 5,
      title: "Benefits of Joining CUET Coaching in Delhi",
    },
    {
      section: 6,
      title: "Best CUET Coaching Institutes in Delhi",
    },
    {
      section: 7,
      title: "Tips for Maximizing CUET Preparation",
    },
    {
      section: 8,
      title: "FAQs About CUET Coaching in Delhi",
    },
    {
      section: 9,
      title: "Conclusion",
    },
  ],
};

const CuetGuideDelhi = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cuetGuide.title}</h1>
      <h2 className={styles.subTitle}>Table of Contents</h2>
      <ul className={styles.tableOfContents}>
        {cuetGuide.tableOfContents.map((section) => (
          <Section key={section.section} section={section} />
        ))}
      </ul>
    </div>
  );
};

const Section = ({ section }) => {
  return (
    <li className={styles.section}>
      {/* Link to section with dynamic ID */}
      <Link
        to={`section-${section.section}`}
        smooth={true}
        offset={-80}
        duration={500}
        className={styles.sectionTitle}
      >
        {section.title}
      </Link>

      {/* Render subsections if available */}
      {section.subsections && (
        <ul className={styles.subsections}>
          {section.subsections.map((subsection) => (
            <Subsection
              key={subsection.subsection}
              subsection={subsection}
              parentSection={section.section}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const Subsection = ({ subsection, parentSection }) => {
  return (
    <li className={styles.subsection}>
      {/* Link to subsection using parent-section and subsection */}
      <Link
        to={`section-${parentSection}-subsection-${subsection.subsection}`}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {subsection.title}
      </Link>
    </li>
  );
};

export default CuetGuideDelhi;
