import React from "react";
import styles from "./TypeOfScholarship.module.css";

const TypeOfScholarship = () => {
  return (
    <section className={styles.TypeOfScholarship}>
      <div className={styles.bottomSection}>
        <h2 className={styles.TypesHeading}>
          Types of scholarships that maybe you need for yourself
        </h2>
        <ScholarshipCards />
        {/* <div className={styles.TypesContainer}>
          <div className={styles.Type}>
            <h3 className={styles.TypeHeading}>Spark</h3>
            <p className={styles.TypeDesc}>
              Scholarship for Class 11 & CUET Aspirants
            </p>
            <p className={styles.tagLine}>
              "Empowering the journey from classroom to campus"
            </p>
          </div>
          <div className={styles.Type}>
            <h3 className={styles.TypeHeading}>Shine</h3>
            <p className={styles.TypeDesc}>
              Scholarship for Class 12 & CUET Candidates
            </p>
            <p className={styles.tagLine}>
              "Supporting dreams, from high school to higher education"
            </p>
          </div>
          <div className={styles.Type}>
            <h3 className={styles.TypeHeading}>Star</h3>
            <p className={styles.TypeDesc}>
              Scholarship for Dedicated CUET Preparations
            </p>
            <p className={styles.tagLine}>
              "Focused funding for CUET achievers"
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TypeOfScholarship;

import { Link } from "react-router-dom";
import cardStyles from "./ScholarshipCards.module.css";

const scholarships = [
  {
    title: "Spark",
    subtitle: "Empowering the Journey from Classroom to Campus",
    target:
      "Students stepping into Class 11 and aiming to pursue two years of preparation for both board exams and CUET to gain admission into India’s leading colleges.",
    details: [
      {
        icon: "🏆",
        head: "Top Achievers",
        text: [
          "Full tuition waiver for 11th and 12th grades, plus CUET preparation fees.",
          "Coverage of college application & admission charges, and full graduation fees.",
        ],
      },
      {
        icon: "☀️",
        head: "Merit-Based Discounts",
        text: ["Tuition discounts based on academic performance."],
      },
    ],
    buttonLabel: "Apply for Spark",
  },
  {
    title: "Shine",
    subtitle: "Supporting Dreams from High School to Higher Education",
    target:
      "Students preparing for their 12th board exams while simultaneously focusing on CUET strive to secure admission into India’s top universities, effectively balancing academic excellence with future aspirations.",
    details: [
      {
        icon: "🏆",
        head: "Top Achievers",
        text: [
          "Full tuition waiver for 12th and CUET preparation fees.",
          "CUET application fee coverage and college admission fees.",
        ],
      },
      {
        icon: "☀️",
        head: "Merit-Based Discounts",
        text: ["Score-Based tuition discounts for passionate learners."],
      },
    ],
    buttonLabel: "Apply for Shine",
  },
];

const scholarship = [
  {
    title: "Star",
    subtitle: "Focused Funding for CUET Achievers",
    target:
      "Students focused exclusively on CUET preparation with aspirations to secure admission to their dream college.",
    details: [
      {
        icon: "🏆",
        head: "Top Achievers",
        text: ["Complete tuition waiver for CUET preparation."],
      },
      {
        icon: "☀️",
        head: "Merit-Based Discounts",
        text: ["Discounts for students with strong academic scores."],
      },
    ],
    buttonLabel: "Apply for Star",
  },
];

export const ScholarshipCards = () => {
  return (
    <div className={cardStyles.container}>
      {/* Left Section */}
      <div className={cardStyles.leftSection}>
        {scholarships.map((scholarship, index) => (
          <div key={index} className={cardStyles.card}>
            <h2 className={cardStyles.title}>{scholarship.title}</h2>
            <h3 className={cardStyles.subtitle}>{scholarship.subtitle}</h3>
            <p className={cardStyles.target}>
              <strong>Who It’s For:</strong> {scholarship.target}
            </p>
            <ul className={cardStyles.details}>
              {scholarship.details.map((detail, i) => (
                <li key={i} className={cardStyles.detailItem}>
                  <span className={cardStyles.icon}>{detail.icon}</span>
                  <div className={cardStyles.detailContent}>
                    <h4 className={cardStyles.detailHead}>{detail.head}</h4>
                    <ul>
                      {detail.text.map((text, ind) => (
                        <li key={ind} className={cardStyles.detailDesc}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/scholarship-form">
              <button className={cardStyles.applyButton}>
                {scholarship.buttonLabel}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className={cardStyles.rightSection}>
        {scholarship.map((scholarship, index) => (
          <div key={index} className={cardStyles.card}>
            <h2 className={cardStyles.title}>{scholarship.title}</h2>
            <h3 className={cardStyles.subtitle}>{scholarship.subtitle}</h3>
            <p className={cardStyles.target}>
              <strong>Who It’s For:</strong> {scholarship.target}
            </p>
            <ul className={`${cardStyles.details} ${cardStyles.detailsFlex}`}>
              {scholarship.details.map((detail, i) => (
                <li key={i} className={cardStyles.detailItem}>
                  <span className={cardStyles.icon}>{detail.icon}</span>
                  <div className={cardStyles.detailContent}>
                    <h4 className={cardStyles.detailHead}>{detail.head}</h4>
                    <ul>
                      {detail.text.map((text, ind) => (
                        <li key={ind} className={cardStyles.detailDesc}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/cuet-scholarship/star-scholarship">
              <button className={cardStyles.applyButton}>
                {scholarship.buttonLabel}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
