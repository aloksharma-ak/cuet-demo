import React from "react";
import CardItem from "../../../../HomePage/CuetCourse/CardItem";
import "../../../../HomePage/CuetCourse/ElevenTh.css";

function CuetCourses({ filters = {}, cuetData, onCheckEligibility }) {
  // Normalize filters for consistency
  const normalizedFilters = {
    class: filters.class?.toLowerCase() || "all",
    stream: filters.stream?.toLowerCase() || "all",
    subject: filters.subject?.toLowerCase() || "all",
  };

  // Predefined course titles for "12th pass"
  const twelfthPassCourses = [
    "CUET STAR - Domain (Science/ Commerce/ Humanities) | English + General Test",
    "CUET 2025 - GENERAL TEST",
    "CUET 2025 - ENGLISH LANGUAGE",
    "CUET 2025 - ENGLISH + GENERAL TEST",
    "CUET SHINE - Class 12th",
    "CUET SPARK - Class 11th",
  ];

  // Filter courses
  const filteredData = cuetData.filter((item) => {
    const itemSubject = item.subject.toLowerCase();
    const itemClass = item.class?.toLowerCase() || "";
    const itemStream = item.stream?.toLowerCase() || "";
    const itemTitle = item.title || "";

    // Special handling for "12th pass" case with additional stream and subject filters
    if (normalizedFilters.class === "12th pass") {
      return (
        twelfthPassCourses.includes(itemTitle) && // Check against predefined titles
        (normalizedFilters.stream === "all" ||
          itemStream === normalizedFilters.stream) && // Stream filter
        (normalizedFilters.subject === "all" ||
          itemSubject === normalizedFilters.subject) // Program filter
      );
    }

    // General filtering logic for other classes
    return (
      (normalizedFilters.subject === "all" ||
        itemSubject === normalizedFilters.subject) &&
      (normalizedFilters.stream === "all" ||
        itemStream === normalizedFilters.stream) &&
      (normalizedFilters.class === "all" ||
        itemClass === normalizedFilters.class)
    );
  });


  return (
    <div className="course-cuet-container">
      <div className="card-div">
        {filteredData.length === 0 ? (
          <p style={{width: "100%", textAlign: "center", backgroundColor: "#8dfafa", padding: "10px", margin: "10px 0", borderRadius: "5px", color: "red" }}>No courses available for the selected filters.</p>
        ) : (
          <CardItem
            cuetData={filteredData}
            onCheckEligibility={onCheckEligibility}
          />
        )}
      </div>
    </div>
  );
}

export default CuetCourses;
