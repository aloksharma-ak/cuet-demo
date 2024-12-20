import React from "react";
import ClassroomProgramHeading from "../components/ClassroomProgram/ClassroomProgramHeading/ClassroomProgramHeading";
import ProgramAdvantage from "../components/ClassroomProgram/ProgramAdvantage/ProgramAdvantage";
import KeyFeature from "../components/ClassroomProgram/KeyFeatures/KeyFeature";
import CourseFee from "../components/ClassroomProgram/CourseFee/CourseFee";
import TestProgram from "../components/ClassroomProgram/TestProgram/TestProgram";

function ClassroomProgram11() {
  const programAdvantageDetails = [
    "At CUETPlus Classes, we are committed to provide comprehensive and integrated study material to help students excel in their academic journey and achieve success in JEE. Our Class 12th - One Year Program offers a meticulously designed curriculum and an array of features to support your academic and competitive exam preparation",
    "Students enrolling in this program early will be eligible to attend Class 11th through Offline Mode before commencing their actual program in April.",
    "April onwards, students will get access to class recordings of entire Class 11th syllabus to strengthen their concepts . This program focuses primarily on Class 12th syllabus followed by comprehensive revision classes as well as Testing & Evaluation.",
  ];

  const KeyFeatureData = [
    {
      bold: "Integrated Content:",
      text: "Our study material is designed to cover both the school curriculum and JEE syllabus. This integration ensures a seamless learning experience.",
    },
    {
      bold: "Well-Laid Out Learning Tool:",
      text: "The study material is structured in a step-wise and level-wise manner, making it easy for students to grasp complex concepts.",
    },
    {
      bold: "Highly Qualified Faculty:",
      text: "Students benefit from the expertise of highly qualified and effectively trained faculty who guide them through their academic journey.",
    },
    {
      bold: "Curated Question Bank:",
      text: "We have a meticulously curated question bank that has evolved over the years and is regularly updated to align with the latest curriculum.",
    },
    {
      bold: "Classroom Assessments & Practice Sheets:",
      text: "Regular assessments and practice sheets in the classroom environment help students gauge their understanding and improve.",
    },
    {
      bold: "Scientific Testing System:",
      text: "Our centralized testing system is scientifically designed to evaluate students' progress accurately.",
    },
    {
      bold: "Detailed Post-Test Analysis:",
      text: "After each test, students receive a comprehensive analysis of their performance, helping them identify their strengths and areas for improvement.",
    },
    {
      bold: "LMS Support:",
      text: "Students are given complete online support for their studies which includes Class Notifications, General Notifications, e-Books (of Modules), Test (in Online Mode), Test Paper PDFs (Competitive and CBSE), Comprehensive Test Analysis with their peers, Doubt Forum etc.",
    },
  ];

  const testData = [
    {
      no: "8",
      title: "JEE Main Tests",
      desc: "(including 1 Computer-Based Test)",
    },
    { no: "10", title: "Mock JEE Main Tests", desc: "(Computer-Based Tests)" },
    { no: "5", title: "JEE Advanced Booster Tests" },
    {
      no: "2",
      title: "JEE Advanced Tests",
      desc: "(including 1 Computer-Based Test)",
    },
    { no: "5", title: "Mock JEE Advanced", desc: "(Computer-Based Tests)" },
  ];

  return (
    <>
      <ClassroomProgramHeading heading="1 Year Classroom Program Class 12" />
      <ProgramAdvantage desc={programAdvantageDetails} />
      <TestProgram testData={testData} />
      <KeyFeature KeyFeatureData={KeyFeatureData} />
      <CourseFee />
    </>
  );
}

export default ClassroomProgram11;
