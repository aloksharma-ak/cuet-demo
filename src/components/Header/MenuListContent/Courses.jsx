import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import CourseCard, { CourseCardBig } from "./CourseCard/CourseCard";
import CourseCardCUET from "./CourseCard/CourseCardCUET";
import ScholarshipCard from "./CourseCard/ScholarshipCard";
import style from "./Courses.module.css";

import Class_11_Science_Combo_Plus from "../../../assets/Class_11_Science_Combo Plus.png";
import Class_11_Science_Comprehensive_Plus from "../../../assets/Class_11_Science_Comprehensive Plus.png";
import Class_11_Science_Integrated_Plus from "../../../assets/Class_11_Science_Integrated Plus.png";
import Class_11_Science_Linguistic_Plus from "../../../assets/Class_11_Science_Linguistic Plus.png";
import Class_11_Science_Select_Plus from "../../../assets/Class_11_Science_Select Plus.png";

import Class_11_Commerce_Combo_Plus from "../../../assets/Class_11_Commerce_Combo Plus.png";
import Class_11_Commerce_Comprehensive_Plus from "../../../assets/Class_11_Commerce_Comprehensive Plus.png";
import Class_11_Commerce_Integrated_Plus from "../../../assets/Class_11_Commerce_Integrated Plus.png";
import Class_11_Commerce_Linguistic_Plus from "../../../assets/Class_11_Commerce_Linguistic Plus.png";
import Class_11_Commerce_Select_Plus from "../../../assets/Class_11_Commerce_Select Plus.png";

import Class_11_Humanities_Combo_Plus from "../../../assets/Class_11_Humanities_Combo Plus.png";
import Class_11_Humanities_Comprehensive_Plus from "../../../assets/Class_11_Humanities_Comprehensive Plus.png";
import Class_11_Humanities_Integrated_Plus from "../../../assets/Class_11_Humanities_Integrated Plus.png";
import Class_11_Humanities_Linguistic_Plus from "../../../assets/Class_11_Humanities_Linguistic Plus.png";
import Class_11_Humanities_Select_Plus from "../../../assets/Class_11_Humanities_Select Plus.png";

import Class_12_Science_Combo_Plus from "../../../assets/Class_12_Science_Combo Plus.png";
import Class_12_Science_Comprehensive_Plus from "../../../assets/Class_12_Science_Comprehensive Plus.png";
import Class_12_Science_Integrated_Plus from "../../../assets/Class_12_Science_Integrated Plus.png";
import Class_12_Science_Linguistic_Plus from "../../../assets/Class_12_Science_Linguistic Plus.png";
import Class_12_Science_Select_Plus from "../../../assets/Class_12_Science_Select Plus.png";

import Class_12_Commerce_Combo_Plus from "../../../assets/Class_12_Commerce_Combo Plus.png";
import Class_12_Commerce_Comprehensive_Plus from "../../../assets/Class_12_Commerce_Comprehensive Plus.png";
import Class_12_Commerce_Integrated_Plus from "../../../assets/Class_12_Commerce_Integrated Plus.png";
import Class_12_Commerce_Linguistic_Plus from "../../../assets/Class_12_Commerce_Linguistic Plus.png";
import Class_12_Commerce_Select_Plus from "../../../assets/Class_12_Commerce_Select Plus.png";

import Class_12_Humanities_Combo_Plus from "../../../assets/Class_12_Humanities_Combo Plus.png";
import Class_12_Humanities_Comprehensive_Plus from "../../../assets/Class_12_Humanities_Comprehensive Plus.png";
import Class_12_Humanities_Integrated_Plus from "../../../assets/Class_12_Humanities_Integrated Plus.png";
import Class_12_Humanities_Linguistic_Plus from "../../../assets/Class_12_Humanities_Linguistic Plus.png";
import Class_12_Humanities_Select_Plus from "../../../assets/Class_12_Humanities_Select Plus.png";

import CUET_English_General_Test from "../../../assets/CUET English + General Test.png";
import CUET_English_Language from "../../../assets/CUET English Language.png";
import CUET_General_Test from "../../../assets/CUET General Test.png";

import Integrated_Plus from "../../../assets/Class_12_Science_Integrated Plus.png";
import BoardXpress_Plus from "../../../assets/CUET General Test.png";

