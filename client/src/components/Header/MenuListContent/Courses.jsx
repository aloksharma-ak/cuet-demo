import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import style from "./Courses.module.css";
import SubjectComponent from "./CourseCard/SubjectComponent";

const subjects = {
  "11th Class": {
    Science: [
      {
        name: "Physics:",
        desc: "Understanding the Basics of Motion and Matter",
      },
      { name: "Chemistry:", desc: "Exploring the Building Blocks of Matter" },
      {
        name: "Biology:",
        desc: "Foundations of Life and Biological Processes",
      },
      { name: "Mathematics:", desc: "The Language of Logic and Numbers" },
    ],
    Commerce: [
      { name: "Mathematics:", desc: "The Language of Logic and Numbers" },
      { name: "Economics:", desc: "Exploring Microeconomic Theories" },
      { name: "Accountancy:", desc: "Building Financial Foundations" },
      {
        name: "Business Studies:",
        desc: "The World of Enterprises and Management",
      },
    ],
    Humanities: [
      { name: "Economics:", desc: "Exploring Microeconomic Theories" },
      {
        name: "Political Science:",
        desc: "Foundations of Governance and Political Theory",
      },
      {
        name: "History:",
        desc: "Tracing Ancient Civilizations to the Medieval Era",
      },
      {
        name: "Geography:",
        desc: "Understanding the Earth’s Physical Features",
      },
    ],
  },
  "12th Class": {
    Science: [
      {
        name: "Physics:",
        desc: "Mastering Modern Physics and Electromagnetism",
      },
      {
        name: "Chemistry:",
        desc: "Advancing in Organic and Physical Chemistry",
      },
      { name: "Biology:", desc: "Genetics, Evolution, and Biotechnology" },
      { name: "Mathematics:", desc: "Advanced Calculus and Analytical Tools" },
    ],
    Commerce: [
      { name: "Mathematics:", desc: "Advanced Calculus and Analytical Tools" },
      { name: "Economics:", desc: "Macro Concepts for a Global Perspective" },
      {
        name: "Accountancy:",
        desc: "Mastering Financial Statements and Analysis",
      },
      {
        name: "Business Studies:",
        desc: "Advanced Principles of Business Management",
      },
    ],
    Humanities: [
      { name: "Economics:", desc: "Macro Concepts for a Global Perspective" },
      { name: "Political Science:", desc: "India’s Role in Global Politics" },
      {
        name: "History:",
        desc: "Modern History and the Making of the Contemporary World",
      },
      { name: "Geography:", desc: "Human Geography and Resource Management" },
    ],
  },
  CUET: {
    "CUET-UG": [
      {
        name: "CUET English:",
        desc: "Focus on reading comprehension, grammar, vocabulary, and verbal ability",
      },
      {
        name: "CUET General:",
        desc: "Achieving Excellence in General Knowledge and Aptitude",
      },
      {
        name: "CUET General + English Language Preparation:",
        desc: "An integrated program for balanced preparation",
      },
    ],
    "CUET-PG": [
      {
        name: "",
        desc: "",
      },
      {
        name: "",
        desc: "",
      },
      {
        name: "",
        desc: "",
      },
    ],
  },
};

const scholarships = {
  "11th Class": {
    eligible: "Eligible for 100% scholarship",
    name: "CUET SPARK",
    tag: "Navigating the Early Years",
    program: "2 Years Foundations Level Program",
    class: "For Class 11th, 12th Board, and CUET Preparation",
    desc: "It helps you prepare for your 11th and 12th board exams and the CUET. This program combines your school subjects with CUET preparation, so you’re fully ready to achieve your goals.",
    duration: "2 Years",
    eligibility: "Students currently in Class 11",
    mode: "Offline/Online (Based on your preference)",
    enroll:
      "Enroll now in the CUET SPARK Program and take the first step towards a brighter future.",
    GrAction: "Enroll Now",
    url: "/spark-program",
  },
  "12th Class": {
    eligible: "Eligible for 100% scholarship",
    name: "CUET SHINE",
    tag: "A Year to the Top",
    program: "1 Year Intermediate Level Program",
    class: "For Class 12th Board and CUET Preparation",
    desc: "Prepare for board exams and CUET with smart strategies, clear concepts, and focused practice to score high and reach your goal.",
    duration: "1 Year 6 Months",
    eligibility: "Students currently in Class 12",
    mode: "Offline/Online (Based on your preference)",
    enroll:
      "Enroll now in the CUET SHINE Program and take the first step towards a brighter future.",
    GrAction: "Enroll Now",
    url: "/shine-program",
  },
  CUET: {
    eligible: "Eligible for 100% scholarship",
    name: "CUET STAR",
    tag: "The Ultimate Preparation",
    program: "Comprehensive Coaching Program",
    class: "For CUET Final Exam",
    desc: "A comprehensive CUET preparation program covering all mandatory subjects across Commerce, Humanities, and Science domains, along with General Test and English Language.",
    duration: "Flexible based on Examination Date",
    eligibility: "CUET aspirants preparing for final exams",
    mode: "Offline/Online (Based on your preference)",
    enroll:
      "Enroll now in the CUET STAR Program and take the first step towards a brighter future.",
    GrAction: "Enroll Now",
    url: "/star-program",
  },
};

