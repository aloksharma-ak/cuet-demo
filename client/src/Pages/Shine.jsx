import React from "react";
import SparkHero from "../components/Spark/SparkHero/SparkHero";
import ReadyForSpark from "../components/Spark/ReadyForSpark/ReadyForSpark";
import SparkBenefits from "../components/Spark/SparkBenefits/SparkBenefits";
import shineImage from "../assets/shineImage.png";
import okImage from "../assets/ok.jpg";
import expert_faculty from "../assets/expert_faculty.png";
import book from "../assets/book.png";
import two_way from "../assets/two-way.png";
import deep_learning from "../assets/deep-learning.png";
import early_bird from "../assets/early-bird.png";
import money from "../assets/money.png";
import Spark_12_Year from "../assets/shineYear.png";

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

const Shine = () => {
  const sparkHeroData = {
    subTitle: `Class XII`,
    title: `Your One-Year Intensive Program for CUET and Board Exam Success`,
    description: `1 Year Intermediate Level Program for Class 12th Board and CUET Preparation`,
    buttons: [
      { text: `Register for Admission Test`, link: `/scholarship-form` },
      { text: `Know More`, link: `know-more` },
    ],
    imageSrc: shineImage,
  };

  const dataContainer = {
    heading: {
      desc: `Are you prepared to elevate your academic performance and achieve your goals? SHINE by CUET Plus is a focused one-year program crafted exclusively for Class 12 students. This intensive course offers in-depth CUET preparation while reinforcing your board exam concepts, providing the perfect balance to ensure success in both!`,
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
      description: `CUET SHINE is a strategically designed one-year coaching program
          tailored for Class 12 students to excel in both board exams and the
          Common University Entrance Test (CUET). This program is perfect for
          those seeking a focused, high-impact approach to mastering their final
          year academics and CUET preparation.`,
      extraDescription: `As an added advantage, students enrolled in SHINE are eligible for the
          prestigious Scholarship, offering a 100% fee waiver for exceptional
          candidates. This ensures quality education is accessible to all motivated
          learners.`,
      buttonText: `Apply for Scholarship`,
      buttonLink: `/cuet-scholarship/star-scholarship`,
    },
    classroomProgramData: {
      title: `Two Year Classroom Program - The bedrock To A Fruitful Career`,
      description: `CUET SHINE is the ultimate solution for students aiming to climb the ladder of academic success in their final year of
        school. Here's what makes it stand out:`,
      cardData: [
        {
          img_url: two_way,
          title: `Dedicated Focus onClass 12 and CUET Preparation`,
          description: `Offers a streamlined curriculum covering all aspects of the Class 12 board exams and CUET, ensuring students are fully prepared.`,
        },
        {
          img_url: money,
          title: `SHINE ScholarshipEligibility`,
          description: `Unlock the opportunity to receive a
              100% tuition fee waiver through
              the Excel Plus Scholarship, making
              education affordable and stress-
              free.`,
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
          title: `Tailored Curriculum for Class 12 Students`,
          desc: [
            `Board Exam Mastery: Focused preparation for Class 12 subjects as per CBSE and other state boards.`,
            `CUET Readiness: Intensive coaching on domain-specific and general test topics to achieve top scores.`,
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
          subTitle: `Phase 1: Rapid Syllabus Coverage`,
          desc: [
            `Swift yet comprehensive coverage ofClass 12 board subjects andfoundational CUET topics.`,
            `Initial assessments to gauge studentstrengths and tailor the learningapproach accordingly.`,
          ],
        },
        {
          subTitle: `Phase 2: CUET-Specific Preparation`,
          desc: [
            `Focused coaching on CUET General Test, domain-specific subjects, and language proficiency.`,
            `Advanced problem-solving sessions and application-based learning techniques.`,
          ],
          subTitle2: `Phase 3: Rigorous Practice and Revision`,
          desc2: [
            `Full-length mock exams for CUET and boards to build exam temperament`,
            `Targeted revision strategies to enhance retention and performance`,
          ],
          img_url: Spark_12_Year,
        },
      ],

      bannerData: {
        title: `Scholarship Opportunity: SHINE Scholarship`,
        desc: `Students enrolling in Climb Plus can apply for the Excel Plus Scholarship, offering a 100% tuition fee waiver. This initiative ensures that talented and hardworking students receive the best possible preparation without financial constraints.`,
        link: `/cuet-scholarship/star-scholarship`,
        buttonText: `Learn More`,
      },

      enrollData: {
        title: `Who Should Enroll in CUET SHINE?`,
        list: [
          `Class 12 students aiming to balance CUET and board preparation effectively within a single year.`,
          `Learners seeking a focused and high-impact approach to mastering their academics.`,
          `Students motivated to excel in their final year and secure admission to top universities through CUET.`,
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
        desc: `Take the leap toward your dreams with Climb Plus. Enroll today and make the most of this one-year trans-formative program, backed by the SHINE Scholarship that offers a 100% tuition fee waiver to deserving students.`,
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

export default Shine;
