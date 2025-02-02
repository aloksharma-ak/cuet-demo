import React, { useEffect, useRef } from "react";
import styles from "./CounselingMobile.module.css";
import introImg from "../../../../../assets/CUET (2).png";
import cardImg1 from "../../../../../assets/b1.png";
import cardImg2 from "../../../../../assets/b2.png";
import cardImg3 from "../../../../../assets/b3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../../../HomePage/CuetBenefit/CuetBenefit.css";
import WorkSection from "../../../../HomePage/WorkSection/WorkSection";
import FAQ from "../../../../HomePage/Communities/FAQ/FAQ";
import FacultySection from "../../../../HomePage/FacultySection/FacultySection";
import CounsellingTestimonial from "../../../../CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";

import review_img_1 from "../../../../../assets/15.png";
import review_img_2 from "../../../../../assets/31.png";
import review_img_3 from "../../../../../assets/30.png";
import review_img_4 from "../../../../../assets/16.png";
import review_img_5 from "../../../../../assets/12.png";
import review_img_6 from "../../../../../assets/20.png";

gsap.registerPlugin(ScrollTrigger);

export default function CounselingMobile() {
  const benefitCardsRef = useRef([]); // to store references of all benefitCardContent

  useEffect(() => {
    // GSAP animation for benefit cards
    benefitCardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.9 }, // starting values
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const faqs1 = [
    {
      question: "How does the counseling process work at CUET Plus?",
      answer:
        "Our counseling process includes an initial consultation, personalized assessments, one-on-one sessions, and ongoing support to help you achieve your academic and career goals.",
    },
    {
      question: "Who can benefit from CUET Plus counseling?",
      answer:
        "Our counseling is ideal for students in Classes 8th to 12th who need guidance on stream selection, career planning, and college admissions.",
    },
    {
      question: "How do I book a session?",
      answer:
        "You can book a session online through our website or visit your nearest CUET Plus center.",
    },
    {
      question: "Is the counseling session one-on-one?",
      answer:
        "Yes, we offer personalized one-on-one sessions to ensure your unique needs are addressed.",
    },
    {
      question: "How long does a session last?",
      answer:
        "Each session typically lasts 45-60 minutes, depending on your requirements.",
    },
  ];

  const faqs2 = [
    {
      question: "Can parents be involved in the counseling process?",
      answer:
        "Absolutely. We encourage parents to be part of the process, especially in the initial sessions.",
    },
    {
      question: "What topics are covered during the counseling sessions?",
      answer:
        "Our sessions cover a wide range of topics, including stream and subject selection, career exploration, college admissions strategies, scholarship opportunities, and test preparation guidance.",
    },
    {
      question: "Are there any follow-up sessions available?",
      answer:
        "Yes, we offer follow-up sessions to track your progress, answer additional questions, and provide ongoing support throughout your academic and career journey.",
    },
    {
      question: "Are the counselors experienced in career planning?",
      answer:
        "Yes, our counselors are highly qualified and experienced in career planning, stream selection, and college admissions, ensuring personalized and professional guidance.",
    },
    {
      question: "Is the counseling service available online?",
      answer:
        "Yes, we provide both online and offline counseling options to accommodate your convenience and preferences.",
    },
  ];

  

const review_imgs = [
  {
    img: review_img_1,
    name: "Priya S.",
    class: "Class 10 Student",
    description:
      "CUET Plus helped me choose the right stream for my future. Disha Plus gave me clarity on my strengths, and now I'm excelling in Humanities!",
  },
  {
    img: review_img_4,
    name: "Rajat K.",
    class: "Class 12 Student",
    description:
      "The Vision Plus counseling session was life-changing. I now have a clear career plan, and my confidence has skyrocketed!",
  },
  {
    img: review_img_3,
    name: "Aarti M.",
    class: "Class 10 Student",
    description:
      "I was unsure about my options after Class 10, but CUET Plus stream counseling made it simple. Their advice was practical and personalized.",
  },
  {
    img: review_img_1,
    name: "Ankita J.",
    class: "Class 9 Student",
    description:
      "CUET Plus counselors are incredibly knowledgeable. They guided me toward a stream that matches my passion and career goals.",
  },
  {
    img: review_img_2,
    name: "Harsh T.",
    class: "Class 10 Student",
    description:
      "The counseling session at CUET Plus was so detailed. They not only helped me pick a stream but also explained future career opportunities.",
  },
  {
    img: review_img_6,
    name: "Rohan S.",
    class: "Class 10 Student",
    description:
      "I loved how the Disha Plus program analyzed my skills and interests. Now, I’m on the right path for my dream career in Science!",
  },
  {
    img: review_img_3,
    name: "Simran D.",
    class: "Class 9 Student",
    description:
      "CUET Plus helped me identify my true potential. I’m now pursuing Commerce, and I couldn’t be happier with my choice.",
  },
  {
    img: review_img_1,
    name: "Mahak L.",
    class: "Class 12 Student",
    description:
      "Vision Plus gave me the confidence to pursue my dream college. Their guidance on CUET preparation was spot on!",
  },
  {
    img: review_img_5,
    name: "Arjun V.",
    class: "Class 11 Student",
    description:
      "The counseling session was super interactive. They even helped me plan out a roadmap for CUET and board exams together.",
  },
  {
    img: review_img_3,
    name: "Nidhi P.",
    class: "Class 10 Student",
    description:
      "I feel so much more confident after my counseling session. CUET Plus simplified the overwhelming process of stream selection.",
  },
];

  return (
    <div className={styles.counsellingPage}>
      <div className={styles.counsellingIntro}>
        <div className={styles.counsellingIntroContent}>
          <h1 className={styles.introTitle}>
            Unlock Your Path with <br />
            <span>Expert Counseling</span> at CUET Plus
          </h1>
          <p className={styles.introDesc}>
            Your future matters. Get personalized guidance to make the right
            choices for your education and career.
          </p>
          <button className={styles.Btn}>Book a Free Counseling Session</button>
        </div>
        <div className={styles.counsellingIntroImage}>
          <img src={introImg} className={styles.img} />
        </div>
      </div>
      <div className={styles.whyContainer}>
        <h2 className={styles.title}>Why Choose CUETPlus Counseling?</h2>
        <h3 className={styles.subtitle}>
          Empowering Students to Make Confident Decisions
        </h3>
        <p className={styles.description}>
          At CUETPlus, we understand the overwhelming challenges face when
          deciding their educational and career paths. Whether you're in 8th
          grade deciding your stream or a 12th grader standing at the crossroads
          of career options, our counseling services are designed to provide
          clarity, confidence, and direction. Here's why CUETPlus Counseling
          stands out as the trusted choice for students and parents:
        </p>
      </div>
      <div className={styles.benefitCard}>
        {[
          {
            image: cardImg1,
            title: "Personalized Guidance for Every Student",
            description:
              "Our one-on-one counseling sessions are tailored to match your unique strengths, and goals, ensuring decisions are truly yours.",
          },
          {
            image: cardImg2,
            title: "Scientifically Backed Assessments",
            description:
              "We use psychometric tests and aptitude evaluations to uncover your potential, providing accurate, research-based guidance.",
          },
          {
            image: cardImg3,
            title: "Expert Team You Can Trust",
            description:
              "Our counselors are seasoned professionals with years of experience in education and career guidance, ensuring reliable advice.",
          },
          {
            image: cardImg3,
            title: "Holistic Approach Beyond Academics",
            description:
              "We focus not only on academics but also on emotional intelligence, personality development, and soft skills, preparing you for life.",
          },
          {
            image: cardImg3,
            title: "Clarity and Confidence in Decisions",
            description:
              "By simplifying complex choices, we empower students to confidently navigate their paths toward academic and career success.",
          },
        ].map((benefit, index) => (
          <div
            className={styles.benefitCardContent}
            key={index}
            ref={(el) => (benefitCardsRef.current[index] = el)}
          >
            <div className={styles.benefitIcon}>
              <img
                src={benefit.image}
                alt="Best CUETPlus Counselling"
                className={styles.img}
              />
            </div>
            <div
              className={`benefitCardContentText ${styles.benefitCardContentText}`}
            >
              <h5
                className={`benefitCardContentHead ${styles.benefitCardContentHead}`}
              >
                {benefit.title}
              </h5>
              <p
                className={`benefitCardContentPara ${styles.benefitCardContentPara}`}
              >
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <button className={`${styles.Btn}`}>Get Stared Tody</button>
      </div>

      <div className={styles.counselingServices}>
        <h2 className={`${styles.title} ${styles.serviceTitle}`}>
          Our Counseling Services
        </h2>
        <div className={styles.plusContainer}>
          {[
            {
              title: (
                <>
                  Stream Counseling –{" "}
                  <span className={styles.orangeText}>Disha Plus</span>
                </>
              ),
              desc: `Choosing the right stream in classes 8th, 9th, and 10th is both important and challenging. Our Disha Plus program helps students identify their strengths, interests, and future goals to choose the best path forward.`,
              subTitle1: `Who It’s For:`,
              subDesc1: `Students in classes 8th to 10th.`,
              subTitle2: `Key Features:`,
              list: [
                "Personality and aptitude assessments",
                "Guidance in choosing Commerce, Humanities, or Science",
                `Insights into future academic and career options within each stream`,
              ],
              btn: "Explore Disha Plus Counseling",
            },
            {
              title: (
                <>
                  Career Counseling –{" "}
                  <span className={styles.orangeText}>Vision Plus</span>
                </>
              ),
              desc: `Making career decisions during 11th and 12th grades can be overwhelming. Our Vision Plus program provides personalized career guidance, helping students explore career options, prepare for exams, and navigate college admissions with clarity and confidence`,
              subTitle1: `Who It’s For:`,
              subDesc1: `Students in classes 11th and 12th.`,
              subTitle2: `Key Features:`,
              list: [
                "Comprehensive career options analysis",
                "CUET and other exam preparation guidance",
                `Support for university and course selection`,
              ],
              btn: "Explore Vision Plus Counseling",
            },
          ].map((service, index) => (
            <div key={index} className={styles.plusCard}>
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardDescription}>{service.desc}</p>
              <p className={styles.subTitle}>{service.subTitle1}</p>
              <p className={styles.subDescription}>{service.subDesc1}</p>
              <p className={styles.subTitle}>{service.subTitle2}</p>
              <ul className={styles.list}>
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className={`${styles.exploreButton} ${styles.Btn}`}>
                {service.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

     <WorkSection />
      <div className={styles.btn}>
        <button className={`${styles.Btn}`}>Get Stared Tody</button>
      </div>

      {/* <CounsellingTestimonial review_imgs={review_imgs} />
      <div className={styles.btn}>
        <button className={`${styles.Btn}`}>See More Success Stories</button>
      </div>  */}

      <FacultySection
        title="Meet Our Expert Counselors"
        facultySection1={{ padding: "4vw 0% 1vw" }}
        />
      <div className={styles.btn}>
        <button className={`${styles.Btn}`}>Meet Our Team</button>
      </div>

      <FAQ faqs1={faqs1} faqs2={faqs2} heading="Frequently Asked Questions" />

      <div className={styles.readyContainer}>
        <h2 className={styles.title}>Ready to Take the Next Step?</h2>
        <p className={styles.description}>
          Don’t leave your future to chance. Get the guidance you need to make
          informed decisions and reach your full potential. Whether you’re
          choosing a stream or mapping out a career, CUET Plus is here to help.
        </p>
        <div className={styles.btn}>
          <button className={`${styles.Btn}`}>
            Book Your Free Counseling Session Today
          </button>
        </div>
      </div>
    </div>
  );
}
