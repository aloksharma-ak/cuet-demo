import React from "react";
import wICStyles from "./WhatIsCuet.module.css";
import ncrStyles from "./CuetCoachingNCR.module.css";
import ccStyles from "./CoachingComparison.module.css";
import mtStyles from "./MaterialTable.module.css";
import ciStyles from "./CuetInstitutes.module.css";
import csStyles from "./CuetScholarship.module.css";
import studyStyles from "./StudySchedule.module.css";
import IntroductionLayout from "../../../Jharkhand/JharkhandComponent/IntroductionLayout";
import { PiArrowBendDownRightLight } from "react-icons/pi";
import ChoosingTheRightCoaching from "../../../Jharkhand/JharkhandComponent/ChoosingTheRightCoaching";
import CoachingInstitute from "../../../Jharkhand/JharkhandComponent/CoachingInstitute";
import FaqLayout from "../../../Jharkhand/JharkhandComponent/FaqLayout";
import CuetConclusion from "../../../Jharkhand/JharkhandComponent/CuetConclusion";

const introductionContent = {
  sections: [
    {
      title: "Educational History of Delhi",
      content: [
        "Delhi, the heart of India, has long been a beacon of education and knowledge. Its academic journey began in ancient times with madrasas under the Delhi Sultanate and Mughal Empire, blending religious teachings with arts and sciences. The colonial era introduced Western education, giving rise to iconic institutions like St. Stephen's College (1881) and Hindu College (1899).",
        "Post-independence, Delhi became the focal point of higher education in India, with the establishment of premier institutions like the University of Delhi, Jawaharlal Nehru University, and Jamia Millia Islamia. These universities, along with numerous colleges and research centers, attracted scholars from across the nation and beyond, reinforcing Delhi’s position as a global educational hub.",
        "Today, Delhi boasts a robust educational system with top-ranking schools, colleges, and universities offering diverse courses. Renowned for academic excellence, its institutions produce a skilled workforce that drives various sectors. Additionally, Delhi’s vibrant coaching industry attracts students nationwide, preparing them for competitive exams like CUET, JEE, NEET, and UPSC.",
      ],
    },
    {
      title: "The Role of the National Testing Agency (NTA)",
      content: [
        "The National Testing Agency (NTA), established in 2017, has transformed India’s examination process by ensuring transparency and efficiency in national-level tests like JEE (for engineering), NEET (for medical), and UGC-NET (for academia). Its Common University Entrance Test (CUET) is a landmark initiative, provides fair access to higher education across the country.",
      ],
    },
  ],
};

const whatIsCuet = {
  sections: [
    {
      title: "What is CUET, and Why is It Important?",
      content: [
        "The Common University Entrance Test (CUET) has revolutionized the way admissions are conducted in India. It serves as a unified platform for students aspiring to join prestigious universities like Delhi University, Jawaharlal Nehru University, and Banaras Hindu University. CUET eliminates the inconsistencies of board exam results and focuses solely on aptitude and subject knowledge.",
        "CUET is highly competitive, with lakhs of students vying for limited seats each year. The test demands a strategic approach, covering areas like general aptitude, domain-specific subjects, and language proficiency. Success in CUET opens doors to renowned central universities and specialized courses, making it a pivotal milestone for many students.",
        "Fun Fact: The number of CUET applicants has consistently grown, with over 14 lakh students registering in the latest cycle, a clear indicator of its rising importance.",
      ],
    },
  ],
};

const whyDelhiHub = {
  sections: [
    {
      title: "Why Delhi is a Hub for CUET Coaching",
      content: [
        "Delhi has long been regarded as the educational capital of India, attracting students from all corners of the country. The city is a melting pot of knowledge, offering a robust ecosystem for competitive exam preparation. Here’s why Delhi is considered the ideal destination for CUET coaching:",
      ],
      points: [
        {
          title: "Experienced Faculty",
          description:
            "The city boasts highly qualified and experienced educators who specialize in preparing students for competitive exams.",
        },
        {
          title: "Diverse Student Community",
          description:
            "Studying in Delhi means being surrounded by peers from different backgrounds, fostering a competitive and motivational environment.",
        },
        {
          title: "Abundant Resources",
          description:
            "From libraries to mock test centers and specialized coaching institutes, Delhi offers everything a student needs for focused preparation.",
        },
        {
          title: "Access to Top Institutes",
          description:
            "Some of the best coaching centers in India, including CUETPlus, are located here, providing students with cutting-edge methodologies and tools.",
        },
      ],
      quote: {
        title: "Quote from a Former Student",
        desc: `“Moving to Delhi for CUET preparation was the best decision I made. The guidance, resources, and competitive atmosphere helped me secure admission to my dream university.”`,
      },
    },
  ],
};

