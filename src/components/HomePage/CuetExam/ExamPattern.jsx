import React from "react";
import { PiArrowBendDownRightLight } from "react-icons/pi";
import styles from "./ExamPattern.module.css"; // Import CSS Module

const patternList = [
  {
    head: "Mode of Exam:",
    desc: "CUET will be conducted in a hybrid format, offering both Computer-Based Test (CBT) and Pen & Paper options.",
  },
  {
    head: "Medium of Exam:",
    desc: "The exam will be available in 13 languages, including English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu.",
  },
  {
    head: "Number of Shifts:",
    desc: "The exam may be held across three shifts each day.",
  },
  {
    head: "Duration:",
    desc: "Each shift will last for approximately two hours. Additionally, PwBD candidates will be provided with 20 minutes of extra time for every hour of the exam.",
  },
  {
    head: "Sections:",
    desc: "The exam will have three sections: Languages, Domain-Specific Subjects, and a General Test.",
  },
  {
    head: "Question Format:",
    desc: "The test will consist of multiple-choice questions (MCQs).",
  },
  {
    head: "Number of Questions:",
    desc: "Candidates must answer 40 out of 50 questions for most test papers, while the General Test will have 50 out of 60 questions (with a choice to skip 10). The duration for most papers will be 45 minutes, except for subjects like Mathematics, Applied Mathematics, Accountancy, Physics, Chemistry, Economics, Computer Science/Informatics Practices, and the General Test, which will have a duration of 60 minutes.",
  },
  {
    head: "Marking Scheme:",
    desc: "Candidates will receive 5 marks for each correct answer, while 1 mark will be deducted for every incorrect response.",
  },
];

const ExamPattern = () => (
  <div className={styles.examPattern}>
    <div className={styles.heading}>
      <h2>CUET UG Exam Pattern</h2>
    </div>
    <div className={styles.titleDesc}>
      <div className={styles.icon}>
        <PiArrowBendDownRightLight />
      </div>
      <p>Here are the key details for CUET 2025, as provided by the NTA:</p>
    </div>
    <div className={styles.patternContainer}>
      {patternList.map((item, index) => (
        <div key={index} className={styles.patterList}>
          <div className={styles.patterItemHead}>{item.head}</div>
          <div className={styles.patterItemDesc}>{item.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ExamPattern;
