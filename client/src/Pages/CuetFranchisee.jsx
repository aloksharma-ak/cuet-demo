import React from "react";
import { Helmet } from "react-helmet";
import FranchiseeIntro from "../components/CuetFranchisee/FranchiseeIntro/FranchiseeIntro";
import Franchisee_banner from "../assets/Franchisee_banner.jpg";
import { Link } from "react-router-dom";

function CuetFranchisee() {
  return (
    <>
      <Helmet>
        <title>Become a CUET Franchisee - Partner with CUETPlus</title>

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Join CUETPlus as a franchisee and empower students across India. Discover benefits, process, and opportunities for growth with CUETPlus."
        />
        <meta
          name="keywords"
          content="CUET franchisee, CUETPlus franchise, education franchise, CUET business opportunity, start CUET coaching center"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CUETPlus Team" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Become a CUET Franchisee - Partner with CUETPlus"
        />
        <meta
          property="og:description"
          content="Join CUETPlus as a franchisee and empower students across India. Learn about the benefits, process, and business opportunities."
        />
        <meta property="og:image" content={Franchisee_banner} />
        <meta property="og:image:alt" content="CUET Franchisee Banner" />
        <meta
          property="og:url"
          content="https://cuet.plus/become-a-franchisee"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUETPlus Partner" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CUETPlusOfficial" />
        <meta
          name="twitter:title"
          content="Become a CUET Franchisee - Partner with CUETPlus"
        />
        <meta
          name="twitter:description"
          content="Partner with CUETPlus to empower students and grow your education business. Explore our franchise opportunities."
        />
        <meta name="twitter:image" content={Franchisee_banner} />
        <meta name="twitter:image:alt" content="CUET Franchisee Banner" />
      </Helmet>

      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "0rem",
          textAlign: "center",
          color: "transparent",
          fontSize: "2vw",
          fontWeight: "bold",
          zIndex: "-100",
        }}
      >
        <h1 style={{ backgroundColor: "transparent", color: "transparent" }}>
          Start Your Own CUET Coaching Center with Our Franchisee Program
        </h1>
        <h2 style={{ backgroundColor: "transparent", color: "transparent" }}>
          Franchise program for CUET exam preparation
        </h2>
        <Link to="/contact-us" style={{ position: "absolute", zIndex: "-20" }}>
          <div
            className="course-page-btn"
            style={{ backgroundColor: "transparent", color: "transparent" }}
          >
            Get in Touch
          </div>
        </Link>
      </div>

      <FranchiseeIntro />
    </>
  );
}

export default CuetFranchisee;
