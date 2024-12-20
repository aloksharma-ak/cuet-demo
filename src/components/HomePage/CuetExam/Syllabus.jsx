import React from "react";
import { PiArrowBendDownRightLight } from "react-icons/pi";
import computer_science_pdf from "../../../assets/syllabus.pdf";
import styles from "./Syllabus.module.css";

const listData = [
  { name: 'Accountancy', url: computer_science_pdf },
  { name: 'Anthropology', url: computer_science_pdf },
  { name: 'Biology', url: computer_science_pdf },
  { name: 'Chemistry', url: computer_science_pdf },
  { name: 'Economics / Business Economics', url: computer_science_pdf },
  { name: 'Entrepreneurship', url: computer_science_pdf },
  { name: 'Geography', url: computer_science_pdf },
  { name: 'Home Science', url: computer_science_pdf },
  { name: 'Languages (IA & IB)', url: computer_science_pdf },
  { name: 'Mass Media and Communication', url: computer_science_pdf },
  { name: 'Performing Arts', url: computer_science_pdf },
  { name: 'Physics', url: computer_science_pdf },
  { name: 'Psychology', url: computer_science_pdf },
  { name: 'Sociology', url: computer_science_pdf },
  { name: 'Tourism', url: computer_science_pdf },
  { name: 'Agriculture', url: computer_science_pdf },
  { name: 'Art Education Painting and Sculpture', url: computer_science_pdf },
  { name: 'Business Studies', url: computer_science_pdf },
  { name: 'Computer Science', url: computer_science_pdf },
  { name: 'Engineering Graphics', url: computer_science_pdf },
  { name: 'Environmental Studies', url: computer_science_pdf },
  { name: 'History', url: computer_science_pdf },
  { name: 'Knowledge Tradition - Practices India', url: computer_science_pdf },
  { name: 'Legal Studies', url: computer_science_pdf },
  { name: 'Mathematics', url: computer_science_pdf },
  { name: 'Physical Education', url: computer_science_pdf },
  { name: 'Political Science', url: computer_science_pdf },
  { name: 'Sanskrit', url: computer_science_pdf },
  { name: 'Teaching Aptitude', url: computer_science_pdf },
  { name: 'Fashion Studies', url: computer_science_pdf },
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
