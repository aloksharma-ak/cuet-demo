import React from "react";
import SparkHero from "../components/Spark/SparkHero/SparkHero";
import ReadyForSpark from "../components/Spark/ReadyForSpark/ReadyForSpark";
import SparkBenefits from "../components/Spark/SparkBenefits/SparkBenefits";
import sparkImage from "../assets/sparkHeroImg.png";
import okImage from "../assets/ok.jpg";
import expert_faculty from "../assets/expert_faculty.png";
import book from "../assets/book.png";
import two_way from "../assets/two-way.png";
import deep_learning from "../assets/deep-learning.png";
import early_bird from "../assets/early-bird.png";
import money from "../assets/money.png";
import Spark_12_Year from "../assets/Spark_12_Year.png";

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

const Spark = () => {
  const sparkHeroData = {
    subTitle: "Class XI",
    title:
      "Your Comprehensive Two-Year Foundation Program for CUET and Board Exams",
    description:
      "Exams 2 Years Foundations Level Program for Class 11th, 12th Board, and CUET Preparation",
    buttons: [
      { text: "Register for Admission Test", link: "/scholarship-form" },
      { text: "Know More", link: "know-more" },
    ],
    imageSrc: sparkImage,
  };

  const dataContainer = {
    heading: {
      desc: `Are you ready to take your academic journey to the next level? SPARK
          by CUET Plus is theultimate two-year foundation program meticulously
          designed for students of Classes 11thwho aspire to excel in their
          11th, board examinations and the Common University EntranceTest
          (CUET). This course lays a strong academic foundation, integrating the
          school syllabusand CUET preparation, ensuring students are
          well-equipped to achieve their academic goals.`,
    },
    overlayData: {
      title:
        "Make the right decision and join the program that has produced the maximum toppers in CUET",
      imageSrc: okImage,
      imageAlt: "Program Success",
    },
    programData: {
      title: "About The Program",
      description:
        "SPARK is a meticulously designed two-year coaching program that equips students in Classes 11 and 12 with the skills, knowledge, and confidence needed to build a strong foundation of domain subject, board exams, and the Common University Entrance Test (CUET). By offering a balanced and integrated approach, this program ensures that students achieve excellence in every academic challenge they face during these critical years.",
      extraDescription:
        "Additionally, SPARK is eligible for the prestigious Scholarship, offering a 100% fee waiver to deserving students. This scholarship ensures accessibility to top-notch education without financial barriers.",
      buttonText: "Apply for Scholarship",
      buttonLink: "/cuet-scholarship/star-scholarship",
    },
    classroomProgramData: {
      title: "Two Year Classroom Program - The Bedrock To A Fruitful Career",
      description:
        "CUET SPARK stands out as a trusted and result-oriented coaching program for students seeking top-notch guidance and preparation. Here’s why it’s the ideal choice:",
      cardData: [
        {
          img_url: two_way,
          title: "Dual Focus on Boards and CUET:",
          description:
            "With a carefully crafted curriculum, Compass Plus prepares students for the demands of both board exams and CUET, ensuring a seamless academic journey.",
        },
        {
          img_url: money,
          title: "SPARK Scholarship Eligibility",
          description:
            "Students enrolled in Compass Plus can avail themselves of the SPARK Scholarship, which provides a 100% tuition fee waiver, making quality education accessible to everyone.",
        },
        {
          img_url: early_bird,
          title: "Early Start Advantage",
          description:
            "Starting in Class 11 allows students to build a strong conceptual foundation while gradually mastering CUET-specific topics, avoiding last-minute stress.",
        },
        {
          img_url: deep_learning,
          title: "Structured and Personalized Learning",
          description:
            "The program is tailored to individual needs, offering personalized mentorship, progress tracking, and feedback to help students achieve their best.",
        },
        {
          img_url: expert_faculty,
          title: "Expert Faculty",
          description:
            "Learn from the best! Our experienced and result-oriented faculty specialize in board and CUET preparation, providing personalized attention to every student.",
        },
        {
          img_url: book,
          title: "Comprehensive Resources",
          description:
            "Gain access to expertly curated study material, topic-wise notes, solved examples, and question banks to deepen your understanding and sharpen your problem-solving skills.",
        },
      ],
    },
    keyFeaturesData: {
      heading: {
        title: "Key Features of",
        span: "SPARK",
      },
      keyFeatures: [
        {
          title: "Integrated Curriculum for Dual Success",
          desc: [
            "Board Exam Preparation: Covers all subjects in alignment with the Class 11 and 12 syllabus for CBSE and other state boards.",
            "CUET Preparation: Focuses on subject-specific and general test topics, offering in-depth practice and strategic guidance.",
          ],
        },
        {
          title: "Regular Assessments and Mock Tests",
          desc: [
            "Topic-wise Tests: Frequent assessments to evaluate understanding and mastery of concepts.",
            "Full-Length Mock Tests: Simulate CUET and board exam conditions to build confidence and improve time management.",
            "Detailed Feedback: Comprehensive performance analysis to help students identify strengths and areas for improvement.",
          ],
        },
        {
          title: "Advanced Learning Techniques",
          desc: [
            "Concept Clarity Sessions: Focus on building a strong foundation with in-depth explanations.",
            "Doubt Resolution: 24/7 support through live doubt-solving sessions and an advanced Learning Management System (LMS).",
            "Interactive Classes: Use of gamified learning, engaging quizzes, and discussions to enhance student engagement.",
          ],
        },
        {
          title: "Holistic Development",
          desc: [
            "Time Management Workshops: Learn effective strategies to balance board exams and CUET preparation.",
            "Soft Skills Training: Workshops on communication, stress management, and goal-setting.",
            "Motivational Seminars: Sessions to inspire and boost confidence, led by experienced mentors.",
          ],
        },
      ],
    },
    programStructureData: {
      cards: [
        {
          title: "Program Structure",
          subTitle: "Year 1: Class 11 Foundation Building",
          desc: [
            "Core focus on strengthening fundamental concepts in all subjects.",
            "Early exposure to CUET-related topics and question patterns.",
            "Gradual development of analytical and reasoning skills",
          ],
        },
        {
          subTitle: "Year 2: Class 12 Advanced Preparation",
          desc: [
            "In-depth coverage of the Class 12 syllabus for board exams.",
            "Intensive practice sessions for CUET-specific modules, including General Test, Domain Subjects, and Language Proficiency.",
            "Rigorous revision and targeted mock tests for optimal performance",
          ],
          img_url: Spark_12_Year,
        },
      ],

      bannerData: {
        title: "Scholarship Opportunity: Spark Scholarship",
        desc: "Students enrolled in CUET Spark are eligible for the Scholarship, a prestigious program offering a 100% tuition fee waiver. This scholarship is designed to reward academic excellence and provide financial support to deserving students.",
        link: "/cuet-scholarship/star-scholarship",
        buttonText: "Learn More",
      },

      enrollData: {
        title: "Who Should Enroll in CUET SPARK?",
        list: [
          "Students entering Class 11 who aspire to balance their board exams and CUET preparation effectively.",
          "Learners aiming to secure admission to prestigious universities by excelling in CUET.",
          "Those who want to start early and avoid the pressure of last-minute preparation.",
        ],
      },
    },
  };

  const benefitsData = {
    addBenefitData: [
      {
        title: "Flexible Learning Modes:",
        items: [
          "Classroom Program: Engage with expert faculty and peers in interactive sessions.",
          "Hybrid Program: Combine the best of online and offline learning for greater flexibility.",
          "Online Program: Access live classes, recordings, and study materials anytime, anywhere.",
        ],
      },
      {
        title: "Scholarship Opportunities:",
        description:
          "Students can avail themselves of the Foundation Forward Scholarship, offering full or partial fee waivers to eligible candidates, making quality education accessible to all.",
        isParagraph: true,
      },
      {
        title: "Nationwide Centers:",
        description:
          "Learn at CUET Plus’s state-of-the-art centers equipped with modern facilities for an immersive learning experience.",
        isParagraph: true,
      },
      {
        title: "Dedicated LMS:",
        items: [
          "Access digital resources, quizzes, and progress reports.",
          "Interactive and user-friendly platform for seamless learning.",
        ],
      },
      {
        title: "Expert Faculty:",
        items: [
          "Seasoned educators with years of experience in CUET and board exam preparation.",
          "Personalized mentorship to guide students every step of the way.",
        ],
      },
    ],
    testimonialData: {
      heading: {
        title: "Success Stories",
        desc: `Over the years, CUET SPARK has produced numerous achievers who have excelled in both board exams and CUET,securing admission to top universities in India.`,
      },
      review_imgs: [
        {
          img: review_img_1,
          name: "Aman R.",
          class: "Scholarship Recipient",
          description:
            "The ScholarPlus scholarship covered my tuition fees, making quality education accessible for me.Thank you, CUET Plus!",
        },
        {
          img: review_img_2,
          name: "Pooja S.",
          class: "Class 12 Student",
          description:
            "I received a full tuition waiver under the AspirePlus scholarship. It was a game-changer for my CUET preparation!",
        },
        {
          img: review_img_3,
          name: "Kunal D.",
          class: "CUET Aspirant",
          description:
            "Star made my CUET journey affordable. The scholarship helped me focus on studying without worrying about finances.",
        },
        {
          img: review_img_4,
          name: "Aditi J.",
          class: "Class 11 Student",
          description:
            "I didn’t think I could afford coaching, but ScholarPlus turned my dreams into reality. Highly recommend CUET Plus!",
        },
        {
          img: review_img_5,
          name: "Neha G.",
          class: "Class 12 Student",
          description:
            "CUET Plus scholarships don’t just reward talent; they empower students to achieve their best. Grateful for this opportunity!",
        },
        {
          img: review_img_6,
          name: "Varun T.",
          class: "Scholarship Awardee",
          description:
            "Winning the AchievePlus scholarship gave me the motivation to work even harder. The team at CUET Plus is amazing!",
        },
        {
          img: review_img_7,
          name: "Rohit K.",
          class: "Class 11 Student",
          description:
            "The ScholarPlus assessment was straightforward, and the rewards are incredible. CUET Plus truly supports students like me.",
        },
        {
          img: review_img_8,
          name: "Anjali S.",
          class: "CUET Candidate",
          description:
            "My full scholarship under Star made my dream of studying at a top university possible. Can’t thank CUET Plus enough!",
        },
        {
          img: review_img_9,
          name: "Akash N.",
          class: "Class 11 Student",
          description:
            "CUET Plus scholarships are the best for students aiming for CUET. The application process was seamless and transparent.",
        },
        {
          img: review_img_10,
          name: "Ishita M.",
          class: "Class 12 Student",
          description:
            "Thanks to AspirePlus, I didn’t just save on fees but also gained access to top-quality coaching and resources. Highly recommend!",
        },
      ],
    },
    ctaBtn: {
      link: "scholarship-form",
      btn: "Join Our Success Stories",
    },
    ctaData: {
      heading: {
        title: "Enroll Today and Shape Your Future with SPARK!",
        desc: `Take the first step toward a brighter academic future. With SPARK,
          you’ll not only prepare for CUET but also build a strong academic
          foundation that lasts a lifetime.`,
      },
      buttons: [
        {
          btn: "Book a Free Demo Class Now!",
          desc: "Explore our expert teaching methods with a complimentary demo session.",
          link: "/demo-class", // Update this to the correct path
        },
        {
          btn: "Enroll Now and Secure Your Future",
          desc: "Don’t miss this chance to build a strong foundation for your dream university.",
          link: "/enroll", // Update this to the correct path
        },
      ],
    },
  };

  return (
    <main style={{ marginTop: "4rem" }}>
      <SparkHero {...sparkHeroData} />
      <ReadyForSpark {...dataContainer} />
      <SparkBenefits {...benefitsData} />
    </main>
  );
};

export default Spark;
