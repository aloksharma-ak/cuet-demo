import React from "react";
import styles from "./AssessmentVision.module.css";
import assessment_img from "../../../assets/assessment_img.webp";

const AssessmentVisionComponent = ({ toggleFormOverlay }) => (
  <div className={styles.assessmentVision}>
    <div className={styles.floatingImg}>
      <img src={assessment_img} alt="assessment-vision" />
    </div>
    <div className={styles.visionText}>
      <h2 className={styles.heading}>
        Stream Counseling - <span>Disha Plus</span>
      </h2>
      <p className={styles.description}>
        Choosing the right stream is crucial, as it shapes future academic and
        career paths. Disha Plus is designed to support students as they
        navigate the early stages of academic decision-making. By understanding
        each student’s strengths and interests, we guide them in choosing the
        right stream—Science, Commerce, or Humanities. With experienced
        counselors, students gain clarity to choose streams that align with
        their passions and potential, ensuring confidence and commitment to
        their educational journey.
      </p>
      <h3 className={styles.subHeading}>Features</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span>Personalized Aptitude Assessment:</span> Discover your unique
          strengths and potential areas of interest.
        </li>
        <li className={styles.listItem}>
          <span>Informed Stream Selection:</span> Gain insight into each
          stream's scope and career options.
        </li>
        <li className={styles.listItem}>
          <span>One-on-One Expert Counseling:</span> Benefit from personalized
          guidance to make confident academic choices.
        </li>
      </ul>

      <div className={styles.proceedToPay}>
        <div className={styles.contentDiv} onClick={toggleFormOverlay}>
          <h2>Proceed to Register</h2>
        </div>
      </div>
    </div>
  </div>
);

const CareerCounselling = ({ toggleFormOverlay }) => (
  <div className={styles.assessmentVision}>
    <div className={styles.visionText}>
      <h2 className={styles.heading}>
        Career Counseling - <span>Vision Plus</span>
      </h2>
      <p className={styles.description}>
        Selecting a career is a life-defining choice. Vision Plus is a
        comprehensive career counseling program tailored for students preparing
        to transition to higher education. With a focus on career exploration,
        college admissions, and exam preparation, Vision Plus equips students
        with the tools needed for success. From identifying suitable career
        paths to mastering college applications, we're here every step of the
        way.
      </p>
      <h3 className={styles.subHeading}>Features</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span>Career Exploration Workshops:</span> Learn about potential
          career paths and identify your ideal future.
        </li>
        <li className={styles.listItem}>
          <span>Exam & Application Guidance:</span> Expert advice on college
          applications, entrance exams, and more.
        </li>
        <li className={styles.listItem}>
          <span>Skill-Building Support:</span> Develop essential skills for a
          competitive edge in admissions and beyond.
        </li>
      </ul>

      <div className={styles.proceedToPay}>
        <div className={styles.contentDiv} onClick={toggleFormOverlay}>
          <h2>Proceed to Register</h2>
        </div>
      </div>
    </div>
    <div className={`${styles.floatingImg} ${styles.careerImg}`}>
      <img src={assessment_img} alt="assessment-vision" />
    </div>
  </div>
);

function AssessmentVision({ toggleFormOverlay }) {
  return (
    <>
      <AssessmentVisionComponent toggleFormOverlay={toggleFormOverlay} />
      <CareerCounselling toggleFormOverlay={toggleFormOverlay} />
    </>
  );
}

export default AssessmentVision;
