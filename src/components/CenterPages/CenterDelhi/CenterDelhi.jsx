import React from "react";
import styles from "./CenterDelhi.module.css";
import FAQ from "../../HomePage/Communities/FAQ/FAQ";
import CenterNewsletter from "./CenterNewsletter";
import Blog from "../../../assets/Blog.jpg";
import DelhiBlog from "../../../assets/Delhi.avif";
import AsamRangGhar from "../../../assets/asam-Rang-Ghar.jpg";
import { Helmet } from "react-helmet";

const faqs1 = [
  {
    question: "What is the average cost of CUET coaching in Delhi? ",
    answer:
      "The cost of CUET coaching varies between INR 50,000 to INR 1,20,000 depending on the institute and additional features offered. ",
  },
  {
    question: "How long should I prepare for CUET? ",
    answer: "6 to 12 months of focused preparation is usually sufficient. ",
  },
  {
    question: "Can I crack CUET without coaching? ",
    answer:
      "Yes, self-study is possible, but coaching offers structure, expert guidance, and mock-test practice that can give you an extra edge.",
  },
  {
    question: "What is the format of the CUET exam? ",
    answer:
      "CUET consists of domain-based sections, general aptitude tests, and language proficiency modules. ",
  },
  {
    question: "Is online coaching effective? ",
    answer:
      "Online coaching can be highly effective, provided the platform offers interactive sessions, quality materials, and mock test series. ",
  },
];

