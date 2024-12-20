import React from "react";
import CardItem from "../../../../HomePage/CuetCourse/CardItem";
import "../../../../HomePage/CuetCourse/ElevenTh.css";

function CuetCourses({ filters = {}, onCheckEligibility, cuetData }) {
  // Normalize filters for consistency
  const normalizedFilters = {
    class: filters.class?.toLowerCase() || "all",
    stream: filters.stream?.toLowerCase() || "all",
    program: filters.program?.toLowerCase() || "all",
  };

  // Predefined course titles for "12th pass"
  const twelfthPassCourses = [
    "CUET 2025 - Commerce | English and General Test",
    "CUET 2025 - Humanities | English and General Test",
    "CUET 2025 - Science | English and General Test",
    "CUET 2025 - GENERAL TEST",
    "CUET STAR - Class 12 Science",
    "CUET STAR - Class 12 Commerce",
    "CUET STAR - Class 12 Humanities",
  ];

  // Filter courses
  const filteredData = cuetData.filter((item) => {
    const itemProgram = item.program.toLowerCase();
    const itemClass = item.class?.toLowerCase() || "";
    const itemStream = item.stream?.toLowerCase() || "";
    const itemTitle = item.title || "";

    // Special handling for "12th pass" case with additional stream and program filters
    if (normalizedFilters.class === "12th pass") {
      return (
        twelfthPassCourses.includes(itemTitle) && // Check against predefined titles
        (normalizedFilters.stream === "all" || itemStream === normalizedFilters.stream) && // Stream filter
        (normalizedFilters.program === "all" || itemProgram === normalizedFilters.program) // Program filter
      );
    }

    // General filtering logic for other classes
    return (
      (normalizedFilters.program === "all" ||
        itemProgram === normalizedFilters.program) &&
      (normalizedFilters.stream === "all" ||
        itemStream === normalizedFilters.stream) &&
      (normalizedFilters.class === "all" ||
        itemClass === normalizedFilters.class)
    );
  });

  return (
    <div className="course-cuet-container">
      <div className="card-div">
        {/* Render filtered courses */}
        <CardItem
          cuetData={filteredData}
          onCheckEligibility={onCheckEligibility}
        />
      </div>
    </div>
  );
}

export default CuetCourses;
