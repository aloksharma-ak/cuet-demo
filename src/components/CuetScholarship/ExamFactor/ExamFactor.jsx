import React from "react";
import styles from "./ExamFactor.module.css";
import termStyles from "./TermCondition.module.css";
import card_bg_image from "../../../assets/card_background_curve.png";
import people from "../../../assets/peoples.svg";
import paper from "../../../assets/paper.svg";
import diagram_paper from "../../../assets/digram_paper.svg";
import thumb_paper from "../../../assets/thumb_paper.svg";
import term_and_condition from "../../../assets/term_and_condition.avif";
import { IoCheckmarkCircle } from "react-icons/io5";

function ExamFactor() {
  const card_data = [
    {
      img: people,
      title: "Best CUET Faculty",
      desc: "Benefit from expert mentorship at every step of your CUET (UG) 2025 preparation.",
    },
    {
      img: paper,
      title: "Tailored for Efficient Learning",
      desc: "Access key insights tailored for students seeking to optimise their study time.",
    },
    {
      img: diagram_paper,
      title: "Diagnostic and Mock Test Series",
      desc: "Use our diagnostic tools to identify your strengths and areas for improvement and assess your CUET preparation through Mock Tests.",
    },
    {
      img: thumb_paper,
      title: "Feedback and Expert Guidance",
      desc: "Gain a thorough understanding and clear direction to excel in CUET (UG) 2025.",
    },
  ];

  return (
    <div className={styles.examFactor}>
      {/* <div className={styles.top}>
        <h2>About ExamFactor</h2>
        <p>
          ExamFactor is a part of the 100+ year old ABP group that has under its
          umbrella leading educational publishing houses with a reach to over
          10,000 schools.
        </p>
        <p>
          ExamFactor is a tech enabled platform that helps students revise, test
          and perform in the CUET UG examination. With crash courses having
          comprehensive coverage of curriculum and realistic mock tests that
          simulate exam conditions , ExamFactor is designed by experts to help
          students get the best possible result.
        </p>
      </div> */}

      {/* <div className={styles.bottom}>
        <h2>
          Why <span>ExamFactor</span>
        </h2>

        <div className={styles.cardContainer}>
          {card_data.map((card, index) => (
            <div className={styles.card} key={index}>
              <img className={styles.cardBg} src={card_bg_image} alt="card background" />
              <div className={styles.cardContent}>
                <div className={styles.image}>
                  <img src={card.img} alt="icon" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className={termStyles.termCondition}>
        <div className={termStyles.termConditionContent}>
          <img src={term_and_condition} alt="Term and Condition" />
          <div className={termStyles.rightContent}>
            <h2>Terms & Conditions</h2>
            <div className={termStyles.item}>
              <div className={termStyles.icon}>
                <IoCheckmarkCircle />
              </div>
              <p>All the information provided is accurate to the best of our knowledge.</p>
            </div>
            <div className={termStyles.item}>
              <div className={termStyles.icon}>
                <IoCheckmarkCircle />
              </div>
              <p>ExamFactor reserves the right to modify any information at any time.</p>
            </div>
            <div className={termStyles.contentBtn}><a href="/terms">View Full Terms</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamFactor;