const cuetCoachingInfo = {
  understandingCUET: {
    id: "understanding-cuet",
    title: "Understanding CUET Coaching",
    sections: [
      {
        id: "section-2-subsection-21",
        title: "What is CUET Coaching?",
        content: [
          "CUET coaching is a structured program designed to help students prepare for the Common University Entrance Test (CUET). It goes beyond regular school curriculums, focusing on specific skills and knowledge areas required to ace the exam. Coaching institutes provide:",
        ],
        points: [
          {
            title: "Subject-Specific Expertise",
            description:
              "Training for domain-specific subjects such as Mathematics, History, or Biology.",
          },
          {
            title: "Aptitude Development",
            description:
              "Specialized guidance for sections like General Knowledge, Logical Reasoning, and Quantitative Aptitude",
          },
          {
            title: "Exam Strategy",
            description:
              "Mock tests, time management techniques, and test-taking strategies tailored to CUET's unique format",
          },
        ],
      },
      {
        id: "key-features-cuet-coaching",
        title: "Key Features of CUET Coaching",
        features: [
          {
            feature: "Customized Study Plans",
            description:
              "Tailored study schedules based on the student's strengths and weaknesses.",
          },
          {
            feature: "Regular Mock Tests",
            description:
              "Simulations of real CUET exams to build confidence and familiarity.",
          },
          {
            feature: "Doubt-Solving Sessions",
            description:
              "One-on-one interaction with experts to clarify doubts in complex topics.",
          },
          {
            feature: "Study Materials",
            description:
              "Comprehensive notes, reference books, and online resources.",
          },
        ],
      },
    ],
  },
  delhiCoaching: {
    id: "delhi-coaching",
    title: "",
    sections: [
      {
        id: "section-2-subsection-22",
        title: "How CUET Coaching in Delhi Stands Out?",
        content: [
          "Delhi's CUET coaching centers distinguish themselves with their innovative teaching methodologies and extensive resources. Here's what makes them unique:",
        ],
        points: [
          {
            title: "State-of-the-Art Facilities",
            description:
              "Many institutes in Delhi are equipped with advanced classrooms, digital learning tools, and mock test labs.",
          },
          {
            title: "Expert Faculty",
            description:
              "Delhi coaching centers attract educators with years of experience in preparing students for national-level exams.",
          },
          {
            title: "Focus on Results",
            description:
              "High success rates and the ability to adapt to changing CUET patterns make Delhi’s coaching institutes a preferred choice.",
          },
          {
            title: "Interactive Learning",
            description:
              "From group discussions to real-time feedback, the teaching process in Delhi fosters an engaging and collaborative environment.",
          },
        ],
        caseStudy: {
          id: "case-study-delhi",
          title: "Case Study",
          description:
            "A student from Bihar, struggling with the aptitude section, enrolled in a Delhi coaching institute. With personalized guidance and targeted mock tests, they improved their score by 40% and secured admission to Delhi University.",
        },
      },
    ],
  },
  needForCoaching: {
    id: "need-for-coaching",
    title: "",
    sections: [
      {
        id: "section-2-subsection-23",
        title: "Do You Really Need Coaching for CUET?",
        content: [
          "While self-study is an option, enrolling in a CUET coaching program can provide a significant edge. Here’s why:",
        ],
        points: [
          {
            title: "Structured Approach",
            description:
              "Coaching offers a clear roadmap, saving time and ensuring all topics are thoroughly covered.",
          },
          {
            title: "Competitive Edge",
            description:
              "Studying alongside peers creates a motivating environment and healthy competition.",
          },
          {
            title: "Expert Insights",
            description:
              "Professional coaches can highlight common mistakes and effective strategies.",
          },
        ],
        conclusion: [
          "However, the decision to join coaching depends on individual preferences. Students confident in their self-study abilities and equipped with reliable resources may not require coaching. For others, especially those targeting top universities, professional guidance can be invaluable.",
        ],
      },
    ],
  },
};

const cuetCoachingNCR = {
  title: "CUET Coaching in NCR Cities",
  introduction:
    "The National Capital Region (NCR) surrounding Delhi offers a wealth of opportunities for students looking for CUET coaching. Neighboring cities like Gurgaon, Noida, Faridabad, and Ghaziabad have emerged as viable alternatives, providing excellent coaching options while maintaining proximity to Delhi.",
  cities: [
    {
      name: "Gurgaon",
      details: [
        {
          heading: "1. Why Choose Gurgaon for CUET Coaching?",
          points: [
            "Home to several premium coaching institutes with state-of-the-art facilities.",
            "Offers a quieter, less crowded environment compared to Delhi.",
            "Accessible from South Delhi and other NCR areas via efficient metro and road connectivity.",
          ],
        },
        {
          heading: "2. Top Institutes in Gurgaon",
          points: [
            "Examples of reputed centers with course details and fee structures.",
          ],
        },
        {
          heading: "3. Case Study",
          points: [
            "A successful student’s story from Gurgaon highlights the quality of local coaching.",
          ],
        },
      ],
    },
    {
      name: "Noida",
      details: [
        {
          heading: "1. Special Features of Noida Coaching Centers",
          points: [
            "Affordable coaching options without compromising on quality.",
            "Increasing focus on hybrid models, combining offline and online classes.",
          ],
        },
        {
          heading: "2. Institutes to Consider",
          points: [
            "Notable names in the area, their specialties, and student feedback.",
          ],
        },
      ],
    },
    {
      name: "Faridabad",
      details: [
        {
          heading: "1. What Makes Faridabad an Emerging Hub for CUET Coaching?",
          points: [
            "Smaller class sizes ensure more personalized attention.",
            "Competitive fee structures compared to Delhi-based coaching.",
          ],
        },
        {
          heading: "2. Prominent Institutes",
          points: ["A list of the best-rated centers in Faridabad."],
        },
      ],
    },
    {
      name: "Ghaziabad",
      details: [
        {
          heading: "1. Advantages of Ghaziabad for CUET Aspirants",
          points: [
            "Proximity to East Delhi for students commuting daily.",
            "Availability of experienced faculty in well-established institutes.",
          ],
        },
        {
          heading: "2. Leading Coaching Options",
          points: ["A brief overview of recommended coaching centers."],
        },
      ],
    },
  ],
};

