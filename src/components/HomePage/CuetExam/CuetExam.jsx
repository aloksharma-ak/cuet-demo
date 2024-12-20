import React, { useState, useCallback, useRef } from "react";
import "./CuetExam.css";
import styles from "./CuetExam.module.css";
import AboutCuet from "./AboutCuet";
import Eligibility from "./Eligibility";
import ExamPattern from "./ExamPattern";
import Syllabus from "./Syllabus";

const btnList = ["CUET", "Eligibility", "Exam Pattern", "Syllabus"];

function CuetExam() {
  const [selectedBtn, setSelectedBtn] = useState(btnList[0]);
  const [animationDirection, setAnimationDirection] = useState("left-to-right");
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [content, setContent] = useState(<AboutCuet />);

  const handleClickedBtn = useCallback(
    (e) => {
      const clickedBtn = e.target.textContent;
      const clickedIndex = btnList.indexOf(clickedBtn);
      const currentIndex = btnList.indexOf(selectedBtn);

      if (clickedBtn !== selectedBtn) {
        setAnimationDirection(
          currentIndex < clickedIndex ? "left-to-right" : "right-to-left"
        );

        // Update the selected button and content
        setSelectedBtn(clickedBtn);
        const contentMap = {
          CUET: <AboutCuet />,
          Eligibility: <Eligibility />,
          "Exam Pattern": <ExamPattern />,
          Syllabus: <Syllabus />,
        };
        setContent(contentMap[clickedBtn]);

        // Trigger the animation
        setTriggerAnimation(false);
        setTimeout(() => {
          setTriggerAnimation(true);
        }, 10);
      }
    },
    [selectedBtn]
  );

  // Handle the click event of details summary
  const [openIndexMobile, setOpenIndexMobile] = useState(0);
  const contentRefs = useRef([]);

  const detailsSummaryData = [
    { title: "What is CUET?", content: <AboutCuet /> },
    { title: "CUET Eligibility", content: <Eligibility /> },
    { title: "CUET Exam Pattern", content: <ExamPattern /> },
    { title: "CUET Syllabus", content: <Syllabus /> },
  ];

  const handleMobileCuetToggle = (index) => {
    setOpenIndexMobile((prevIndex) => (prevIndex === index ? null : index)); // Toggle open index
  };

  return (
    <>
      <div className={styles.cuetExam}>
        <div className={styles.cuetContainer}>
          <div className={styles.cuetHeading}>
            <h2 className={styles.cuetHeadingText}>Everything about CUET UG Exam</h2>
            <ul className={styles.cuetButton}>
              {btnList.map((btn, index) => (
                <li
                  key={index}
                  onClick={handleClickedBtn}
                  className={
                    selectedBtn === btn ? styles.btnColored : styles.btnUncolored
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
                triggerAnimation ? animationDirection : ""
              }`}
            >
              {content}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-cuet-exam">
        <h3 className="mobile-cuet-heading">All about CUET Exam</h3>
        <div className="mobile-cuet-container">
          {detailsSummaryData.map((data, index) => (
            <div key={index} className="cuet-details">
              <div
                className="mobile-cuet-details-summary"
                onClick={() => handleMobileCuetToggle(index)}
              >
                {data.title}
              </div>
              <div 
              className={`mobile-cuet-details-content ${openIndexMobile === index ? 'open' : ''}`} 
              ref={(el) => contentRefs.current[index] = el}
              style={{ maxHeight: openIndexMobile === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px' }}
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
