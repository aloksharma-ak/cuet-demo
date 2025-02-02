import React, { useState, useRef, useEffect } from "react";
import "./ElevenTh.css";
import CardItem from "./CardItem";
import course_cuet_img_1 from "../../../assets/CUET General Test.png";
import course_cuet_img_2 from "../../../assets/CUET English Language.png";
import course_cuet_img_3 from "../../../assets/CUET English + General Test.png";
import subject_1 from "../../../assets/cuet_star.jpg";
import subject_2 from "../../../assets/cuet_shine.jpg";
import subject_3 from "../../../assets/cuet_spark.jpg";

function ElevenTh({ filters, onCheckEligibility }) {
  const formRef = useRef(null);

  const cuetData = [
    {
      id: 4,
      img: course_cuet_img_1,
      title: "CUET 2025 - GENERAL TEST",
      desc: "Master the General Test section for CUET with structured lessons, mock tests, and targeted practice to boost scores.",
      price: "INR 15000/-",
      fees: "Base Fees: 30000, discount 50% (INR 15000)",
      off: "50%",
      program: "Select Plus",
      class: "All",
      stream: "All",
    },
    {
      id: 5,
      img: course_cuet_img_2,
      title: "CUET 2025 - ENGLISH LANGUAGE",
      desc: "Enhance language skills for CUET with specialized coaching in grammar, comprehension, and language proficiency for exam success.",
      price: "INR 15000/-",
      fees: "Base Fees: 30000, discount 50% (INR 15000)",
      off: "50%",
      program: "Select Plus",
      class: "All",
      stream: "All",
    },
    {
      id: 6,
      img: course_cuet_img_3,
      title: "CUET 2025 - ENGLISH + GENERAL TEST",
      desc: "Prepare thoroughly for CUET’s English and General Test sections with expert guidance, tailored resources, and comprehensive practice.",
      price: "INR 25000/-",
      fees: "Base Fees: 50000, discount 50% (INR 25000)",
      off: "50%",
      program: "Combo Plus",
      class: "All",
      stream: "All",
    },
    {
      id: 1,
      img: subject_1,
      title: "CUET STAR - CUET Aspirants",
      subTitle:
        "Domain(Science, Commerce, and Arts/Humanities) Subjects | General Test + English Language",
      desc: "Ace CUET with intensive training in English, General Test, and core Domain subjects for high-impact results.",
      price: "INR 50,000/-",
      fees: "Base Fees: 1,00,000, discount Upto 50% (INR 50,000)",
      off: "50%",
      subject: "All",
      class: "12th",
      stream: "All",
    },
    {
      id: 2,
      img: subject_2,
      title: "CUET SHINE - Class 12th",
      subTitle:
        "Domain(Science, Commerce, and Arts/Humanities) Subjects | General Test + English Language",
      desc: "1 Year Intermediate Level Program for Class 12th Board and CUET Preparation",
      price: "INR 1,40,000/-",
      fees: "Base Fees: 3,50,000, discount Upto 60% (INR 2,10,000)",
      off: "60%",
      subject: "All",
      class: "12th",
      stream: "All",
    },
    {
      id: 3,
      img: subject_3,
      title: "CUET SPARK - Class 11th",
      subTitle:
        "Domain(Science, Commerce, and Arts/Humanities) Subjects | General Test + English Language",
      desc: "2 Years Foundations Level Program for Class 11th, 12th Board, and CUET Preparation",
      price: "INR 1,65,000/-",
      fees: "Base Fees: 5,50,000, discount Upto 70% (INR 3,85,000)",
      off: "70%",
      subject: "All",
      class: "11th",
      stream: "All",
    },
  ];

  const filteredData = cuetData.filter((item) => {
    return (
      (!filters[0] || filters[0] === "All" || item.program === filters[0]) &&
      (!filters[1] || filters[1] === "All" || item.class === filters[1]) &&
      (!filters[2] || filters[2] === "All" || item.stream === filters[2])
    );
  });

  return (
    <div className="course-cuet-container">
      <div className="card-div">
        <CardItem
          cuetData={filteredData}
          onCheckEligibility={onCheckEligibility} // Call the passed function here
        />
      </div>
    </div>
  );
}

export default ElevenTh;