// Scholarship Data
const scholarships = {
  "11th Class": {
    eligible: "Eligible for 100% scholarship",
    name: "CUET SPARK",
    tag: "Navigating the Early Years",
    program: "2 Years Foundations Level Program",
    class: "For Class 11th, 12th Board, and CUET Preparation",
    desc: "It helps you prepare for your 11th and 12th board exams and the CUET. This program combines your school subjects with CUET preparation, so you're fully ready to achieve your goals.",
    duration: "2 Years",
    eligibility: "Students currently in Class 11",
    mode: "Offline/Online (Based on your preference)",
    enroll:
      "Enroll now in the CUET SPARK Program and take the first step towards a brighter future.",
    GrAction: "Enroll Now",
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
      "Enroll now in the CUET ShineProgram and take the first step towards a brighter future.",
    GrAction: "Enroll Now",
  },
  cuet: {
    eligible: "Eligible for 100% scholarship",
    name: "CUET STAR",
    tag: "A Year to the Top",
    program: "1 Year Intermediate Level Program",
    class: "For Class 12th Board and CUET Preparation",
    desc: "Prepare for board exams and CUET with smart strategies, clear concepts, and focused practice to score high and reach your goal.",
    duration: "1 Year 6 Months",
    eligibility: "Students currently in Class 12",
    mode: "Offline/Online (Based on your preference)",
    enroll:
      "Enroll now in the CUET STAR Program and take the first step towards a brighter future.",
    GrAction: "Enroll Now",
  },
};

// Course Data Generation
const createCourseData = (stream, level) => {
  const imageMap = {
    Science: {
      11: [
        Class_11_Science_Comprehensive_Plus,
        Class_11_Science_Combo_Plus,
        Class_11_Science_Select_Plus,
        Class_11_Science_Linguistic_Plus,
        Class_11_Science_Integrated_Plus,
      ],
      12: [
        Class_12_Science_Comprehensive_Plus,
        Class_12_Science_Combo_Plus,
        Class_12_Science_Select_Plus,
        Class_12_Science_Linguistic_Plus,
        Class_12_Science_Integrated_Plus,
      ],
    },
    Commerce: {
      11: [
        Class_11_Commerce_Comprehensive_Plus,
        Class_11_Commerce_Combo_Plus,
        Class_11_Commerce_Select_Plus,
        Class_11_Commerce_Linguistic_Plus,
        Class_11_Commerce_Integrated_Plus,
      ],
      12: [
        Class_12_Commerce_Comprehensive_Plus,
        Class_12_Commerce_Combo_Plus,
        Class_12_Commerce_Select_Plus,
        Class_12_Commerce_Linguistic_Plus,
        Class_12_Commerce_Integrated_Plus,
      ],
    },
    Humanities: {
      11: [
        Class_11_Humanities_Comprehensive_Plus,
        Class_11_Humanities_Combo_Plus,
        Class_11_Humanities_Select_Plus,
        Class_11_Humanities_Linguistic_Plus,
        Class_11_Humanities_Integrated_Plus,
      ],
      12: [
        Class_12_Humanities_Comprehensive_Plus,
        Class_12_Humanities_Combo_Plus,
        Class_12_Humanities_Select_Plus,
        Class_12_Humanities_Linguistic_Plus,
        Class_12_Humanities_Integrated_Plus,
      ],
    },
  };

  return [
    {
      title: "Comprehensive Plus",
      instructor: `Complete course covering all subjects for ${level} in the ${stream} stream.`,
      students: "1 Year",
      duration: `Class ${level}`,
      imageUrl: imageMap[stream][level][0],
    },
    {
      title: "Combo Plus",
      instructor: `Complete course covering all subjects for ${level} in the ${stream} stream.`,
      students: "1 Year",
      duration: `Class ${level}`,
      imageUrl: imageMap[stream][level][1],
    },
    {
      title: "Select Plus",
      instructor: `Complete course covering all subjects for ${level} in the ${stream} stream.`,
      students: "1 Year",
      duration: `Class ${level}`,
      imageUrl: imageMap[stream][level][2],
    },
    {
      title: "Linguistic Plus",
      instructor: `Complete course covering all subjects for ${level} in the ${stream} stream.`,
      students: "1 Year",
      duration: `Class ${level}`,
      imageUrl: imageMap[stream][level][3],
    },
  ];
};

// CourseCUET Data
const courseCUETData = [
  {
    img: CUET_English_General_Test,
    title: "CUET English + General Test",
    description:
      "Targeted coaching for CUET’s General Test and English Language sections, ensuring comprehensive preparation.",
    studentCount: "10227",
  },
  {
    img: CUET_English_Language,
    title: "CUET English Language",
    description:
      "Focused & comprehensive program to significantly improve grammar, vocabulary, comprehension & verbal skills for CUET success.",
    studentCount: "10227",
  },
  {
    img: CUET_General_Test,
    title: "CUET General Test",
    description:
      "Specialized courses for logical reasoning, numerical ability, general knowledge, and current affairs preparation.",
    studentCount: "10227",
  },
];

const courseDataMap = {
  "11th Class": {
    Science: createCourseData("Science", "11"),
    Commerce: createCourseData("Commerce", "11"),
    Humanities: createCourseData("Humanities", "11"),
    // "Re Attempt": createCourseData("Reattempt", "11"),
  },
  "12th Class": {
    Science: createCourseData("Science", "12"),
    Commerce: createCourseData("Commerce", "12"),
    Humanities: createCourseData("Humanities", "12"),
    // "Re Attempt": createCourseData("Reattempt", "12"),
  },
};

