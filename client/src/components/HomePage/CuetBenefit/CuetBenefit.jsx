import React, { useEffect, useRef } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CuetBenefit.css";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CuetBenefit = () => {
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

  return (
    <div id="CuetBenefit">
      <h2 className="benefitHeading">
        How CuetPlus Can Benefit you for CUET Prep?
      </h2>
      <div className="benefitCard">
        {[
          {
            title: "Blended Learning Approach",
            description:
              "Our unique teaching methodology combines the best of traditional classroom learning with innovative digital techniques. By blending live sessions with interactive digital content and real-world applications, we ensure students gain both theoretical knowledge and practical skills, enhancing overall understanding and retention.",
          },
          {
            title: "Instant Doubt Resolution, Anytime",
            description:
              "Learning doesn’t stop after class hours, and neither does our support. With CUET Plus, students have access to real-time doubt resolution 24/7. Our dedicated academic support team ensures that no question goes unanswered, providing prompt solutions through chat, voice, or video calls.",
          },
          {
            title: "Tailored Study Material Aligned with Exam Trends",
            description:
              "Our meticulously curated study materials are not just comprehensive but also dynamically updated to reflect the latest exam patterns and trends. We deliver content that zeroes in on crucial topics, ensuring students spend their valuable study time on what matters most.",
          },
          {
            title: "Collaborative Learning Community",
            description:
              "At CUET Plus, we foster a vibrant community where students learn from one another. Our collaborative study sessions, group problem-solving activities, and student-led discussions create an atmosphere of shared learning that boosts confidence and fosters a deeper understanding of subjects.",
          },
        ].map((benefit, index) => (
          <div
            className="benefitCardContent"
            key={index}
            ref={(el) => (benefitCardsRef.current[index] = el)}
          >
            <div className="benefitIcon">
              <MdCheckCircleOutline />
            </div>
            <div className="benefitCardContentText">
              <span className="benefitCardContentHead">{benefit.title}</span>
              <p className="benefitCardContentPara">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuetBenefit;