const chooseRightCoaching = {
  title: "Choosing the Right CUET Coaching in Delhi",
  introduction:
    "Selecting the right coaching institute for CUET preparation can be a daunting task, especially with the plethora of options available in Delhi. Here’s a step-by-step guide to help students and parents make an informed decision.",
  cities: [
    {
      name: "Factors to Consider When Selecting a Coaching Institute",
      details: [
        {
          heading: "1. Reputation and Results",
          points: [
            "Look for institutes with a proven track record of successful CUET results.",
            "Check student testimonials, reviews, and rankings.",
            "Ask about the number of students placed in top universities.",
          ],
        },
        {
          heading: "2.	Qualified Faculty",
          points: [
            "Ensure the coaching center has experienced and knowledgeable educators.",
            "Faculty members should be specialists in their respective subjects and familiar with CUET patterns.",
          ],
        },
        {
          heading: "3.	Batch Size and Personalized Attention",
          points: [
            "Smaller batch sizes allow for more personalized attention.",
            "Inquire if the institute offers one-on-one doubt-clearing sessions.",
          ],
        },
        {
          heading: "4.	Study Materials and Mock Tests",
          points: [
            "High-quality study materials are essential for effective preparation.",
            "Ensure the institute conducts regular mock tests with detailed performance analysis.",
          ],
        },
        {
          heading: "5.	Location and Accessibility",
          points: [
            "Choose a center that is conveniently located or offers online options for flexibility.",
            "Consider travel time to ensure maximum focus on preparation.",
          ],
        },
        {
          heading: "6.	Cost and Value for Money",
          points: [
            "Compare the fee structures of various institutes.",
            "Look for scholarships or financial aid programs to reduce costs.",
          ],
        },
      ],
    },
    {
      name: "",
      details: [
        {
          heading: "Top Questions to Ask Before Enrolling",
          points: [
            "What is the institute’s success rate in CUET preparation?",
            "How does the institute update its curriculum to align with changing CUET patterns?",
            "Are demo classes or trial sessions offered?",
            "What additional support is available for weak students?",
          ],
        },
      ],
    },
  ],
};

const coachingComparison = {
  title: "Online vs Offline CUET Coaching in Delhi",
  aspects: [
    {
      aspect: "Flexibility",
      online: "Learn from anywhere at your convenience.",
      offline: "Fixed schedules and mandatory attendance.",
    },
    {
      aspect: "Resources",
      online: "Digital resources, recorded sessions.",
      offline: "Physical classroom interaction.",
    },
    {
      aspect: "Interaction",
      online: "Limited peer interaction.",
      offline: "Collaborative and motivating environment.",
    },
    {
      aspect: "Cost",
      online: "Generally more affordable.",
      offline: "Often higher due to infrastructure costs.",
    },
  ],
  conclusion:
    "While online coaching offers flexibility, offline coaching provides a structured and interactive environment. Many institutes in Delhi, like CUETPlus, now offer hybrid models that combine the best of both formats.",
  proTip:
    "Always attend a demo class or consult existing students to understand the teaching style and overall experience of the institute.",
};

const materialData = [
  {
    materialType: "Printed Notes",
    description: "Simplified concepts and key formulas for easy revision.",
  },
  {
    materialType: "Practice Papers",
    description: "Sets of CUET mock tests for self-assessment.",
  },
  {
    materialType: "Online Modules",
    description: "Interactive videos, quizzes, and doubt-solving sessions.",
  },
];

