import React, { useState, useCallback, useRef } from "react";
import styles from "./CuetExam.module.css";
import AboutCuet from "./AboutCuet";
import Eligibility from "./Eligibility";
import ExamPattern from "./ExamPattern";
import Syllabus from "./Syllabus";

const btnList = ["CUET", "Eligibility", "Exam Pattern", "Syllabus"];

function CuetExam() {
  const [selectedBtn, setSelectedBtn] = useState(btnList[0]);
  const [animationDirection, setAnimationDirection] = useState("leftToRight");
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [content, setContent] = useState(<AboutCuet />);

  const handleClickedBtn = useCallback(
    (e) => {
      const clickedBtn = e.target.textContent;
      const clickedIndex = btnList.indexOf(clickedBtn);
      const currentIndex = btnList.indexOf(selectedBtn);

      if (clickedBtn !== selectedBtn) {
        setAnimationDirection(
          currentIndex < clickedIndex ? "leftToRight" : "rightToLeft"
        );
        setSelectedBtn(clickedBtn);

        const contentMap = {
          CUET: <AboutCuet />,
          Eligibility: <Eligibility />,
          "Exam Pattern": <ExamPattern />,
          Syllabus: <Syllabus />,
        };
        setTriggerAnimation(false);
        setTimeout(() => {
          setContent(contentMap[clickedBtn]);
          setTriggerAnimation(true);
        }, 10);
      }
    },
    [selectedBtn]
  );

  const [openIndexMobile, setOpenIndexMobile] = useState(null);
  const contentRefs = useRef([]);

  const detailsSummaryData = [
    { title: "What is CUET?", content: <AboutCuet /> },
    { title: "CUET Eligibility", content: <Eligibility /> },
    { title: "CUET Exam Pattern", content: <ExamPattern /> },
    { title: "CUET Syllabus", content: <Syllabus /> },
  ];

  const handleMobileCuetToggle = (index) => {
    setOpenIndexMobile((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className={styles.cuetExam}>
        <div className={styles.cuetContainer}>
          <div className={styles.cuetHeading}>
            <h2 className={styles.cuetHeadingText}>Everything about CUET UG Exam</h2>
            <ul className={styles.cuetButtonList}>
              {btnList.map((btn, index) => (
                <li
                  key={index}
                  onClick={handleClickedBtn}
                  className={
                    selectedBtn === btn
                      ? `${styles.btn} ${styles.btnColored}`
                      : `${styles.btn} ${styles.btnUncolored}`
                  }
                >
                  {btn}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.cuetContentContainer}>
            <div
              className={`${styles.cuetContent} ${
                triggerAnimation ? styles[animationDirection] : ""
              }`}
            >
              {content}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileCuetExam}>
        <h3 className={styles.mobileCuetHeading}>All about CUET Exam</h3>
        <div className={styles.mobileCuetContainer}>
          {detailsSummaryData.map((data, index) => (
            <div key={index} className={styles.cuetDetails}>
              <div
                className={styles.mobileCuetSummary}
                onClick={() => handleMobileCuetToggle(index)}
              >
                {data.title}
              </div>
              <div
                className={`${styles.mobileCuetContent} ${
                  openIndexMobile === index ? styles.open : ""
                }`}
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    openIndexMobile === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                {data.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CuetExam;
