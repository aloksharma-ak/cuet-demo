import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import OnlineProgram from "./Pages/OnlineProgram";
import CuetScholarship from "./Pages/CuetScholarship";
import CounsellingAssessment from "./Pages/CounsellingAssessment";
import ClassroomProgram12Pass from "./Pages/ClassroomProgram12Pass";
import ClassroomProgram12 from "./Pages/ClassroomProgram12";
import ClassroomProgram11 from "./Pages/ClassroomProgram11";
import Layout from "./Layout";
import Test from "./components/Test/Test";
import CuetFranchisee from "./Pages/CuetFranchisee";
import MobileCourses from "./components/Header/MobileBottomMenuBtnPage/MobileBottomBtnPage/MobileCourses";
import AboutCompany from "./Pages/AboutCompany";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ErrorPage from "./components/ErrorBoundary/ErrorPage";
import PartnerPage from "./Pages/PartnerPage";
import ScholarshipForm from "./components/CuetScholarship/ScholarshipForm/ScholarshipForm";
import CounsellingForm from "./components/CounsellingAssessment/CounsellingForm/CounsellingForm";
import TermAndConditions from "./Pages/TermAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CancellationAndRefund from "./Pages/CancellationAndRefund";
import CenterDelhi from "./components/CenterPages/CenterDelhi/CenterDelhi";
import BlogPage from "./Pages/BlogPage";
import PartnershipForm from "./components/PartnerPage/PartnershipForm/PartnershipForm";
import ExcelPlusScholarship from "./Pages/ExcelPlusScholarship";
import CUETCoachingGurgaon from "./components/CenterPages/CUETCoachingGurgaon/CUETCoachingGurgaon";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Router configuration with ErrorBoundary
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      }
    >
      <Route index element={<HomePage />} />
      <Route path="about-company" element={<AboutCompany />} />
      <Route path="cuet-scholarship" element={<CuetScholarship />} />
      <Route path="cuet-scholarship/star-scholarship" element={<ExcelPlusScholarship />} />
      <Route path="scholarship-form" element={<ScholarshipForm />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="online-program" element={<OnlineProgram />} />
      <Route path="become-a-franchisee" element={<CuetFranchisee />} />
      <Route path="become-a-partner" element={<PartnerPage />} />
      <Route path="partnership-form" element={<PartnershipForm />} />
      <Route path="counselling" element={<CounsellingAssessment />} />
      <Route path="counselling-form" element={<CounsellingForm />} />
      <Route path="1st-year-12-pass" element={<ClassroomProgram12Pass />} />
      <Route path="1st-year-11" element={<ClassroomProgram11 />} />
      <Route path="1st-year-12" element={<ClassroomProgram12 />} />
      <Route path="our-courses" element={<MobileCourses />} />
      <Route path="test" element={<Test />} />
      <Route path="term-and-conditions" element={<TermAndConditions />} />
      <Route path="cancellation-and-refund" element={<CancellationAndRefund />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="blogs" element={<BlogPage />} />
      <Route path="best-cuet-coaching-in-Delhi" element={<CenterDelhi />} />
      <Route path="best-cuet-coaching-in-Gurgaon" element={<CUETCoachingGurgaon />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Route>
  )
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Duration of the smooth scroll effect
      smooth: true, // Enable smooth scroll
    });

    // Bind ScrollTrigger to Lenis for scroll updates
    lenis.on("scroll", ScrollTrigger.update);

    // Sync Lenis with GSAP's ticker for smooth updates
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Cleanup function to remove listeners and destroy Lenis instance
    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
