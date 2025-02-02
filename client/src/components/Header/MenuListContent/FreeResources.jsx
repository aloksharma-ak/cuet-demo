import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./FreeResources.module.css";
import catPastYearPapersImg from "../../../assets/cat-past-year-papers.webp";
import quantTopicWiseQuestionsImg from "../../../assets/quant-topic-wis-qeuestions.webp";
import lrdiTopicWiseQuestionsImg from "../../../assets/lrdi-topic-wise-questions.webp";
import EleventhImg from "../../../assets/12th_class_img.avif";
import TwelveImg from "../../../assets/11th_class_bg.jpg";
import CuetImg from "../../../assets/cuet_bg_img.avif";
import ReAttemptImg from "../../../assets/reattapmpt_bg_img.avif";
import pyq_English from "../../../assets/pyq_English2024.pdf";
import pyq_Hindi from "../../../assets/pyq_Hindi-102-MSS-Set-A.pdf";
import pyq_Accountancy from "../../../assets/pyq_accountancy2023.pdf";
import pyq_BusinessStudies from "../../../assets/pyq_Business-Studies_compressed.pdf";
import pyq_MemoryBasedEnglish from "../../../assets/pyq_CUET-Memory-Based-English-Question-Paper-2023-22nd-May-2023.pdf";
import pyq_UGEnglishAnswerKey from "../../../assets/pyq_CUET-UG-English-Answer-Key-2024.pdf";
import pyq_EnglishGrammar from "../../../assets/pyq_DocScanner-15-May-2024-3-56 pm-1.pdf";
import pyq_GeneralTest from "../../../assets/pyq_general test.pdf";
import pyq_MemoryBasedCUETEnglishQuestionPaper from "../../../assets/pyq_Memory-Based-CUET-English-Question-Paper-2023.docx.pdf";
import pyq_GeneralTestEnglish from "../../../assets/pyq_Paper_20230319130715.pdf";
import { useSpring, animated } from "@react-spring/web";

function FreeResources() {
  const menuData = {
    menuItems: [
      "Revision Notes",
      "CUET Past Papers",
      "Sample Papers",
      "Answer Key & Solutions",
    ],
    descriptions: {
      "Revision Notes": "Revision Notes Past Year Papers",
      "CUET Past Papers": "12th Class Past Year Papers",
      "Sample Papers": "CUET UG Past Year Papers",
      "Answer Key & Solutions":
        "Answer Key & Solutions CUET UG Past Year Papers",
    },
    eleventhClass: [
      {
        img: catPastYearPapersImg,
        url: pyq_English,
        title: "English",
      },
      {
        img: quantTopicWiseQuestionsImg,
        url: pyq_Hindi,
        title: "Hindi",
      },
      {
        img: lrdiTopicWiseQuestionsImg,
        url: pyq_Accountancy,
        title: "Accountancy",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_MemoryBasedEnglish,
        title: "Memory Based English",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_UGEnglishAnswerKey,
        title: "English Answer Key",
      },
    ],
    twelfthClass: [
      {
        img: catPastYearPapersImg,
        url: pyq_BusinessStudies,
        title: "Business Studies",
      },
      {
        img: quantTopicWiseQuestionsImg,
        url: pyq_GeneralTestEnglish,
        title: "General Test English",
      },
      {
        img: lrdiTopicWiseQuestionsImg,
        url: pyq_MemoryBasedCUETEnglishQuestionPaper,
        title: "Memory Based CUET English",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_MemoryBasedEnglish,
        title: "Memory Based English",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_UGEnglishAnswerKey,
        title: "English Answer Key",
      },
    ],
    cuetCourse: [
      {
        img: catPastYearPapersImg,
        url: pyq_English,
        title: "English",
      },
      {
        img: quantTopicWiseQuestionsImg,
        url: pyq_Hindi,
        title: "Hindi",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_MemoryBasedEnglish,
        title: "Memory Based English",
      },

      {
        img: catPastYearPapersImg,
        url: pyq_EnglishGrammar,
        title: "English Grammar",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_GeneralTest,
        title: "General Test",
      },
    ],
    cuetReAttempt: [
      {
        img: catPastYearPapersImg,
        url: pyq_English,
        title: "English",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_Accountancy,
        title: "Accountancy",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_BusinessStudies,
        title: "Business Studies",
      },
      {
        img: catPastYearPapersImg,
        url: pyq_MemoryBasedCUETEnglishQuestionPaper,
        title: "Memory Based CUET English",
      },
    ],
    menuImages: {
      "Revision Notes": EleventhImg,
      "CUET Past Papers": TwelveImg,
      "Sample Papers": CuetImg,
      "Answer Key & Solutions": ReAttemptImg,
    },
  };

  const [selectedItem, setSelectedItem] = useState("Revision Notes");

  const {
    menuItems,
    eleventhClass,
    twelfthClass,
    cuetCourse,
    cuetReAttempt,
    descriptions,
    menuImages,
  } = menuData;

  const getSelectedCourse = () => {
    switch (selectedItem) {
      case "Revision Notes":
        return eleventhClass;
      case "CUET Past Papers":
        return twelfthClass;
      case "Sample Papers":
        return cuetCourse;
      case "Answer Key & Solutions":
        return cuetReAttempt;
      default:
        return [];
    }
  };

  const animationSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  const selectedImage = menuImages[selectedItem] || null;
  const selectedDescription = descriptions[selectedItem] || "";

  return (
    <div className={styles.menuDrop}>
      <animated.div
        style={animationSpring}
        className={styles.menuDropContainer}
      >
        <div className={styles.menuDropLeftCol}>
          <div className={styles.menuDropStream}>
            {menuItems.map((item, index) => (
              <h3
                key={item}
                className={`${styles.menuItem} ${
                  index % 2 === 0 ? styles.bgDarkGray : styles.bgLightGray
                } ${selectedItem === item ? styles.selected : ""}`}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setSelectedItem(item)}
              >
                {item} <IoIosArrowForward />
              </h3>
            ))}
          </div>

          <div className={styles.menuDropStreamDetails}>
            {selectedItem ? (
              <>
                <h3 className={styles.headingDesc}>{selectedDescription}</h3>
                <div className={styles.flexContainer}>
                  <div className={styles.flexColumn}>
                    {getSelectedCourse().length > 0 ? (
                      getSelectedCourse().map((paper, index) => (
                        <Link
                          to={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={index}
                          className={styles.pastPaperLink}
                        >
                          <img
                            src={paper.img}
                            alt={selectedItem}
                            loading="lazy"
                          />
                          <span>{paper.title}</span>
                        </Link>
                      ))
                    ) : (
                      <p>No course available for {selectedItem}</p>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <h3>Please select a menu item to see past papers</h3>
            )}
          </div>
        </div>

        <div className={styles.menuDropContainerImg}>
          {selectedImage ? (
            <img src={selectedImage} alt={selectedItem} />
          ) : (
            <p>No image available for {selectedItem}</p>
          )}
        </div>
      </animated.div>
    </div>
  );
}

export default FreeResources;
