import React from "react";
import { Helmet } from "react-helmet";
// import ContactIntro from "../components/ContactUs/ContactPageIntro/ContactPageIntro";
// import ContactLink from "../components/ContactUs/ContactLink/ContactLink";
// import Partner from "../components/ContactUs/Partner/Partner";
// import MapSection from "../components/ContactUs/MapSection/MapSection";
import ContactHead from "../components/ContactUs/ContactHead/ContactHead";
import ContactPageForm from "../components/ContactUs/ContactPageForm/ContactPageForm";
import SocialLinks from "../components/ContactUs/SocialLinks/SocialLinks";
import ContactNewLatter from "../components/ContactUs/ContactNewLatter/ContactNewLatter";
import contact_us_banner from "../assets/contact_us_banner.avif";
import { Link } from "react-router-dom";
import AboutConnect from "../components/AboutCompany/AboutConnect/AboutConnect";

function ContactUs() {
  return (
    <>
      <Helmet>
        {/* Page Title and Meta Tags */}
        <title>Contact Us - Get in Touch with CUETPlus</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact CUETPlus through our online form, social media, or visit our office. We're here to help with your CUET preparation."
        />
        <meta
          name="keywords"
          content="Contact CUETPlus, CUET contact page, CUET support, contact for CUET preparation, CUETPlus assistance"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CUETPlus Team" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Contact Us - Get in Touch with CUETPlus"
        />
        <meta
          property="og:description"
          content="Reach out to CUETPlus for any questions or support regarding CUET preparation. We're here to guide you."
        />
        <meta property="og:image" content={contact_us_banner} />
        <meta property="og:image:alt" content="Contact CUETPlus" />
        <meta property="og:url" content="https://cuet.plus/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUETPlus" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CUETPlusOfficial" />
        <meta
          name="twitter:title"
          content="Contact Us - Get in Touch with CUETPlus"
        />
        <meta
          name="twitter:description"
          content="Contact CUETPlus for all your queries and support needs. We're here to make your CUET preparation journey smooth."
        />
        <meta name="twitter:image" content={contact_us_banner} />
        <meta name="twitter:image:alt" content="Contact CUETPlus" />

        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16805748874"
        ></script>
        <script>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "AW-16805748874");
      `}
        </script>

        {/* Google Tag Manager Script */}
        <script>
          {`
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-TFD9H5H4');
    `}
        </script>

        {/* Conversion Tracking Script */}
        <script>
          {`
      function gtag_report_conversion(url) {
        var callback = function() {
          if (typeof url !== 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
          'send_to': 'AW-16805748874/23TjCK7NkfoZEIrBzc0-',
          'value': 30.0,
          'currency': 'INR',
          'event_callback': callback
        });
        return false;
      }
    `}
        </script>
      </Helmet>

      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "0rem",
          textAlign: "center",
          backgroundColor: "transparent",
          color: "transparent",
          fontSize: "2vw",
          fontWeight: "bold",
          zIndex: "-100",
        }}
      >
        <h1 style={{ backgroundColor: "transparent", color: "transparent" }}>
          CUET Exam Coaching Contact Form
        </h1>
        <h2 style={{ backgroundColor: "transparent", color: "transparent" }}>
          Best CUET Coaching Inquiry Form
        </h2>
        <Link
          to="/our-courses"
          style={{ position: "absolute", zIndex: "-200" }}
        >
          <div
            className="course-page-btn"
            style={{ backgroundColor: "transparent", color: "transparent" }}
          >
            Explore CUET Courses
          </div>
        </Link>
      </div>

      {/* <ContactIntro/>
      <ContactLink/>
      <Partner/>
      <MapSection/> */}
      <ContactHead />
      <AboutConnect title={`Contact us to get personalized assistance now`} />
      {/* <SocialLinks /> */}
      <ContactNewLatter />
    </>
  );
}

export default ContactUs;