const CenterDelhi = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Best CUET Coaching in Delhi | Top Institutes & Expert Guidance
        </title>
        <meta
          name="description"
          content="Find the best CUET coaching in Delhi with expert teachers, personalized plans, and proven results. Start your journey to success with top-rated coaching institutes"
        />
        <meta
          name="keywords"
          content="best cuet coaching in delhi, cuet coaching in delhi, best cuet coaching, cuet online coaching, online cuet coaching, cuet 2025-2026, CUET preparation, CUET classes, CUET study material"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.cuet.plus/best-cuet-coaching-in-Delhi"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.cuet.plus/best-cuet-coaching-in-Delhi"
        />
        <meta name="author" content="Piyush Jaiswal" />

        <meta property="og:site_name" content="cuet.plus" />
        <meta property="og:type" content="Article" />
        <meta
          property="og:title"
          content="Best CUET Coaching in Delhi | Top Institutes & Expert Guidance"
        />
        <meta
          property="og:description"
          content="Find the best CUET coaching in Delhi with expert teachers, personalized plans, and proven results. Start your journey to success with top-rated coaching institutes"
        />
        <meta
          property="og:image"
          content="https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg"
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/best-cuet-coaching-in-Delhi"
        />

        <meta name="twitter:card" content="CUET Plus Institute" />
        <meta name="twitter:site" content="cuet.plus" />
        <meta
          name="twitter:title"
          content="CUET Online Coaching - Best CUET Coaching | CUET Coaching"
        />
        <meta
          name="twitter:description"
          content="Best CUET Coaching for online & offline prep. Expert guidance, interactive classes, & study material to ace CUET. Start your journey today!"
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/image.jpg"
        />

        <meta
          property="og:title"
          content="CUET Online Coaching - Best CUET Coaching | CUET Coaching"
        />
        <meta
          property="og:description"
          content="Best CUET Coaching for online & offline prep. Expert guidance, interactive classes, & study material to ace CUET. Start your journey today!"
        />
        <meta property="og:url" content="https://www.facebook.com/cuetplus" />
        <meta
          property="og:image"
          content="https://www.facebook.com/photo/?fbid=283180278090091&set=a.136710486070405"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="CUET Coaching" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.cuet.plus/best-cuet-coaching-in-Delhi"
            },
            "headline": "Best CUET Coaching in Delhi – A Complete Guide for Aspiring Students",
            "description": "Find the best CUET coaching in Delhi with expert teachers, personalized plans, and proven results. Start your journey to success with top-rated coaching institutes.",
            "image": "https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg",
            "author": {
              "@type": "Organization",
              "name": "Piyush Jaiswal"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CUET Plus",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.cuet.plus/assets/logo.png"
              }
            },
            "datePublished": "2024-12-18"
          }
        `}
        </script>

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

        {/* Google Tag Manager */}
        <script>
          {`
        (function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-TFD9H5H4");
      `}
        </script>

        {/* Conversion Tracking */}
        <script>
          {`
        function gtag_report_conversion(url) {
          var callback = function () {
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
      <div className={styles.CentreBlog}>
        <CenterHeadCard
          title="Best CUET Coaching in Delhi"
          imgUrl={DelhiBlog}
        />

        <div className={styles.cuetContainer}>
          <div
            style={{ display: "flex", gap: "15px" }}
            className={styles.mobileBlogs}
          >
            <div style={{ width: "78%" }} className={styles.mobileBlog}>
              <h2 className={`${styles.subHeading} ${styles.mb}`}>
                Best CUET Coaching in Delhi – A Complete Guide for Aspiring
                Students
              </h2>
              <p className={styles.desc2}>
                <span>Preparing for CUET?</span> Wondering how to secure a spot
                at your dream university? You’re not alone. As one of the
                gateway exams for top universities across India, the CUET
                (Common University Entrance Test) is a crucial step in your
                academic journey. Whether you're aiming for DU, BHU, or JNU,
                excelling in CUET opens doors to countless opportunities.
              </p>
              <p className={styles.desc2}>
                Delhi, known as India’s educational hub, has emerged as a
                favorite destination for CUET aspirants. But why is it the top
                choice for students preparing for competitive exams? And how can
                you find the <span>best CUET coaching in Delhi?</span> This
                guide will help you explore the unique advantages, features of
                top centers, and why enrolling in a reputed coaching institute
                can skyrocket your preparation.
              </p>
              <div className={styles.cuetQuestionContainer}>
                <h3 className={`${styles.subTitle} ${styles.mt} ${styles.mb}`}>
                  What is CUET, and Why is It Important?{" "}
                </h3>
                <div className={styles.cuetInfo}>
                  <div className={styles.questionContainer}>
                    <h4 className={styles.subTitle2}>An Overview of CUET </h4>
                    <p className={styles.desc2}>
                      The Common University Entrance Test (CUET) is a
                      standardized examination conducted to evaluate students on
                      various academic and aptitude-related parameters. CUET has
                      emerged as a critical tool for university admissions in
                      India, making it one of the most competitive exams for
                      aspiring undergraduates.
                    </p>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>
                        <h5 className={styles.subTitle3}>
                          What does CUET stand for?
                        </h5>
                        <p className={styles.desc3}>
                          CUET stands for{" "}
                          <strong>“Common University Entrance Test”</strong>, a
                          national-level exam organized by the National Testing
                          Agency (NTA). It harmonizes the admission process
                          across numerous universities, including prestigious
                          Delhi University colleges.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <h5 className={styles.subTitle3}>
                          Why is CUET critical for university admissions in
                          India?
                        </h5>
                        <p className={styles.desc3}>
                          CUET levels the playing field for students from
                          varying educational boards. Instead of relying solely
                          on board exam marks, CUET provides a fair opportunity
                          for students to showcase their potential and
                          knowledge.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.questionContainer}>
                    <h4 className={styles.subTitle2}>
                      Scope of CUET in Delhi Universities
                    </h4>
                    <p className={styles.desc2}>
                      Delhi is home to some of the top-ranked universities in
                      the country, and CUET is the gateway to securing a seat in
                      these prestigious institutions.
                    </p>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>
                        <h5 className={styles.subTitle3}>
                          CUET’s role in admissions to top Delhi universities
                        </h5>
                        <p className={styles.desc3}>
                          Universities such as Delhi University, Jamia Millia
                          Islamia, and others evaluate applicants based on their
                          CUET scores, making it vital for students aspiring to
                          study in the heart of the country.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <h5 className={styles.subTitle3}>
                          Benefits of preparing early for CUET
                        </h5>
                        <p className={styles.desc3}>
                          Starting CUET preparation early allows you to
                          familiarize yourself with the syllabus, improve your
                          time management, and strengthen your weak areas,
                          giving you a significant edge over competitors.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.cuetQuestionContainer}>
                <h3 className={`${styles.subTitle} ${styles.mt} ${styles.mb}`}>
                  What Makes CUET Coaching in Delhi Unique?
                </h3>
                <p className={styles.desc}>
                  Delhi isn’t just India’s capital—it’s the heartbeat of
                  education. Every year, thousands of students flock to Delhi
                  for its rich academic culture and thriving coaching industry.
                </p>
              </div>
              <div className={styles.cuetQuestionContainer}>
                <h3 className={`${styles.subTitle} ${styles.mt} ${styles.mb}`}>
                  Why choose Delhi for CUET preparation?
                </h3>
                <ul className={styles.list}>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}> Expert Faculty </h5>
                    <p className={styles.desc3}>
                      Delhi coaching centers boast some of the most experienced
                      teachers who specialize in CUET preparation. Many of them
                      have decades of experience, know the CUET pattern
                      inside-out, and help students tackle tricky sections with
                      ease.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>
                      {" "}
                      Competitive Study Environment
                    </h5>
                    <p className={styles.desc3}>
                      Preparing for CUET in Delhi places you in a competitive
                      environment where you're surrounded by motivated peers.
                      It's an environment that pushes you to perform better.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>
                      {" "}
                      Access to Top Coaching Centers
                    </h5>
                    <p className={styles.desc3}>
                      Be it their streamlined teaching methodologies, updated
                      study material, or in-depth mock tests, Delhi’s top CUET
                      coaching centers consistently yield stellar results year
                      after year.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    {" "}
                    <h5 className={styles.subTitle3}>Diverse Student Base</h5>
                    <p className={styles.desc3}>
                      Studying alongside peers from all over India provides
                      unparalleled exposure and opens up learning opportunities
                      that extend beyond books.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.cuetQuestionContainer}>
                <h3 className={`${styles.subTitle} ${styles.mt} ${styles.mb}`}>
                  How to Choose the Best CUET Coaching in Delhi
                </h3>
                <p className={styles.desc}>
                  With a plethora of options, how do you choose the coaching
                  center that fits your needs? Here are some key factors to
                  consider and questions to ask before enrolling.{" "}
                </p>
                <h4 className={styles.subTitle2}>Key Factors to Consider:</h4>
                <ul className={styles.list}>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>Faculty Expertise </h5>
                    <p className={styles.desc3}>
                      Look for coaching institutes with highly qualified,
                      experienced faculty who understand CUET intricacies.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>Proven Track Record</h5>
                    <p className={styles.desc3}>
                      Explore centers with a high success rate and impressive
                      alumni achievements in CUET and other competitive tests.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>
                      Quality of Study Material
                    </h5>
                    <p className={styles.desc3}>
                      Comprehensive, updated, and CUET-aligned study material
                      can make all the difference. Make sure the institute
                      provides quality test series and mock papers.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>Learning Flexibility </h5>
                    <p className={styles.desc3}>
                      Depending on your schedule, opt for coaching that offers
                      various learning modes such as classroom, online, and
                      hybrid setups.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>
                      Fee Structure and Scholarships
                    </h5>
                    <p className={styles.desc3}>
                      Choose a center offering transparent fees and scholarships
                      to ease the financial burden.
                    </p>
                  </li>
                  <li className={`${styles.listItem} ${styles.listItemNo}`}>
                    <h5 className={styles.subTitle3}>Student Reviews </h5>
                    <p className={styles.desc3}>
                      Don’t shy away from asking current students about their
                      experiences. Honest reviews matter.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.cuetQuestionContainer}>
                <h3 className={`${styles.subTitle} ${styles.mt} ${styles.mb}`}>
                  Questions to Ask Before Enrolling
                </h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <h5 className={styles.subTitle3}>
                      {" "}
                      What is the student-to-teacher ratio?{" "}
                    </h5>
                  </li>
                  <li className={styles.listItem}>
                    <h5 className={styles.subTitle3}>
                      Are there frequent doubt-clearing sessions?{" "}
                    </h5>
                  </li>
                  <li className={styles.listItem}>
                    <h5 className={styles.subTitle3}>
                      Do they offer personalized mentorship?{" "}
                    </h5>
                  </li>
                  <li className={styles.listItem}>
                    <h5 className={styles.subTitle3}>
                      Are there scholarship opportunities or fee discounts?
                    </h5>
                  </li>
                  <li className={styles.listItem}>
                    <h5 className={styles.subTitle3}>
                      What is the frequency of mock tests and performance
                      feedback?
                    </h5>
                  </li>
                </ul>
              </div>
              <div className={styles.cuetQuestionContainer}>
                <h3 className={`${styles.subTitle} ${styles.mt} ${styles.mb}`}>
                  Top Features of the Best CUET Coaching Centers in Delhi
                </h3>
                <p className={styles.desc}>
                  What can the best CUET coaching centers in Delhi offer you?
                  Here are the essential features to look out for.
                </p>
                <div className={styles.questionContainer}>
                  <h4 className={styles.subTitle2}>
                    Comprehensive Study Material{" "}
                  </h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        CUET-specific, detailed, and regularly updated.
                      </p>
                    </li>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        Includes tips, tricks, and past-year question analyses.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.questionContainer}>
                  <h4 className={styles.subTitle2}>
                    Expert Faculty and Personalized Attention
                  </h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        One-on-one mentorship to solve individual doubts.
                      </p>
                    </li>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        Regular performance tracking boosts accountability.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.questionContainer}>
                  <h4 className={styles.subTitle2}>
                    Mock Tests and Performance Analysis{" "}
                  </h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        Practicing with CUET-aligned mock tests improves time
                        management and accuracy.
                      </p>
                    </li>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        Get a detailed breakdown of performance to identify weak
                        areas.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.questionContainer}>
                  <h4 className={styles.subTitle2}>Flexible Learning Modes </h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        Options for classroom, online, and hybrid models to
                        accommodate your preferences.
                      </p>
                    </li>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        Access to recorded sessions if you miss a class.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.questionContainer}>
                  <h4 className={styles.subTitle2}>
                    Scholarships and Financial Aid{" "}
                  </h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>Merit-based fee waivers.</p>
                    </li>
                    <li className={styles.listItem}>
                      <p className={styles.desc}>
                        Regular scholarship tests to reward deserving students.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.cuetQuestionContainer}>
                <h3 className={`${styles.subTitle} ${styles.mt} ${styles.mb}`}>
                  Why CUET Plus is the Best CUET Coaching in Delhi
                </h3>
                <p className={styles.desc}>
                  If you’re looking for top CUET coaching in Delhi, CUET Plus is
                  a name you can trust. Here’s why thousands of students prefer
                  CUET Plus for their preparation.
                </p>
                <div className={styles.cuetInfo}>
                  <div className={styles.questionContainer}>
                    <h4 className={styles.subTitle2}>
                      An Overview of CUET Plus
                    </h4>
                    <p className={styles.desc2}>
                      CUET Plus is India’s fastest-growing education platform,
                      specializing in CUET and board exam preparation. With
                      years of experience and a student-first approach, CUET
                      Plus is redefining coaching standards in Delhi.
                    </p>
                    <h4 className={styles.subTitle2}>
                      Key Features of CUET Plus{" "}
                    </h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Expert Faculty –</strong> Learn from the best
                          in the industry with decades of teaching experience.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Comprehensive Tests –</strong> CUET-aligned
                          test series with mock exams that simulate the real
                          experience.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Advanced LMS Platform –</strong> An
                          interactive and user-friendly Learning Management
                          System for online classes, recorded lectures, and
                          study resources.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Stream and Career Guidance –</strong>{" "}
                          Dedicated counselors to help students choose the right
                          career path and strategies.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>ScholarPlus Program –</strong> Offering
                          scholarships to deserving students to reduce financial
                          stress
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.questionContainer}>
                    <h4 className={styles.subTitle2}>Success Stories</h4>
                    <p className={styles.desc2}>
                      CUET Plus has helped hundreds of students secure positions
                      in India’s top universities. Here’s what some of them had
                      to say:
                    </p>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <i>
                            “CUET Plus was the game-changer for me. Their mock
                            tests and personalized feedback helped me ace the
                            exam!” – Alok, DU aspirant.
                          </i>
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <i>
                            “The LMS was incredible—available 24/7, it allowed
                            me to revise anytime!” – Neha, JNU aspirant.
                          </i>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.questionContainer}>
                    <h4 className={styles.subTitle2}>
                      Benefits of Joining CUET Coaching in Delhi{" "}
                    </h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Professional Guidance –</strong> Learning from
                          experts ensures efficient preparation.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Focused Learning –</strong> Coaching provides
                          structure and a clear study path.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Boosted Confidence –</strong> Consistent
                          practice, coupled with feedback, keeps you exam-ready.
                        </p>
                      </li>
                      <li className={styles.listItem}>
                        <p className={styles.desc3}>
                          <strong>Networking –</strong> Connect with peers and
                          mentors to grow your academic circle.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "22%" }} className={styles.mobileBlog}>
              <CenterBlogCard centerBlogData={centerBlogData} />
            </div>
          </div>

          <FAQ faqs1={faqs1} customStyle={{ width: "100%" }} />
          <CenterNewsletter />
        </div>
      </div>
    </>
  );
};

