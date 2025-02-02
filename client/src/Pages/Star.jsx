import React from "react";
import SparkHero from "../components/Spark/SparkHero/SparkHero";
import ReadyForSpark from "../components/Spark/ReadyForSpark/ReadyForSpark";
import SparkBenefits from "../components/Spark/SparkBenefits/SparkBenefits";
import starImage from "../assets/starImage.png";
import okImage from "../assets/ok.jpg";
import expert_faculty from "../assets/expert_faculty.png";
import book from "../assets/book.png";
import two_way from "../assets/two-way.png";
import deep_learning from "../assets/deep-learning.png";
import early_bird from "../assets/early-bird.png";
import money from "../assets/money.png";
import Spark_12_Year from "../assets/starYear.png";

import review_img_1 from "../assets/30.png";
import review_img_2 from "../assets/18.png";
import review_img_3 from "../assets/6.png";
import review_img_4 from "../assets/14.png";
import review_img_5 from "../assets/13.png";
import review_img_6 from "../assets/22.png";
import review_img_7 from "../assets/21.png";
import review_img_8 from "../assets/20.png";
import review_img_9 from "../assets/28.png";
import review_img_10 from "../assets/24.png";

const Star = () => {
  const sparkHeroData = {
    subTitle: `CUET ASPIRANTS`,
    title: `Comprehensive Coaching forCUET Excellence`,
    description: `Comprehensive coaching program designed to prepare students effectively for the CUET final exams success`,
    buttons: [
      { text: `Register for Admission Test`, link: `/scholarship-form` },
      { text: `Know More`, link: `know-more` },
    ],
    imageSrc: starImage,
  };

  const dataContainer = {
    heading: {
      desc: `Are you ready to conquer your academic aspirations and secure your future? STAR us by CUET Plus is an all-encompassing program designed for CUET aspirants. This comprehensive course delivers advanced preparation strategies, personalized guidance, and in-depth coverage of CUET concepts to help you excel and achieve your dream university admission!`,
    },
    overlayData: {
      title: `Make the right decision
                and join the program
                that has produced the
                maximum toppers in
                Board and CUET`,
      imageSrc: okImage,
      imageAlt: `Program Success`,
    },
    programData: {
      title: `About The Program`,
      description: `STAR is a premium coaching program meticulously designed for students
                    who aspire to achieve unparalleled success in the Common University
                    Entrance Test (CUET). With a comprehensive approach covering all CUET
                    subjects, including domain-specific topics, general tests, and language
                    proficiency, CUET STAR ensures students are fully equipped to secure
                    top ranks and gain admission to prestigious universities.`,
      extraDescription: `As an exclusive benefit, students enrolling in CUET STAR are eligible for
                    the Scholarship, offering a 100% fee waiver to exceptional candidates.
                    This opportunity makes quality education accessible and affordable for
                    every dedicated learner.`,
      buttonText: `Apply for Scholarship`,
      buttonLink: `/cuet-scholarship/star-scholarship`,
    },
    classroomProgramData: {
      title: `Two Year Classroom Program - The bedrock To A Fruitful Career`,
      description: `CUET STAR stands as the ultimate coaching program for students committed to excelling in the CUET. Here's why it’s the best choice for your academic journey:`,
      cardData: [
        {
          img_url: two_way,
          title: `All-Inclusive CUET Preparation`,
          description: `Covers all sections of CUET: General Test, domain-specific subjects, and language proficiency.`,
        },
        {
          img_url: money,
          title: `STAR Scholarship Eligibility`,
          description: `Secure a 100% tuition fee waiver with the prestigious Excel Plus Scholarship, enabling access to quality education without financial constraints`,
        },
        {
          img_url: early_bird,
          title: `Fast-Track Learning`,
          description: `Designed for students with limited time, the program ensures comprehensive coverage of topics with an emphasis on efficiency and effectiveness.`,
        },
        {
          img_url: deep_learning,
          title: `Structured and Personalized Learning`,
          description: `The program is tailored to individual needs, offering personalized mentorship,progress tracking, and feedback to help students achieve their best.`,
        },
        {
          img_url: expert_faculty,
          title: `Expert Faculty`,
          description: `Learn from the best! Our experienced and result-oriented faculty specialize in board and CUET preparation, providing personalized attention to every student.`,
        },
        {
          img_url: book,
          title: `Comprehensive Resources`,
          description: `Gain access to expertly curated study material, topic-wise notes,solved examples, and question banks to deepen your understanding and sharpen your problem-solving skills.`,
        },
      ],
    },
    keyFeaturesData: {
      heading: {
        title: `Key Features of`,
        span: `SHINE`,
      },
      keyFeatures: [
        {
          title: `Tailored Curriculum for CUET aspirants`,
          desc: [
            `Domain Subjects Preparation: Focused coaching on CUET domain-specific topics to ensure mastery.`,
            `English & General Test Preparation: Specialized training in language proficiency, reasoning, and aptitude skills.`,
          ],
        },
        {
          title: `Regular Assessments and Feedback`,
          desc: [
            `Weekly Tests: Track progress and solidify understanding through frequent evaluations.`,
            `Mock Exams: Simulate real exam conditions to enhance confidence and performance.`,
            `Detailed Analysis: Identify strengths and areas for improvement with actionable feedback.`,
          ],
        },
        {
          title: `Interactive and Engaging Learning Environment`,
          desc: [
            `Small Batch Sizes: Ensures personalized attention from expert faculty.`,
            `Doubt Resolution: Dedicated sessions and round-the-clock support through our Learning Management System (LMS).`,
            `Live and Recorded Classes: Flexibility to revisit lessons anytime for thorough revision.`,
          ],
        },
        {
          title: `Holistic Preparation Approach`,
          desc: [
            `CUET-Focused Modules: Special emphasis on CUET question patterns, marking schemes, and strategies.`,
            `Time Management Skills: Learn effective techniques to balance board exams and CUET preparation.`,
            `Stress Management Workshops: Stay motivated and focused during high-pressure times.`,
          ],
        },
      ],
    },
    programStructureData: {
      cards: [
        {
          title: `Program Structure`,
          subTitle: `Phase 1: Concept Building and Foundation Strengthening`,
          desc: [
            `Establish a strong base in core CUET subjects.`,
            `Focus on conceptual clarity andapplication-based learning.`,
          ],
        },
        {
          subTitle: `Phase 2: Advanced Skill Development`,
          desc: [
            `Enhance problem-solving techniques and time management skills.`,
            `Deep dive into domain-specific topics and language proficiency modules.`,
          ],
          subTitle2: `Phase 3: Exam-Focused Practice and Revision`,
          desc2: [
            `Solve full-length mock tests under exam-like conditions.`,
            `Execute targeted revision strategies to reinforce knowledge and boost confidence.`,
          ],
          img_url: Spark_12_Year,
        },
      ],

      bannerData: {
        title: `Scholarship Opportunity: STAR Scholarship`,
        desc: `By enrolling in STAR, students can apply for the Scholarship, which offers a 100% tuition fee waiver to meritoriouscandidates. This program ensures that financial barriers do not stand in the way of achieving academic excellence.`,
        link: `/cuet-scholarship/star-scholarship`,
        buttonText: `Learn More`,
      },

      enrollData: {
        title: `Who Should Enroll in CUET STAR?`,
        list: [
          `Students aiming for top-tier universities throughCUET.`,
          `Learners seeking an all-encompassing coaching program to cover every aspect of the CUET.`,
          `Those ready to invest time and effort in their ultimate preparation journey for academic success.`,
        ],
      },
    },
  };

  const benefitsData = {
    addBenefitData: [
      {
        title: `Flexible Learning Modes:`,
        items: [
          `Classroom Program: Engage with expert faculty and peers in interactive sessions.`,
          `Hybrid Program: Combine the best of online and offline learning for greater flexibility.`,
          `Online Program: Access live classes, recordings, and study materials anytime, anywhere.`,
        ],
      },
      {
        title: `Scholarship Opportunities:`,
        description: `Students can avail themselves of the Foundation Forward Scholarship, offering full or partial fee waivers to eligible candidates, making quality education accessible to all.`,
        isParagraph: true,
      },
      {
        title: `Nationwide Centers:`,
        description: `Learn at CUET Plus’s state-of-the-art centers equipped with modern facilities for an immersive learning experience.`,
        isParagraph: true,
      },
      {
        title: `Dedicated LMS:`,
        items: [
          `Access digital resources, quizzes, and progress reports.`,
          `Interactive and user-friendly platform for seamless learning.`,
        ],
      },
      {
        title: `Expert Faculty:`,
        items: [
          `Seasoned educators with years of experience in CUET and board exam preparation.`,
          `Personalized mentorship to guide students every step of the way.`,
        ],
      },
    ],
    testimonialData: {
      heading: {
        title: `Success Stories`,
        desc: `Over the years, CUET SPARK has produced numerous achievers who have excelled in both board exams and CUET,securing admission to top universities in India.`,
      },
      review_imgs: [
        {
          img: review_img_1,
          name: `Aman R.`,
          class: `Scholarship Recipient`,
          description: `The ScholarPlus scholarship covered my tuition fees, making quality education accessible for me.Thank you, CUET Plus!`,
        },
        {
          img: review_img_2,
          name: `Pooja S.`,
          class: `Class 12 Student`,
          description: `I received a full tuition waiver under the AspirePlus scholarship. It was a game-changer for my CUET preparation!`,
        },
        {
          img: review_img_3,
          name: `Kunal D.`,
          class: `CUET Aspirant`,
          description: `Star made my CUET journey affordable. The scholarship helped me focus on studying without worrying about finances.`,
        },
        {
          img: review_img_4,
          name: `Aditi J.`,
          class: `Class 11 Student`,
          description: `I didn’t think I could afford coaching, but ScholarPlus turned my dreams into reality. Highly recommend CUET Plus!`,
        },
        {
          img: review_img_5,
          name: `Neha G.`,
          class: `Class 12 Student`,
          description: `CUET Plus scholarships don’t just reward talent; they empower students to achieve their best. Grateful for this opportunity!`,
        },
        {
          img: review_img_6,
          name: `Varun T.`,
          class: `Scholarship Awardee`,
          description: `Winning the AchievePlus scholarship gave me the motivation to work even harder. The team at CUET Plus is amazing!`,
        },
        {
          img: review_img_7,
          name: `Rohit K.`,
          class: `Class 11 Student`,
          description: `The ScholarPlus assessment was straightforward, and the rewards are incredible. CUET Plus truly supports students like me.`,
        },
        {
          img: review_img_8,
          name: `Anjali S.`,
          class: `CUET Candidate`,
          description: `My full scholarship under Star made my dream of studying at a top university possible. Can’t thank CUET Plus enough!`,
        },
        {
          img: review_img_9,
          name: `Akash N.`,
          class: `Class 11 Student`,
          description: `CUET Plus scholarships are the best for students aiming for CUET. The application process was seamless and transparent.`,
        },
        {
          img: review_img_10,
          name: `Ishita M.`,
          class: `Class 12 Student`,
          description: `Thanks to AspirePlus, I didn’t just save on fees but also gained access to top-quality coaching and resources. Highly recommend!`,
        },
      ],
    },
    ctaBtn: {
      link: `scholarship-form`,
      btn: `Join Our Success Stories`,
    },
    ctaData: {
      heading: {
        title: `Start Your Journey to Success with shine`,
        desc: `Enroll in CUET STAR today and embark on your journey to CUET success. With the backing of the ExcelPlus Scholarship, offering a 100% tuition fee waiver, you can focus solely on achieving your academic dreams without financial stress.`,
      },
      buttons: [
        {
          btn: `Book a Free Demo Class Now!`,
          desc: `Explore our expert teaching methods with a complimentary demo session.`,
          link: `/demo-class`, // Update this to the correct path
        },
        {
          btn: `Enroll Now and Secure Your Future!`,
          desc: `Don’t miss this chance to build a strong foundation for your dream university.`,
          link: `/enroll`, // Update this to the correct path
        },
      ],
    },
  };

  return (
    <main style={{ marginTop: `4rem` }}>
      <SparkHero {...sparkHeroData} />
      <ReadyForSpark {...dataContainer} />
      <SparkBenefits {...benefitsData} />
    </main>
  );
};

export default Star;