const MaterialTable = ({ data }) => {
  return (
    <div className={mtStyles.tableContainer}>
      <table className={mtStyles.materialTable}>
        <thead>
          <tr>
            <th>Material Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((material, index) => (
            <tr key={index}>
              <td>{material.materialType}</td>
              <td>{material.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const benefitsOfCuetCoaching = {
  title: "Benefits of Joining CUET Coaching in Delhi",
  introduction:
    "Delhi’s CUET coaching centers are renowned for their holistic approach to preparing students for one of the most competitive entrance exams in India. From academic support to personal development, these institutes provide numerous benefits that go beyond standard preparation.",
  sections: [
    {
      heading: "1. Expert Faculty Guidance",

      points: [
        {
          title: "Access to Experienced Educators",
          description:
            "Coaching centers in Delhi employ highly qualified faculty with years of experience in CUET preparation. These experts are well-versed in the exam pattern, marking scheme, and common pitfalls.",
        },
        {
          title: "Subject-Specific Insights",
          description:
            "Specialized teachers ensure in-depth understanding of domain subjects, languages, and general aptitude.",
        },
        {
          title: "Student Experience:",
          description: `"My mentor’s tips on handling tricky logical reasoning questions helped me save time and boost my accuracy during the CUET exam." – Rohan, DU Aspirant.`,
        },
      ],
    },
    {
      heading: "2. Comprehensive Study Material",

      points: [
        {
          title: "Curated Notes and Guides",
          description:
            "Institutes provide detailed study materials that simplify complex topics and offer concise explanations for quick revision.",
        },
        {
          title: "Curated Notes and Guides",
          description:
            "Regular practice with CUET-aligned question banks prepares students for real exam scenarios.",
        },
        {
          title: "Digital Resources",
          description:
            "Many coaching centers now offer app-based learning, e-books, and recorded video lectures.",
        },
      ],
      component: <MaterialTable data={materialData} />,
    },
    {
      heading: "3. Motivational and Competitive Environment",
      content:
        "Studying alongside ambitious peers in a city like Delhi fosters a healthy competitive spirit.",
      points: [
        {
          title: "Group Discussions",
          description:
            "Interactive sessions encourage idea-sharing and clarity on complex topics.",
        },
        {
          title: "Peer Learning",
          description:
            "Students often learn new approaches to solving problems from their classmates.",
        },
        {
          title: "Quote from a Former Student",
          description: `"The competitive atmosphere in my coaching class pushed me to study harder and smarter." – Priya, CUET Topper.`,
        },
      ],
    },
    {
      heading: "4. Personalized Attention and Mentorship",

      points: [
        {
          title: "One-on-One Sessions",
          description:
            "Many institutes offer individual mentorship to track progress and address specific challenges.",
        },
        {
          title: "Customized Plans",
          description:
            "Study schedules and strategies are tailored to suit each student’s strengths and weaknesses.",
        },
        {
          title: "Mental Support",
          description:
            "Regular motivational sessions help students cope with exam stress and maintain focus.",
        },
      ],
    },
    {
      heading: "5. Time Management Skills",
      content:
        "Coaching programs emphasize time efficiency, a crucial factor in CUET preparation:",
      points: [
        {
          title: "Timed Mock Tests",
          description:
            "Help students practice managing the time constraints of the exam",
        },
        {
          title: "Prioritization Techniques",
          description:
            "Guidance on focusing on high-scoring sections during the test",
        },
      ],
    },
    {
      heading: "6. Balancing Board Exams and CUET Preparation",
      content:
        "One unique aspect of Delhi’s coaching institutes is their ability to help students balance board exams and CUET preparation seamlessly.",
      points: [
        {
          title: "Integrated Study Plans",
          description:
            "Classes are scheduled to align with school timings and cover board and CUET syllabi concurrently.",
        },
        {
          title: "Extra Support for Boards",
          description:
            "Many institutes include dedicated sessions to strengthen board exam performance.",
        },
      ],
    },
  ],
};

const institutesData = [
  {
    name: "CUETPlus",
    overview:
      "CUETPlus is one of the fastest-growing coaching institutes in Delhi, offering comprehensive programs tailored for CUET aspirants.",
    keyFeatures: [
      "Expert faculty with years of experience in CUET coaching.",
      "Advanced learning management systems (LMS) with digital resources.",
      "24/7 doubt-solving sessions via live chats and AI tools.",
    ],
    specialPrograms: [
      "ScholarPlus: Scholarships like Spark, Shine, and Star to support meritorious students.",
      "Integrated Programs: CUET Spark (2 years), CUET Shine (1 year), and CUET Star for board and CUET preparation simultaneously.",
    ],
    successStories:
      "Hundreds of students securing seats at Delhi University, JNU, and other top institutions.",
  },
  {
    name: "Delhi Academy of CUET Studies (DACS)",
    overview: "Known for its personalized teaching and small batch sizes.",
    keyFeatures: [
      "Offers a variety of mock test series and domain-specific study materials.",
    ],
  },
  {
    name: "Excel Edge Institute",
    overview:
      "Popular for its interactive teaching methods and competitive test series.",
    keyFeatures: [
      "Focuses on aptitude and reasoning skills required for CUET.",
    ],
  },
  {
    name: "Pathfinder Coaching",
    overview: "Provides extensive classroom training with hybrid options.",
    keyFeatures: [
      "Offers one-on-one mentoring and counseling sessions for holistic development.",
    ],
  },
];

const cuetPlusCoachingInstitute = {
  title: "Why CUETPlus is the Best Choice for CUET Coaching in Delhi",
  introduction:
    "CUETPlus has emerged as the leading institute for CUET preparation in Delhi, and for good reasons. Here’s why it stands out:",
  sections: [
    {
      heading: "1. Holistic Curriculum",
      content: [
        "Covers all sections of CUET, including General Aptitude, Domain Subjects, and Language Proficiency.",
        "Incorporates the latest CUET patterns to ensure up-to-date preparation.",
      ],
    },
    {
      heading: "2. Flexible Learning Modes",
      content: [
        "Classroom, online, and hybrid options to cater to diverse needs.",
        "Crash courses for last-minute preparation.",
      ],
    },
    {
      heading: "3. Comprehensive Support",
      content: [
        "AI-powered doubt-solving and access to recorded lectures.",
        "One-on-one mentorship to track individual progress.",
      ],
    },
    {
      heading: "4. Affordable Coaching with Scholarships",
      content: [
        "Scholarships under ScholarPlus, providing fee waivers of up to 100%.",
        "Simplified application process based on merit and financial need.",
      ],
    },
    {
      heading: "5. Modern Facilities and Resources",
      content: [
        "Interactive labs and workshops for experiential learning.",
        "Mock tests with in-depth analysis to identify strengths and weaknesses.",
      ],
      caseStudy:
        "A student who joined CUETPlus on a 100% scholarship under the CUET Star program achieved an All India Rank of 12 in CUET 2023. Personalized attention and mock tests were pivotal to their success.",
    },
  ],
};

const scholarshipData = [
  {
    program: "CUET Spark",
    scholarshipName: "Scholar Spark",
    eligibility: "Class 11 students with high merit.",
    feeWaiver: "Up to 75%",
  },
  {
    program: "CUET Shine",
    scholarshipName: "Scholar Shine",
    eligibility: "Class 12 students excelling in boards or mock tests.",
    feeWaiver: "Up to 90%",
  },
  {
    program: "CUET Star",
    scholarshipName: "Scholar Star",
    eligibility: "Exceptional academic performers.",
    feeWaiver: "100%",
  },
];

const studySchedule = [
  {
    day: "Monday",
    activity: "Study Domain Subject (e.g., Physics)",
    time: "3 hours",
  },
  { day: "Tuesday", activity: "General Aptitude Practice", time: "2 hours" },
  {
    day: "Wednesday",
    activity: "Language Proficiency (Reading & Grammar)",
    time: "2 hours",
  },
  { day: "Thursday", activity: "Mock Test and Analysis", time: "3 hours" },
  {
    day: "Friday",
    activity: "Revise Topics Covered During the Week",
    time: "2 hours",
  },
];

const StudySchedule = ({ data }) => {
  return (
    <div className={studyStyles.container}>
      <h1 className={studyStyles.title}>Sample Study Schedule</h1>
      <table className={studyStyles.table}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Activity</th>
            <th>Time Allocated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.activity}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tipsData = {
  title: "Tips for Maximizing CUET Preparation",
  introduction:
    "Preparing for the CUET requires a combination of effective strategies, consistent effort, and smart resource utilization. These tips will help students make the most of their preparation journey, ensuring they are well-equipped to tackle the exam.",
  sections: [
    {
      heading: "1. Create a Study Plan",

      points: [
        {
          title: "Divide and Conquer",
          description:
            "Allocate specific days to cover different sections, such as General Aptitude, Domain Subjects, and Language Proficiency.",
        },
        {
          title: "Set Milestones",
          description:
            "Break down your syllabus into manageable parts and set weekly goals to track progress.",
        },
        {
          title: "Balance Boards and CUET",
          description: `For Class 12 students, integrate board exam topics into the CUET schedule to save time.`,
        },
      ],
      component: <StudySchedule data={studySchedule} />,
    },
    {
      heading: "2. Focus on Weak Areas",
      content:
        "Identifying and improving weak areas is key to boosting overall performance.",
      points: [
        {
          title: "•	Regular Assessments",
          description:
            "Take mock tests to identify subjects or sections that need extra attention.",
        },
        {
          title: "•	Targeted Practice",
          description:
            "Spend additional time solving problems in areas where you score lower.",
        },
        {
          title: "Digital Resources",
          description:
            "Many coaching centers now offer app-based learning, e-books, and recorded video lectures.",
        },
      ],
      proTip:
        "Use performance trackers provided by institutes like CUETPlus to monitor improvement.",
    },
    {
      heading: "3. Practice with Mock Tests",
      content:
        "Mock tests simulate the actual exam environment and are indispensable for preparation.",
      points: [
        {
          title: "Time Management",
          description:
            "Mock tests help you practice pacing yourself during the exam.",
        },
        {
          title: "Familiarity with Exam Format",
          description:
            "Repeated testing reduces anxiety and boosts confidence.",
        },
        {
          title: "Performance Analysis",
          description: `Review your answers to understand mistakes and avoid them in the future.`,
        },
      ],
      fact: "Students who took at least 10 full-length mock tests before CUET saw a 30% improvement in their final scores.",
    },
    {
      heading: "4. Use Quality Study Resources",
      content:
        "The right materials make preparation efficient and comprehensive.",
      points: [
        {
          title: "Recommended Books:",
          description:
            "For Aptitude: *Quantitative Aptitude* by R.S. Aggarwal, for Domain Subjects: NCERT textbooks (Class 11 and 12), and for English Proficiency: *Word Power Made Easy* by Norman Lewis.",
        },
        {
          title: "Digital Resources",
          description:
            "Many institutes, including CUETPlus, provide online study portals with curated content.",
        },
      ],
    },
    {
      heading: "5. Manage Time Effectively",
      content:
        "Efficient time management can make a significant difference during the exam and preparation stages.",
      points: [
        {
          title: "Pomodoro Technique",
          description:
            "Study in focused 25-minute intervals, followed by 5-minute breaks.",
        },
        {
          title: "Prioritize High-Scoring Sections",
          description:
            "Focus more on sections where you can quickly score high marks.",
        },
      ],
    },
    {
      heading: "6. Stay Consistent and Motivated",
      content:
        "Maintaining consistency is more important than sporadic bursts of study.",
      points: [
        {
          title: "Set Daily Goals",
          description: "Achieving small targets keeps you motivated.",
        },
        {
          title: "Celebrate Milestones",
          description:
            "Reward yourself after completing major topics or achieving a good mock test score.",
        },
        {
          title: "Inspirational Quote",
          description:
            '"Success is the sum of small efforts, repeated day in and day out." – Robert Collier',
        },
      ],
    },
    {
      heading: "7. Take Care of Your Health",
      content:
        "Good physical and mental health is essential for peak performance.",
      points: [
        {
          title: "Sleep Well",
          description: "Aim for 7-8 hours of sleep to keep your mind sharp.",
        },
        {
          title: "Eat Balanced Meals",
          description:
            "Include brain-boosting foods like nuts, fruits, and whole grains in your diet.",
        },
        {
          title: "Exercise Regularly",
          description: "Physical activity improves focus and reduces stress.",
        },
      ],
      conclusion:
        "By following these tips, students can significantly enhance their preparation for CUET and approach the exam with confidence.",
    },
  ],
};

const cuetFaqs = {
  title: "FAQs About CUET Coaching in Delhi",
  description:
    "Here are answers to some of the most common questions students and parents have about CUET coaching in Delhi. These insights will help you make informed decisions about your preparation journey.",
  faqs: [
    {
      question: "How much does CUET coaching cost in Delhi?",
      answer:
        "The cost of CUET coaching in Delhi varies depending on the institute, program, and duration.",
      details: [
        "Foundation Programs (2 years): ₹1,00,000 to ₹1,50,000.",
        "1-Year Intensive Programs: ₹50,000 to ₹90,000.",
        "Crash Courses (3-6 months): ₹20,000 to ₹40,000.",
      ],
      conclusion:
        "Institutes like CUETPlus offer scholarships under programs like ScholarPlus, reducing costs significantly for deserving students.",
    },
    {
      question: "What is the ideal time to start CUET preparation?",
      answer: "The best time to start depends on your academic year:",
      details: [
        "Class 11 Students: Start early with a 2-year foundation program to prepare for both boards and CUET.",
        "Class 12 Students: Begin preparation in the first half of the academic year to ensure ample time for practice.",
        "Droppers: Enroll in an intensive or crash course tailored for repeat attempts.",
      ],
    },
    {
      question: "Which subjects are covered in CUET coaching?",
      answer:
        "CUET coaching covers a range of subjects, based on the chosen domain and exam requirements:",
      details: [
        "General Aptitude: Logical reasoning, quantitative aptitude, and general knowledge.",
        "Language Proficiency: English or other regional languages.",
        "Domain-Specific Subjects: Physics, Chemistry, Mathematics, Accountancy,  Economics, History, Political Science, etc.",
      ],
      conclusion:
        "Tip: Choose an institute like CUETPlus that offers customizable subject combinations to match your academic goals.",
    },
    {
      question: "Can I prepare for CUET without coaching?",
      answer:
        "Yes, it’s possible to prepare for CUET without coaching, but it requires discipline, the right resources, and consistent effort.",
      answer2: "Self-Study Essentials:",
      details: [
        "NCERT textbooks for domain subjects.",
        "Mock tests and previous year’s question papers.",
        "Online resources and video lectures.",
      ],
      conclusion:
        "However, coaching provides structured guidance, expert mentorship, and access to curated materials, which can significantly enhance your chances of success.",
    },
    {
      question: "How to balance school and CUET preparation?",
      answer:
        "Balancing school studies with CUET preparation is crucial, especially for Class 12 students.",
      answer2: "Tips to Manage Both:",
      details: [
        "Use an integrated study approach to cover overlapping topics for boards and CUET.",
        "Dedicate weekends and holidays to CUET-specific subjects.",
        "Prioritize time-sensitive board projects and assignments while maintaining regular CUET preparation.",
      ],
      conclusion:
        "Institutes like CUETPlus offer flexible schedules and combined board + CUET preparation programs to simplify this process.",
    },
    {
      question: "What are the benefits of joining CUET coaching in Delhi?",
      answer: "Joining a reputed coaching center in Delhi provides:",
      details: [
        "Access to experienced faculty and mentors.",
        "Regular mock tests and performance analysis.",
        "A competitive and motivating learning environment.",
        "Comprehensive resources tailored to CUET’s pattern.",
      ],
    },
    {
      question: "Do Delhi coaching centers offer online CUET coaching?",
      answer:
        "Yes, most coaching institutes in Delhi now offer online or hybrid coaching options. These include:",
      details: [
        "Live classes with recorded sessions for later reference.",
        "Digital study materials and interactive apps.",
        "Online mock tests with real-time performance tracking.",
      ],
      conclusion:
        "CUETPlus excels in offering hybrid programs, combining the best of both online and offline formats.",
    },
  ],
};

const cuetConclusion = {
  summary: {
    title: "Summary of Key Points",
    points: [
      "The Common University Entrance Test (CUET) has become a vital stepping stone for students aspiring to secure admission to India’s top universities. Preparing for CUET demands a blend of strategic study, comprehensive resources, and expert guidance. Delhi, as a hub of academic excellence, offers unparalleled coaching opportunities, making it a prime destination for CUET aspirants.",
    ],
    subPoints: [
      "The importance of CUET and why Delhi is the ideal place for coaching.",
      "How to choose the right coaching institute based on factors like reputation, faculty, and study materials.",
      "The benefits of CUET coaching in Delhi, from expert mentorship to competitive environments.",
      "Practical tips to maximize preparation, manage time effectively, and stay motivated.",
    ],
  },
  whyCUETPlus: {
    title: "Why CUETPlus is Your Best Bet for CUET Preparation",
    content:
      "Out of all the available options, CUETPlus stands out as the most comprehensive and student-focused coaching institute in Delhi. Key Highlights of CUETPlus:",
    description: [
      "•	Tailored Programs: Offers specialized courses like CUET Spark, CUET Shine, and CUET Star to suit students’ needs.",
      "•	Scholarship Opportunities: Through the ScholarPlus program, CUETPlus makes quality coaching accessible to all students.",
      "•	Proven Success Rate: With a history of top-performing students, CUETPlus has cemented its position as a leader in CUET preparation.",
    ],
  },
  callToAction: {
    title: "Take the first step towards your academic success with CUETPlus!",
    actions: [
      "If you’re looking to ace the CUET and secure admission to your dream university, CUETPlus is the right choice. Its blend of expert mentorship, state-of-the-art facilities, and flexible learning options ensures that every student is equipped for success.",
    ],
    contact:
      "Ready to start your CUET journey? Contact CUETPlus today to learn more about their programs, attend a free demo class, or apply for a scholarship. Don’t wait—your future begins now!",
  },
};

// Components
const CuetContainer = ({ data }) => {
  return (
    <div className={wICStyles.container}>
      {data.title && <h2 className={wICStyles.title}>{data.title}</h2>}
      {data.sections.map((section, index) => (
        <div key={index} className={wICStyles.section} id={section.id}>
          <h2 className={wICStyles.sectionTitle}>{section.title}</h2>
          {section.content?.map((desc, i) => (
            <div key={i} className={wICStyles.sectionContent}>
              <div className={wICStyles.icon}>
                <PiArrowBendDownRightLight />
              </div>
              <p>{desc}</p>
            </div>
          ))}
          {section.points && (
            <ul className={wICStyles.pointsList}>
              {section.points.map((point, idx) => (
                <li key={idx} className={wICStyles.pointItem}>
                  {point.title && <strong>{point.title}:</strong>}{" "}
                  {point.description}
                </li>
              ))}
            </ul>
          )}
          {section.features && (
            <table className={wICStyles.featuresTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {section.features.map((feature, idx) => (
                  <tr key={idx}>
                    <td>{feature.feature}</td>
                    <td>{feature.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {section.caseStudy && (
            <div className={wICStyles.caseStudy}>
              <strong>{section.caseStudy.title}:</strong>{" "}
              {section.caseStudy.description}
            </div>
          )}
          {section.conclusion && (
            <div className={wICStyles.conclusion}>
              {section.conclusion.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CuetCoachingNCR = ({ data }) => {
  return (
    <div className={ncrStyles.container}>
      {/* Title Section */}
      <h2 className={ncrStyles.title}>{data.title}</h2>
      <p className={ncrStyles.introduction}>{data.introduction}</p>

      {/* Cities Section */}
      {data.cities.map((city, cityIndex) => (
        <div key={cityIndex} className={ncrStyles.citySection}>
          {city.name && <h3 className={ncrStyles.cityName}>{city.name}</h3>}

          {city.details.map((detail, detailIndex) => (
            <div key={detailIndex} className={ncrStyles.detailSection}>
              <h4 className={ncrStyles.detailHeading}>{detail.heading}</h4>
              {/* Render Points if Available */}
              {detail.points && (
                <ul className={ncrStyles.pointsList}>
                  {detail.points.map((point, pointIndex) => (
                    <li key={pointIndex} className={ncrStyles.pointItem}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const CoachingComparison = ({ data }) => {
  return (
    <div className={ccStyles.container}>
      <h2 className={ccStyles.title}>{data.title}</h2>

      <table className={ccStyles.comparisonTable}>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Online Coaching</th>
            <th>Offline Coaching</th>
          </tr>
        </thead>
        <tbody>
          {data.aspects.map((item, index) => (
            <tr key={index}>
              <td>{item.aspect}</td>
              <td>{item.online}</td>
              <td>{item.offline}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={ccStyles.conclusion}>
        <p>{data.conclusion}</p>
      </div>

      <div className={ccStyles.proTip}>
        <strong>Pro Tip:</strong> {data.proTip}
      </div>
    </div>
  );
};

const CuetInstitutes = ({ data }) => {
  return (
    <div className={ciStyles.container}>
      <h1 className={ciStyles.title}>Best CUET Coaching Institutes in Delhi</h1>
      <p className={ciStyles.description}>
        Delhi is home to some of the most reputed CUET coaching institutes in
        India. These centers combine expert guidance, state-of-the-art
        facilities, and a proven track record to help students achieve their
        academic dreams.
      </p>
      <div className={ciStyles.institutesList}>
        {data.map((institute, index) => (
          <div key={index} className={ciStyles.instituteCard}>
            <h2 className={ciStyles.instituteName}>
              {index + 1}
              {". "}
              {institute.name}
            </h2>
            <p className={ciStyles.instituteOverview}>{institute.overview}</p>
            {institute.keyFeatures && (
              <div className={ciStyles.features}>
                <h3>Key Features:</h3>
                <ul>
                  {institute.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {institute.specialPrograms && (
              <div className={ciStyles.programs}>
                <h3>Special Programs:</h3>
                <ul>
                  {institute.specialPrograms.map((program, i) => (
                    <li key={i}>{program}</li>
                  ))}
                </ul>
              </div>
            )}
            {institute.successStories && (
              <p className={ciStyles.successStories}>
                <strong>Success Stories:</strong> {institute.successStories}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CuetScholarship = ({ data }) => {
  return (
    <div className={csStyles.container}>
      <h2 className={csStyles.title}>
        Scholarship and Fee Structures at CUETPlus
      </h2>
      <table className={csStyles.table}>
        <thead>
          <tr>
            <th>Program</th>
            <th>Scholarship Name</th>
            <th>Eligibility</th>
            <th>Fee Waiver</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.program}</td>
              <td>{item.scholarshipName}</td>
              <td>{item.eligibility}</td>
              <td>{item.feeWaiver}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={csStyles.footer}>
        CUETPlus combines affordability, expertise, and results, making it the
        best choice for CUET coaching in Delhi.
      </p>
    </div>
  );
};

const IntroDelhi = () => {
  return (
    <div>
      <IntroductionLayout introductionContent={introductionContent} />
      <div id="section-1-subsection-11">
        <CuetContainer data={whatIsCuet} />
      </div>
      <div id="section-1-subsection-12">
        <CuetContainer data={whyDelhiHub} />
      </div>
      <CuetContainer data={cuetCoachingInfo.understandingCUET} />
      <CuetContainer data={cuetCoachingInfo.delhiCoaching} />
      <CuetContainer data={cuetCoachingInfo.needForCoaching} />
      <div id="section-3">
        <CuetCoachingNCR data={cuetCoachingNCR} />
      </div>
      <div id="section-4">
        <CuetCoachingNCR data={chooseRightCoaching} />
        <CoachingComparison data={coachingComparison} />
      </div>
      <div id="section-5">
        <ChoosingTheRightCoaching
          choosingTheRightCoachingInstitute={benefitsOfCuetCoaching}
        />
      </div>
      <div id="section-6">
        <CuetInstitutes data={institutesData} />
        <CoachingInstitute
          cuetPlusCoachingInstitute={cuetPlusCoachingInstitute}
        />
        <CuetScholarship data={scholarshipData} />
      </div>
      <div id="section-7">
        <ChoosingTheRightCoaching
          choosingTheRightCoachingInstitute={tipsData}
        />
      </div>
      <div id="section-8">
        <FaqLayout faqs={cuetFaqs} />
      </div>
      <div id="section-9">
        <CuetConclusion data={cuetConclusion} />
      </div>
    </div>
  );
};

export default IntroDelhi;
