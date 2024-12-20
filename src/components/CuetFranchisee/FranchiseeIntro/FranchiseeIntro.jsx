import React, { useState } from "react";
import b1 from "../../../assets/b1.png";
import b2 from "../../../assets/b2.png";
import b3 from "../../../assets/b3.png";
import b4 from "../../../assets/b4.png";
import FAQ from "../../HomePage/Communities/FAQ/FAQ";
import FranchiseeProcess from "../FranchiseeProcess/FranchiseeProcess";
import SupportGuidance from "../SupportGuidance/SupportGuidance";
import styles from "./FranchiseeIntro.module.css";

function FranchiseeIntro() {
  const [formClick, setFormClick] = useState(false);

  const handleClick = () => {
    setFormClick(true);
  };

  const handleOverlayClick = () => {
    console.log("Contact form clicked!");
    setFormClick(false);
  };

  const faqs = [
    {
      question: "Is the education franchise business financially challenging?",
      answer:
        "Financial challenges of an education franchise are generally exaggerated. In fact, financially, it is probably the easiest business to run and break even. However, it is indeed a demanding business in terms of the constant efforts required to be put in for business development.",
    },
    {
      question: "Who can be a CUET+ PLUS franchisee?",
      answer:
        "Anyone who has a passion for education. An ideal franchisee would have an appropriate academic qualification, desire to be a successful entrepreneur, commitment & respect towards ethics and values, and a keen interest in interacting with students.",
    },
    {
      question: "Who approves a partnership? How long is the process?",
      answer:
        "Our approval process is thorough; and hinges on your commitment and ability to finance a center for at least the first year. The process typically takes a few weeks from start to finish. You can read about the partner selection and on boarding process here.",
    },
    {
      question:
        "Does CUET+ PLUS charge for a franchise? If yes, what is the fee?",
      answer:
        "We charge a Licensing Fee from our business partners. However, our business agreement is based on specific commercials, mostly for the use of academic tools and marketing support.",
    },
    {
      question: "Will CUET+ PLUS invest in my city?",
      answer:
        "If your business plan is sound; and your location suitable for a CUET+ PLUS center, then, yes, we will invest in your city. Geographical location is a criterion for selecting business partners, but it is judged in combination with other indicators, such as your background and competition in the region.",
    },
    {
      question: "I want to offer only one program, can I?",
      answer:
        "Yes, you can. Currently, we offer six program buckets. To start off, you can choose any one; and get on board. However, the infrastructure and manpower requirements of each are different; and if you plan to expand in the near future, we advise you to choose your location wisely.",
    },
    {
      question:
        "Does CUET+ PLUS offer financial assistance to its new partners?",
      answer:
        "We do not have any financial assistance program. However, the specifics of your contract with us can be worked out to support financial requirements, where deemed fit.",
    },
    {
      question:
        "What kind of training and academic assistance will CUET+ PLUS provide?",
      answer:
        "Academics are the backbone of our existence. Hence, we provide all our business partners the updated and latest curriculum for any program they opt for, along with scheduled training sessions throughout the year. Thus, we ensure our partners remain enthusiastic while taking the curriculum to their students.",
    },
  ];

  const promoCards = [
    {
      img: b1,
      title: "Cultural Value",
      desc: "The huge emphasis that every Indian family puts on education offers an exciting entrepreneurial opportunity for an aspiring franchisee like you and also for CL.",
    },
    {
      img: b2,
      title: "Social Respect",
      desc: "Helping students in achieving their career dreams enables you to give back to the society and earn, both, status, and respect.",
    },
    {
      img: b3,
      title: "Growing Need",
      desc: "With the competition for the limited number of seats in educational institutes increasing by the day, the demand for quality coaching is also on the rise.",
    },
    {
      img: b4,
      title: "Easy to Breakeven",
      desc: "One of the most financially rewarding franchise businesses, in terms of achieving the breakeven early (provided the operational efforts made are efficient).",
    },
  ];

  const heading = [
    "Why Become a Franchisee?",
    "Join us in this fulfilling journey of education and entrepreneurship.",
  ];

  return (
    <>
      <div className={styles.franchiseeIntroContainer}>
        <div className={styles.franchiseeContent}>
          <div className={styles.franchiseeContentDiv}>
            <h3>Looking for a Franchise Business Opportunity?</h3>
            <h2>
              Become a <span>CUETPlus</span> Franchisee
            </h2>
            <p>
              Partner with us and help students prepare for the most prestigious
              exams in India. Join us in creating a legacy of educational
              excellence.
            </p>
            <a onClick={handleClick}>Contact Us</a>
          </div>
          {/* <div className={styles.overlayDiv}>
            {formClick && (
              <div className={styles.cf}>
                <div className={styles.overlayForm} onClick={handleOverlayClick}></div>
                <ContactForm />
              </div>
            )}
          </div> */}
        </div>
        {/* <img
          className={styles.franchiseePoster}
          src={franchisee_img}
          alt="Franchisee"
        /> */}
      </div>
      <BoxCard promoCards={promoCards} heading={heading} />
      <FranchiseeProcess />
      <SupportGuidance />
      <FAQ faqs1={faqs} faqs2={faqs} heading="Franchisee FAQs" />
    </>
  );
}

export default FranchiseeIntro;

export const BoxCard = ({promoCards, heading, heading1}) => {
  
  return (
    <div className={styles.whyFranchiseeContainer}>
      {heading && (
        <>
          <h2>{heading[0]}</h2>
          <p>{heading[1]}</p>
        </>
      )}
      {heading1 && (
        <>
          <span className={styles.heading1Desc}>{heading1[1]}</span>
          <h2 className={styles.heading1Title}>{heading1[0]}</h2>
        </>
      )}
      <div className={styles.promoCard}>
        {promoCards.map((card, index) => (
          <div key={index} className={styles.promoCardItem}>
            <div className={styles.image}>
              <img src={card.img} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
