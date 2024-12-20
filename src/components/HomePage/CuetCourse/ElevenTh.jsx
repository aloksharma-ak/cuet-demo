import React, { useState, useRef, useEffect } from "react";
import "./ElevenTh.css";
import CardItem from "./CardItem";
import course_cuet_img_1 from "../../../assets/CUET General Test.png";
import course_cuet_img_2 from "../../../assets/CUET English Language.png";
import course_cuet_img_3 from "../../../assets/CUET English + General Test.png";
import course_cuet_img_4 from "../../../assets/CUET_Crown_Commerce.png";
import course_cuet_img_5 from "../../../assets/CUET_Crown_Humanities.png";
import course_cuet_img_6 from "../../../assets/CUET_Crown_Science.png";

function ElevenTh({ filters, onCheckEligibility }) {
  const formRef = useRef(null);

  const cuetData = [
    {
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
      img: course_cuet_img_4,
      title: "CUET 2025 - Commerce | English and General Test",
      desc: "Ace CUET Commerce with intensive training in English, General Test, and core commerce subjects for high-impact results.",
      price: "INR 40000/-",
      fees: "Base Fees: 80000, discount 50% (INR 40000)",
      off: "50%",
      program: "Integrated Plus",
      class: "All",
      stream: "Commerce",
    },
    {
      img: course_cuet_img_5,
      title: "CUET 2025 - Humanities | English and General Test",
      desc: "Excel in CUET Humanities through targeted preparation in English, General Test, and key humanities concepts.",
      price: "INR 40000/-",
      fees: "Base Fees: 80000, discount 50% (INR 40000)",
      off: "50%",
      program: "Integrated Plus",
      class: "All",
      stream: "Arts/Humanities",
    },
    {
      img: course_cuet_img_6,
      title: "CUET 2025 - Science | English and General Test",
      desc: "Specialized course for CUET Science stream, with a focus on English and General Test preparation for top scores.",
      price: "INR 40000/-",
      fees: "Base Fees: 80000, discount 50% (INR 40000)",
      off: "50%",
      program: "Integrated Plus",
      class: "All",
      stream: "Science",
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
