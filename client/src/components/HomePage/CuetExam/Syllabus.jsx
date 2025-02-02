import React from "react";
import styles from "./Syllabus.module.css";
import { PiArrowBendDownRightLight } from "react-icons/pi";

import accountancy_pdf from "../../../assets/domain/accountancy.pdf";
import anthropology_pdf from "../../../assets/domain/anthropology.pdf";
import biology_pdf from "../../../assets/domain/BIOLOGY.pdf";
import chemistry_pdf from "../../../assets/domain/chemistry.pdf";
import economics_pdf from "../../../assets/domain/economics.pdf";
import entrepreneurship_pdf from "../../../assets/domain/entrepreneurship.pdf";
import geography_pdf from "../../../assets/domain/geography-geology.pdf";
import home_science_pdf from "../../../assets/domain/home-science.pdf";
import languages_pdf from "../../../assets/domain/language-syllabus.pdf";
import mass_media_pdf from "../../../assets/domain/mass-media.pdf";
import performing_arts_pdf from "../../../assets/domain/performing-arts-syllabus.pdf";
import physics_pdf from "../../../assets/domain/physics.pdf";
import psychology_pdf from "../../../assets/domain/psychology.pdf";
import sociology_pdf from "../../../assets/domain/sociology.pdf";
import tourism_pdf from "../../../assets/domain/Tourism-Syllabus.pdf";
import agriculture_pdf from "../../../assets/domain/agriculture.pdf";
import art_education_pdf from "../../../assets/domain/art-education-painting-and-sculpture.pdf";
import business_studies_pdf from "../../../assets/domain/business-studies.pdf";
import computer_science_pdf from "../../../assets/domain/computer-science.pdf";
import engineering_graphics_pdf from "../../../assets/domain/eng-graphics.pdf";
import environmental_studies_pdf from "../../../assets/domain/environmental-studies.pdf";
import history_pdf from "../../../assets/domain/history.pdf";
import knowledge_tradition_pdf from "../../../assets/domain/knowledge-traditions.pdf";
import legal_studies_pdf from "../../../assets/domain/legal-studies.pdf";
import mathematics_pdf from "../../../assets/domain/mathematics.pdf";
import physical_education_pdf from "../../../assets/domain/physical-education.pdf";
import politial_science_pdf from '../../../assets/domain/political-science.pdf'
import sanskrit_pdf from "../../../assets/domain/sanskrit-domain.pdf";
import teaching_aptitude_pdf from "../../../assets/domain/teaching-aptitude.pdf";
import fashion_studies_pdf from "../../../assets/domain/Fashion-Studies.pdf";
import general_test_pdf from "../../../assets/domain/GT-syllabus.pdf";

const listData = [
  { name: 'Accountancy', url: accountancy_pdf },
  { name: 'Anthropology', url: anthropology_pdf },
  { name: 'Biology', url: biology_pdf },
  { name: 'Chemistry', url: chemistry_pdf },
  { name: 'Economics / Business Economics', url: economics_pdf },
  { name: 'Entrepreneurship', url: entrepreneurship_pdf },
  { name: 'Geography', url: geography_pdf },
  { name: 'Home Science', url: home_science_pdf },
  { name: 'Languages (IA & IB)', url: languages_pdf },
  { name: 'Mass Media and Communication', url: mass_media_pdf },
  { name: 'Performing Arts', url: performing_arts_pdf },
  { name: 'Physics', url: physics_pdf },
  { name: 'Psychology', url: psychology_pdf },
  { name: 'Sociology', url: sociology_pdf },
  { name: 'Tourism', url: tourism_pdf },
  { name: 'Agriculture', url: agriculture_pdf },
  { name: 'Art Education Painting and Sculpture', url: art_education_pdf },
  { name: 'Business Studies', url: business_studies_pdf },
  { name: 'Computer Science', url: computer_science_pdf },
  { name: 'Engineering Graphics', url: engineering_graphics_pdf },
  { name: 'Environmental Studies', url: environmental_studies_pdf },
  { name: 'History', url: history_pdf },
  { name: 'Knowledge Tradition - Practices India', url: knowledge_tradition_pdf },
  { name: 'Legal Studies', url: legal_studies_pdf },
  { name: 'Mathematics', url: mathematics_pdf },
  { name: 'Physical Education', url: physical_education_pdf },
  { name: 'Political Science', url: politial_science_pdf },
  { name: 'Sanskrit', url: sanskrit_pdf },
  { name: 'Teaching Aptitude', url: teaching_aptitude_pdf },
  { name: 'Fashion Studies', url: fashion_studies_pdf },
  { name: 'General Test', url: general_test_pdf },
];

const Syllabus = () => (
  <div className={styles.syllabus}>
    <h2>CUET UG Exam Syllabus</h2>
    <div className={styles.titleDesc}>
      <div className={styles.icon}>
        <PiArrowBendDownRightLight />
      </div>
      <p>
        Candidates applying for the CUET need to focus on different subjects based on their chosen courses. Typically, the exam will feature a combination of language-related questions, general knowledge, and subject-specific queries aligned with what students have studied in Class XII. Below is a list of subjects categorized by course:
      </p>
    </div>
    <div className={styles.syllabusContainer}>
      <ul className={styles.syllabusList}>
        {listData.map((data, index) => (
          <li key={index} className={styles.syllabusName}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">{data.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Syllabus;
