import React from "react";
import { Link } from "react-scroll";
import styles from "../JharkhandComponent/CuetGuide.module.css";

const Section = ({ section }) => {
  return (
    <li className={styles.section}>
      <Link
        to={`section-${section.section}`} // Updated to point to the ID of the section
        smooth={true}  offset={-80}
        duration={500}
        className={styles.sectionTitle}
      >
        {section.title}
      </Link>

      {section.subsections && (
        <ul className={styles.subsections}>
          {section.subsections.map((subsection, index) => (
            <Subsection key={index} title={subsection.title} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Subsection = ({ title }) => {
  return (
    <li className={styles.subsection}>
      <Link to={"section-1"} smooth={true} offset={-50} duration={500}>
        {title}
      </Link>
    </li>
  );
};

export default Section;


// Below is the code of Coaching Institute Section

import sciStyle from "./SectionCoachingInstitute.module.css";
export const SectionCoachingInstitute = ({ section }) => {
  return (
    <div className={sciStyle.section}>
      <h2 className={sciStyle.heading}>{section.heading}</h2>
      <ul className={sciStyle.content}>
        {section.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {section.explanation && <p className={sciStyle.explanation}>{section.explanation}</p>}
      {section.example && <p className={sciStyle.example}><strong>Example:</strong> {section.example}</p>}
      {section.quote && <blockquote className={sciStyle.quote}>{section.quote}</blockquote>}
      {section.caseStudy && (
        <p className={sciStyle.caseStudy}>
          <strong>Case Study:</strong> {section.caseStudy}
        </p>
      )}
    </div>
  );
};
