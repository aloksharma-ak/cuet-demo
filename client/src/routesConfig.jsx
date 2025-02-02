import React from "react";
import { Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutCompany from "./Pages/AboutCompany";
import CuetScholarship from "./Pages/CuetScholarship";
import StarScholarship from "./Pages/StarScholarship";
import ShineScholarship from "./Pages/ShineScholarship";
import SparkScholarship from "./Pages/SparkScholarship";
import Star from "./Pages/Star";
import Shine from "./Pages/Shine";
import Spark from "./Pages/Spark";
import ScholarshipForm from "./components/CuetScholarship/ScholarshipForm/ScholarshipForm";
import ContactUs from "./Pages/ContactUs";
import OnlineProgram from "./Pages/OnlineProgram";
import CuetFranchisee from "./Pages/CuetFranchisee";
import PartnerPage from "./Pages/PartnerPage";
import PartnershipForm from "./components/PartnerPage/PartnershipForm/PartnershipForm";
import CounsellingAssessment from "./Pages/CounsellingAssessment";
import CounsellingForm from "./components/CounsellingAssessment/CounsellingForm/CounsellingForm";
import ClassroomProgram12Pass from "./Pages/ClassroomProgram12Pass";
import ClassroomProgram11 from "./Pages/ClassroomProgram11";
import ClassroomProgram12 from "./Pages/ClassroomProgram12";
import MobileCourses from "./components/Header/MobileBottomMenuBtnPage/MobileBottomBtnPage/MobileCourses";
import ClassroomProgramForm from "./components/ClassroomProgram/ClassroomProgramForm/ClassroomProgramForm";
import ClassroomProgramForm2 from "./components/ClassroomProgram/ClassroomProgramForm2/ClassroomProgramForm2";
import Test from "./components/Test/Test";
import TermAndConditions from "./Pages/TermAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CancellationAndRefund from "./Pages/CancellationAndRefund";
import BlogPage, { BlogDetailPage } from "./Pages/BlogPage";
import CentersPage, { CenterDetailPage } from "./Pages/CentersPage";
import CenterDelhi from "./components/CenterPages/CenterDelhi/CenterDelhi";
import TextEditor from "./components/BlogTextEditor/TextEditor";
import ArticlesList from "./components/BlogTextEditor/ArticlesList";
import SingleArticle from "./components/BlogTextEditor/SingleArticle";

export const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "about-company", element: <AboutCompany /> },
  { path: "cuet-scholarship", element: <CuetScholarship /> },
  { path: "cuet-scholarship/star-scholarship", element: <StarScholarship /> },
  { path: "cuet-scholarship/shine-scholarship", element: <ShineScholarship /> },
  { path: "cuet-scholarship/spark-scholarship", element: <SparkScholarship /> },
  { path: "scholarship-form", element: <ScholarshipForm /> },
  { path: "star-program", element: <Star /> },
  { path: "shine-program", element: <Shine /> },
  { path: "spark-program", element: <Spark /> },
  { path: "contact-us", element: <ContactUs /> },
  { path: "online-program", element: <OnlineProgram /> },
  { path: "become-a-franchisee", element: <CuetFranchisee /> },
  { path: "become-a-partner", element: <PartnerPage /> },
  { path: "partnership-form", element: <PartnershipForm /> },
  { path: "counselling", element: <CounsellingAssessment /> },
  { path: "counselling-form", element: <CounsellingForm /> },
  { path: "1st-year-12-pass", element: <ClassroomProgram12Pass /> },
  { path: "1st-year-11", element: <ClassroomProgram11 /> },
  { path: "1st-year-12", element: <ClassroomProgram12 /> },
  { path: "our-courses", element: <MobileCourses /> },
  { path: "our-courses/model-1", element: <ClassroomProgramForm /> },
  { path: "our-courses/model-2", element: <ClassroomProgramForm2 /> },
  { path: "test", element: <Test /> },
  { path: "term-and-conditions", element: <TermAndConditions /> },
  { path: "privacy-policy", element: <PrivacyPolicy /> },
  { path: "cancellation-and-refund", element: <CancellationAndRefund /> },
  { path: "blogs", element: <BlogPage /> },
  { path: "blogs/:blogUrl", element: <BlogDetailPage/>},
  { path: "centers", element: <CentersPage /> },
  { path: "centers/:centerUrl", element: <CenterDetailPage /> },
  { path: "best-cuet-coaching-in-delhii", element: <CenterDelhi /> },
  { path: "*", element: <Navigate to="/" replace /> },
  { path: "editor", element: <TextEditor /> },
  { path: "posts", element: <ArticlesList /> },
  { path: "posts/:slug", element: <SingleArticle /> },
];
