import React, { useState, useRef, useEffect } from "react";
import "./CuetCourse.css";
import ElevenTh from "./ElevenTh";
import { Link } from "react-router-dom";
import ContactForm from "../../HomePage/IntroSection/ContactForm";
import { IoClose } from "react-icons/io5";
import { ModelPopUp } from "../../Header/MobileBottomMenuBtnPage/MobileBottomBtnPage/MobileCourses";

function CuetCourse() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const buttons = [""];

  const toggleFormOverlay = () => {
    setShowForm((prev) => !prev);
  };

  const components = [
    <ElevenTh
      filters={["All", "All", "All"]}
      onCheckEligibility={toggleFormOverlay}
    />,
  ];

  const handleButtonClick = (index) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
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

  return (
    <>
      <div className="course-container">
        <h2 className="courseHeading">
          <span>CUETPlus</span> CUET UG Full Courses
        </h2>
        <div className="course-section">
          <div className="course-btn">
            {buttons.map((item, index) => (
              <button
                key={index}
                className={`course-btn-item1 ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className={`component-container ${direction}`}>
            {components[activeIndex]}
          </div>

          <Link to="/our-courses">
            <div className="course-page-btn">Go to Our courses</div>
          </Link>
        </div>
      </div>

      {showForm && (
        <div className="formOverlay">
          <div className="formContent" ref={formRef}>
            <ModelPopUp />
            <button className="close-btn" onClick={toggleFormOverlay}>
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CuetCourse;
