import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import style from "./SubjectComponent.module.css";
import { Link } from "react-router-dom";

const SubjectComponent = ({ subjects, scholarships, data }) => {
  return (
    <div className={style.subjectComponentContainer}>
      {scholarships && (
        <div className={style.subjectList}>
          <Link to="/our-courses">
            {subjects.map((subject, index) => (
              <div key={index} className={style.subjectCard}>
                <h3 className={style.subjectTitle}>{subject.name}</h3>
                <span className={style.subjectDesc}>{subject.desc}</span>
              </div>
            ))}
          </Link>
        </div>
      )}
      <div className={style.divider} />
      {/* Displaying the Scholarship Card */}
      {scholarships && (
        <div className={style.scholarshipCardContainer}>
          <ScholarshipCard scholarship={scholarships} />
        </div>
      )}
      {data && (
        <h2 className={style.comingSoon}>{data}</h2>
      )}
    </div>
  );
};

export default SubjectComponent;