const courseDataMap = {
  "11th Class": {
    Science: (
      <SubjectComponent
        subjects={subjects["11th Class"].Science}
        scholarships={scholarships["11th Class"]}
      />
    ),
    Commerce: (
      <SubjectComponent
        subjects={subjects["11th Class"].Commerce}
        scholarships={scholarships["11th Class"]}
      />
    ),
    Humanities: (
      <SubjectComponent
        subjects={subjects["11th Class"].Humanities}
        scholarships={scholarships["11th Class"]}
      />
    ),
  },
  "12th Class": {
    Science: (
      <SubjectComponent
        subjects={subjects["12th Class"].Science}
        scholarships={scholarships["12th Class"]}
      />
    ),
    Commerce: (
      <SubjectComponent
        subjects={subjects["12th Class"].Commerce}
        scholarships={scholarships["12th Class"]}
      />
    ),
    Humanities: (
      <SubjectComponent
        subjects={subjects["12th Class"].Humanities}
        scholarships={scholarships["12th Class"]}
      />
    ),
  },
  CUET: {
    "CUET-UG": (
      <SubjectComponent
        subjects={subjects.CUET["CUET-UG"]}
        scholarships={scholarships.CUET}
      />
    ),
    "CUET-PG": (
      <SubjectComponent
        data={`Coming Soon`}
      />
    ),
  },
};

const Courses = () => {
  const menuItemsData = Object.keys(courseDataMap);
  const [selectedMainItem, setSelectedMainItem] = useState(menuItemsData[0]);
  const [selectedSubItem, setSelectedSubItem] = useState(
    Object.keys(courseDataMap[menuItemsData[0]])[0]
  );

  const handleMainClick = (mainItem) => {
    setSelectedMainItem(mainItem);
    const firstSubItem = Object.keys(courseDataMap[mainItem])[0];
    setSelectedSubItem(firstSubItem);
  };

  const handleSubClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  const animationSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className={style.menuDrop}>
      <animated.div style={animationSpring} className={style.menuDropContainer}>
        <div className={style.menuDropHeader}>
          {menuItemsData.map((item, index) => (
            <h2
              key={index}
              className={`${style.menuItem} ${
                index % 2 === 0 ? style.bgDarkGray : style.bgLightGray
              } ${selectedMainItem === item ? style.selected : ""}`}
              onMouseEnter={() => handleMainClick(item)}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className={style.subContainerContainer}>
          <SubContainer
            menuItemsDataStream={Object.keys(courseDataMap[selectedMainItem])}
            selectedSubItem={selectedSubItem}
            handleSubClick={handleSubClick}
          />
          <CourseDetails
            courseDetails={courseDataMap[selectedMainItem][selectedSubItem]}
          />
        </div>
      </animated.div>
    </div>
  );
};

const SubContainer = ({
  menuItemsDataStream,
  selectedSubItem,
  handleSubClick,
}) => {
  const subContainerSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={subContainerSpring} className={style.subContainer}>
      <div className={style.menuDropHead}>
        {menuItemsDataStream.map((item, index) => (
          <h2
            key={index}
            className={`${style.menuItem} ${
              index % 2 === 0 ? style.bgDarkGray : style.bgLightGray
            } ${selectedSubItem === item ? style.selected : ""}`}
            onMouseEnter={() => handleSubClick(item)}
          >
            {item} <IoIosArrowForward />
          </h2>
        ))}
      </div>
    </animated.div>
  );
};

const CourseDetails = ({ courseDetails }) => {
  const courseDetailsSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(10px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={courseDetailsSpring} className={style.courseDetails}>
      <div>{courseDetails}</div>
    </animated.div>
  );
};

export default Courses;