export default CenterDelhi;

export const CenterHeadCard = ({ title, imgUrl }) => {
  return (
    <div className={styles.top}>
      <img className={styles.blogImage} src={imgUrl} alt={title} />
      <div className={styles.overlay} />
      <h1 className={styles.head}>{title}</h1>
    </div>
  );
};

const centerBlogData = [
  {
    image: Blog,
    title: "Best CUET Coaching in Gurgaon",
    description: "Cook, Wellness Expert, Entrepreneur",
  },
  {
    image: AsamRangGhar,
    title: "Best CUET Coaching in Noida",
    description: "Cook, Wellness Expert, Entrepreneur",
  },
  {
    image: Blog,
    title: "Best CUET Coaching in Faridabad",
    description: "Cook, Wellness Expert, Entrepreneur",
  },
  {
    image: AsamRangGhar,
    title: "Best CUET Coaching in Gurgaon",
    description: "Cook, Wellness Expert, Entrepreneur",
  },
  {
    image: Blog,
    title: "Best CUET Coaching in Ghaziabad",
    description: "Cook, Wellness Expert, Entrepreneur",
  },
];

export const CenterBlogCard = ({ centerBlogData }) => {
  return (
    <div className={styles.bottomLeft}>
      {centerBlogData.map((item, index) => (
        <div key={index} className={styles.item}>
          <img src={item.image} alt="blog" />
          <h4 className={styles.itemTitle}>{item.title}</h4>
          <p className={styles.itemDesc}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