// Main Courses Component
const Courses = () => {
  const menuItemsData = ["11th Class", "12th Class", "CUET"];
  const [selectedMainItem, setSelectedMainItem] = useState(menuItemsData[0]);
  const [selectedSubItem, setSelectedSubItem] = useState("Science");

  const menuItemsDatas = ["Science", "Commerce", "Humanities"];

  const handleMainClick = (item) => {
    setSelectedMainItem(item);
    setSelectedSubItem(menuItemsDatas[0]); // Reset sub-item when main item changes
  };

  const handleSubClick = (item) => setSelectedSubItem(item);

  const getSelectedClass = () => {
    const subContainerSpring = useSpring({
      opacity: 1,
      transform: "translateY(0)",
      from: { opacity: 0, transform: "translateY(-20px)" },
      config: { tension: 170, friction: 26 },
    });

    try {
      switch (selectedMainItem) {
        case "11th Class":
        case "12th Class":
          const courses = courseDataMap[selectedMainItem]?.[selectedSubItem];
          const scholarship = scholarships[selectedMainItem];
          if (!courses || !scholarship) {
            return <p>No courses or scholarships available</p>;
          }

          return (
            <SubContainer
              menuItemsDatas={menuItemsDatas}
              selectedSubItem={selectedSubItem}
              selectedMainItem={selectedMainItem}
              handleSubClick={handleSubClick}
              courses={courses}
              scholarship={scholarship}
            />
          );
        case "CUET":
          // console.log(subContainerSpring);
          return (
            <animated.div
              style={subContainerSpring}
              className={style.placeholder}
            >
              <CourseCardCUET course={courseCUETData} selectedMainItem={selectedMainItem} scholarship={scholarships.cuet} />
            </animated.div>
          );
        default:
          return <p>No content available</p>;
      }
    } catch (error) {
      console.error("Error rendering selected class:", error);
      return <p>Error occurred while fetching data</p>;
    }
  };

  return (
    <div className={style.menuDrop}>
      <div className={style.menuDropContainer}>
        {/* Main Menu */}
        <div className={style.menuDropHeader}>
          {menuItemsData.map((item, index) => (
            <h2
              key={index}
              className={`${style.menuItem} ${
                index % 2 === 0 ? style.bgDarkGray : style.bgLightGray
              } ${selectedMainItem === item ? style.selected : ""}`}
              onClick={() => handleMainClick(item)}
              onMouseEnter={() => handleMainClick(item)}
            >
              {item}
            </h2>
          ))}
        </div>

        {/* SubContainer based on selection */}
        {getSelectedClass()}
      </div>
    </div>
  );
};

// SubContainer Component
const SubContainer = ({
  menuItemsDatas,
  selectedSubItem,
  selectedMainItem,
  handleSubClick,
  courses,
  scholarship,
}) => {
  const subContainerSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={subContainerSpring} className={style.subContainer}>
      {/* Sub Menu */}
      <animated.div style={subContainerSpring} className={style.menuDropHead}>
        {menuItemsDatas.map((item, index) => (
          <h2
            key={index}
            className={`${style.menuItem} ${
              index % 2 === 0 ? style.bgDarkGray : style.bgLightGray
            } ${selectedSubItem === item ? style.selected : ""}`}
            onClick={() => handleSubClick(item)}
            onMouseEnter={() => handleSubClick(item)}
          >
            {item} <IoIosArrowForward />
          </h2>
        ))}
      </animated.div>

      {/* Course Content */}
      <div className={style.menuDropContent}>
        <CourseList
          courses={courses}
          scholarship={scholarship}
          selectedMainItem={selectedMainItem}
        />
      </div>
    </animated.div>
  );
};

// CourseList Component
const CourseList = ({ courses, selectedMainItem, scholarship }) => {
  // Dynamic title based on selectedMainItem
  const bigCourseTitle =
    selectedMainItem === "11th Class"
      ? "Integrated Plus"
      : selectedMainItem === "12th Class"
      ? "BoardXpress Plus"
      : courses[0]?.title; // Default to original title if no match

  const bigCourseImage =
    selectedMainItem === "11th Class"
      ? Integrated_Plus
      : selectedMainItem === "12th Class"
      ? BoardXpress_Plus
      : courses[0]?.image;

  // Update the big course object
  const bigCourse = {
    ...courses[0],
    title: bigCourseTitle,
  };

  return (
    <div className={style.gridContainer}>
      <div className={style.scholarship}>
        <ScholarshipCard scholarship={scholarship} />
      </div>
      <div className={style.coursesSmall}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className={style.coursesBig}>
        {selectedMainItem == "11th Class" && (
          <CourseCardBig course={bigCourse} bigCourseImage={bigCourseImage} />
        )}
      </div>
    </div>
  );
};

export default Courses;
