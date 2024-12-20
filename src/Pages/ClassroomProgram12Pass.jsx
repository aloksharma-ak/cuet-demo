import React from "react";
import ClassroomProgramHeading from "../components/ClassroomProgram/ClassroomProgramHeading/ClassroomProgramHeading";
import ProgramAdvantage from "../components/ClassroomProgram/ProgramAdvantage/ProgramAdvantage";
import CourseDetails from "../components/ClassroomProgram/CourseDetailsKeyFeature/CourseDetails";
import CourseFee from "../components/ClassroomProgram/CourseFee/CourseFee";

function ClassroomProgram12Pass() {
  const programAdvantageDetails = [
    "This program is conceived with the aim to propel students All India Rank in JEE Main & Advanced by a massive margin in just one year’s time. Spearheaded by Top Faculty with years of experience, special significance is laid on identifying the weak areas and strengthening them, enhance problem solving ability with speed & accuracy and improving the exam temperament of the student",
  ];
  return (
    <>
      <ClassroomProgramHeading heading="1 Year Classroom Program Class 12" />
      <ProgramAdvantage desc={programAdvantageDetails} />
      <CourseDetails />
      <CourseFee />
    </>
  );
}

export default ClassroomProgram12Pass;
