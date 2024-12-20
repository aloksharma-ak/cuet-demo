import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import styles from "./mobileCourses.module.css";
import ContactForm from "../../../HomePage/IntroSection/ContactForm";
import { IoClose } from "react-icons/io5";
import CuetCourses from "./CuetCourses/CuetCourses";
import courses_banner from "../../../../assets/courses_banner.jpg";
import { cuetData } from "../../data/cuetData";

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
    program: [
      { value: "option9", label: "All" },
      { value: "option10", label: "Comprehensive Plus" },
      { value: "option11", label: "Select Plus" },
      { value: "option12", label: "Combo Plus" },
      { value: "option13", label: "Linguistic Plus" },
      { value: "option14", label: "Integrated Plus" },
    ],
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    class: "All",
    stream: "All",
    program: "All",
  });

  const handleToggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };

  const handleSelectOption = (dropdownIndex, option) => {
    const keys = ["class", "stream", "program"];
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
            onCheckEligibility={toggleFormOverlay}
            cuetData={cuetData}
          />
        </aside>
      </div>

      {showForm && (
        <div className="formOverlay">
          <div className="formContent" ref={formRef}>
            <ContactForm formHead={`Fill the form to check eligibility`} />
            <button className="close-btn" onClick={toggleFormOverlay}>
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileCourses;
