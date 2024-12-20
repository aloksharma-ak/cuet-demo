import React from "react";
import styles from "./CourseDetails.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { GiWhiteBook } from "react-icons/gi";

function CourseDetails() {
  const boxData = [
    {
      icon: <FaGraduationCap />,
      title: "Class Schedule",
      dec_1: "4 hrs/day (Five times a week classes). Total 20 hrs/week",
    },
    {
      icon: <GiWhiteBook />,
      title: "Study Content",
      dec_1: "Comprehensive Study Material",
      desc_2:
        "VMC provides its students with a set of study material (Modules + Workbooks) that has been scientifically prepared to ensure comprehension of even the most difficult topics",
      desc_3:
        "The study material covers every aspect of each topic and is completely self-sufficient",
    },
    {
      icon: <HiMiniPencilSquare />,
      title: "Practice",
      dec_1: "JEE Main Tests",
      desc_2: "10 Mock JEE Main Tests (CBT) + 5 Mock JEE Advanced Tests (CBT)",
      desc_3: "10 BITSAT Mock Tests + JEE Advanced Tests",
      desc_4: "Detailed Test Analysis",
      desc_5: "Personalized Performance Dashboard",
    },
  ];
  return (
    <div className={styles.courseDetails}>
      <div className={styles.courseDetailsDiv}>
        <span className={styles.contentTitle}>Course Details</span>
        <div className={styles.detailsBox}>
          {boxData.map((data, index) => (
            <div className={styles.box} key={index}>
              <div className={styles.left}>
                <span>{data.icon}</span>
                <h3>{data.title}</h3>
              </div>
              <div className={styles.right}>
                <p>{data.dec_1}</p>
                {data.desc_2 && <p>{data.desc_2}</p>}
                {data.desc_3 && <p>{data.desc_3}</p>}
                {data.desc_4 && <p>{data.desc_4}</p>}
                {data.desc_5 && <p>{data.desc_5}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.courseDetailsDiv}>
        <span className={styles.contentTitle}>Key Features</span>
        <ul>
          {[
            "600 hours of classes",
            "Fortnightly Tests",
            "Coverage of full syllabus of Class 11th & 12th",
            "CTS (Class Tutorial Sheets) in the form of HW after every class",
            "The Test Series, held at regular intervals, simulate the pattern and timing of the actual JEE and are held at Test Centers providing a real Exam-like experience to the students.",
          ].map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;
