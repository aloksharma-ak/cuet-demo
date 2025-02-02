import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import styles from "./mobileCourses.module.css";
import ContactForm from "../../../HomePage/IntroSection/ContactForm";
import { IoClose } from "react-icons/io5";
import CuetCourses from "./CuetCourses/CuetCourses";
import courses_banner from "../../../../assets/courses_banner.jpg";
import { cuetData } from "../../data/cuetData";
import { Link, useNavigate } from "react-router-dom";

const CustomDropdown = ({
  options,
  dropdownLabel,
  isOpen,
  onToggle,
  selectedOption,
  onSelect,
  onMouseLeave,
}) => {
  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.dropdownLabel}>{dropdownLabel}</label>
      <button onClick={onToggle} className={styles.dropdownButton}>
        {selectedOption || "All"}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu} onMouseLeave={onMouseLeave}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => onSelect(option.label)}
              className={styles.dropdownItem}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CourseHeading = () => (
  <div className={styles.CourseHeadingTitle}>
    <h1 className={styles.CourseHeading}>Our Courses</h1>
    <p className={styles.CourseDescription}>
      At CUET Plus, we offer a range of specialized courses tailored to meet the
      diverse needs of our students. Whether you are just beginning your
      preparation or looking for a comprehensive review, we have the right
      program for you.
    </p>
  </div>
);

const MobileCourses = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null); // Create a ref for the form overlay
  const navigate = useNavigate();

  const optionMapping = {
    class: [
      { value: "option1", label: "All" },
      { value: "option2", label: "11th" },
      { value: "option3", label: "12th" },
      { value: "option4", label: "12th Pass" },
    ],
    stream: [
      { value: "option5", label: "All" },
      { value: "option6", label: "Science" },
      { value: "option7", label: "Commerce" },
      { value: "option8", label: "Arts/Humanities" },
    ],
    subject: [
      { value: "option9", label: "All" },
      { value: "option10", label: "English" },
      { value: "option11", label: "Physics" },
      { value: "option12", label: "Chemistry" },
      { value: "option13", label: "Biology" },
      { value: "option14", label: "Mathematics" },
      { value: "option15", label: "Accountancy" },
      { value: "option16", label: "Economics" },
      { value: "option17", label: "Business Studies" },
      { value: "option18", label: "Political Science" },
      { value: "option19", label: "History" },
      { value: "option20", label: "Geography" },
    ],
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    class: "All",
    stream: "All",
    subject: "All",
  });

  const handleToggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };

  const handleSelectOption = (dropdownIndex, option) => {
    const keys = ["class", "stream", "subject"];
    setSelectedOptions((prev) => ({
      ...prev,
      [keys[dropdownIndex]]: option,
    }));
    setOpenDropdown(null); // Close the dropdown after selection
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Close form if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  const toggleFormOverlay = () => {
    setShowForm((prev) => !prev);
  };

  const onCheckEligibility = (id) => {
    console.log(id);
    if (id >= 1 && id <= 6) {
      toggleFormOverlay();
    } else {
      // navigate("/classroom-form");
      toggleFormOverlay();
    }
  };

  return (
    <div className={styles.CoursePage}>
      <Helmet>
        <title>CUETPlus - Explore Our Specialized Courses</title>
        <meta
          name="description"
          content="Discover a wide range of courses at CUETPlus, including CUET UG, CUET PG, Board Exams, and more. Tailored for all streams and classes to ensure comprehensive preparation."
        />
        <meta
          name="keywords"
          content="CUET Plus courses, CUET UG, CUET PG, Board Exam preparation, Humanities courses, Commerce courses, Science courses"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="CUET Plus - Explore Our Specialized Courses"
        />
        <meta
          property="og:description"
          content="Join CUET Plus and access a variety of courses designed to meet your academic goals. Explore our CUET UG, CUET PG, and stream-specific programs."
        />
        <meta property="og:image" content={courses_banner} />
        <meta property="og:url" content="https://cuet.plus/our-courses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CUET Plus - Explore Our Specialized Courses"
        />
        <meta
          name="twitter:description"
          content="Browse our comprehensive courses for CUET UG, CUET PG, Board Exams, and all streams. Tailored for every student’s needs."
        />
        <meta name="twitter:image" content={courses_banner} />
      </Helmet>
      <div className={styles.CourseContainer}>
        <div className={styles.MobileHead}>
          <CourseHeading />
        </div>
        <aside className={styles.leftSide}>
          {Object.keys(optionMapping).map((key, index) => (
            <CustomDropdown
              key={index}
              options={optionMapping[key]}
              dropdownLabel={key.charAt(0).toUpperCase() + key.slice(1)}
              isOpen={openDropdown === index}
              onToggle={() => handleToggleDropdown(index)}
              selectedOption={selectedOptions[key]}
              onSelect={(option) => handleSelectOption(index, option)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </aside>
        <aside className={styles.rightSide}>
          <div className={styles.DesktopHead}>
            <CourseHeading />
          </div>
          <CuetCourses
            filters={selectedOptions}
            onCheckEligibility={onCheckEligibility}
            cuetData={cuetData}
          />
        </aside>
      </div>

      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formContent} ref={formRef}>
            <ModelPopUp />
            <button className={styles.closeBtn} onClick={toggleFormOverlay}>
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileCourses;

export const ModelPopUp = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.ModelPopUp}>
      <h3 className={styles.ModelPopUpTitle}>
        What is your preferred coaching program type:
      </h3>
      {[
        {
          title: "Subject-based coaching for Class 11, 12, or both",
          desc: "(For students focusing on individual or combined subjects of Class 11, 12, or both.)",
          url: "/our-courses/model-1",
        },
        {
          title: "CUET Preparation",
          desc: "(For students aiming to prepare for CUET starting in Class 11, 12, or after Class 12.)",
          url: "/our-courses/model-2",
        },
      ].map((goal, index) => (
        <div key={index} className={styles.checkboxContainer} onClick={() => navigate(goal.url)}>
          <label className={styles.checkboxBtn}>
            {/* <input type="checkbox" name="Model" /> */}
            <h4>{goal.title}</h4>
          </label>
          <p className={styles.checkboxDesc}>{goal.desc}</p>
        </div>
      ))}
    </div>
  );
};
