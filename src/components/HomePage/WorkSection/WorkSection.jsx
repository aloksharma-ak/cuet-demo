import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WorkSection.css";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function WorkSection() {
  const workLeftData = [
    {
      title: "Book a Free Initial Consultation",
      description:
        "Start with a no-obligation consultation to discuss your needs and goals.",
    },
    {
      title: "One-on-One Counseling Sessions",
      description:
        "Receive tailored guidance in private sessions with our experienced counselors.",
    },
  ];

  const workRightData = [
    {
      title: "Personalized Assessment",
      description:
        "Our counselors will conduct aptitude and personality assessments to understand your unique strengths.",
    },
    {
      title: "Ongoing Support",
      description:
        "We provide continuous support and regular follow-ups to help you stay on track.",
    },
  ];

  // Using useGSAP to define the animations triggered on scroll
  useGSAP(() => {
    // Animate the left boxes sliding in from the left
    gsap.from(".work-left .work-box", {
      scrollTrigger: {
        trigger: ".work-left",
        start: "top 80%", // Start animation when .work-left hits 80% from the top
        end: "bottom 20%",
        scrub: 1,
      },
      x: -200, // Move from the left
      opacity: 0,
      duration: 1,
      stagger: 0.2, // Stagger the animations
      ease: "power2.out",
    });

    // Animate the right boxes sliding in from the right
    gsap.from(".work-right .work-box", {
      scrollTrigger: {
        trigger: ".work-right",
        start: "top 80%", // Start animation when .work-right hits 80% from the top
        end: "bottom 20%",
        scrub: 1,
      },
      x: 200, // Move from the right
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Animate the horizontal line growing with scroll
    gsap.fromTo(
      ".horizontal-line",
      { height: "0vh" }, // Initial height
      {
        scrollTrigger: {
          trigger: ".horizontal-line",
          start: "top 70%",
          end: "bottom 20%", // Keep increasing the line height until the end
          scrub: true,
        },
        height: "70vw", // Final height
        duration: 10,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="work-container">
      <h2 className="work-heading">How Our Counseling Process Works?</h2>
      <div className="work-content">
        <div className="work-left">
          {workLeftData.map((item, index) => (
            <div key={index} className="work-box">
              <h3 className="work-title">{item.title}</h3>
              <p className="work-description">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="horizontal-line"></div>
        <div className="work-right">
          {workRightData.map((item, index) => (
            <div key={index} className="work-box">
              <h2 className="work-title">{item.title}</h2>
              <p className="work-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
