import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import styles from "./PartnershipOppoSection.module.css";
import { Link } from "react-router-dom";
import educationConsultant from "../../../assets/ConsellerPartner.jpg";
import educationFranchise from "../../../assets/FrenchiesePartner.jpg";
import centerPartner from "../../../assets/CenterPartner.jpg";
import collegeClient from "../../../assets/CollagePartner.jpg";

const PartnershipOppoSection = () => {
  const partnershipOpportunities = [
    {
      imgUrl: educationConsultant,
      title: "Education Consultant",
      whoCanJoin:
        "Individuals with strong connections in their local student network.",
      whatYouDo:
        "Promote CUET Plus courses – classroom and online – in your area.",
      benefits: [
        "Earn commissions for every student referral.",
        "Make a positive impact by guiding students toward quality education.",
        "Comprehensive training and resources to support your efforts.",
      ],
      cta: "Become an Education Consultant",
      link: "/partnership-form",
    },
    {
      imgUrl: educationFranchise,
      title: "Education Franchise",
      whatItIs:
        "A ready-to-go business model that lets you leverage CUET Plus's brand, expertise and resources.",
      whatYouGet: [
        "A proven system for success in the education sector.",
        "Comprehensive training, expert guidance, and strategic marketing support provided.",
        "Minimized risks with a trusted and established brand.",
      ],
      whoItsFor:
        "Aspiring entrepreneurs looking to enter the education industry with confidence.",
      cta: "Learn More About Franchises",
      link: "/partnership-form",
    },
    {
      imgUrl: centerPartner,
      title: "Center Partner",
      whoCanJoin:
        "Coaching centers already established in a state or local area.",
      whatWeOffer: [
        "Access to all student admissions in your area (11th, 12th, CUET).",
        "Profit-sharing opportunities.",
        "Technical support, online advertising, and business expansion assistance.",
      ],
      whyItsIdeal:
        "Expand your coaching business with a trusted partner while reducing operational burdens.",
      cta: "Partner as a Center",
      link: "/partnership-form",
    },
    {
      imgUrl: collegeClient,
      title: "College Client",
      whoCanJoin:
        "Colleges seeking to promote their courses to a wider student network.",
      whatWeOffer: [
        "Promotion of partner college courses among our extensive student base.",
        "Counseling services to inform students about your offerings.",
        "Assistance in growing admissions and expanding college visibility.",
      ],
      whyItsIdeal:
        "Strengthen your college's reputation and admissions pipeline with expert guidance.",
      cta: "Partner with CUET Plus as a College",
      link: "/partnership-form",
    },
  ];

  return (
    <div id="partnershipSection" className={styles.partnershipContainer}>
      <h2 className={styles.header}>Explore Our Partnership Opportunities</h2>
      <div className={styles.cardsContainer}>
        {partnershipOpportunities.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{}}
          >
            <div className={styles.cardHeader}>
              <img src={item.imgUrl} alt={item.title} className={styles.cardImg} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </div>

            {item.whoCanJoin && (
              <p>
                <strong>Who Can Join:</strong> {item.whoCanJoin}
              </p>
            )}
            {item.whatItIs && (
              <p>
                <strong>What It Is:</strong> {item.whatItIs}
              </p>
            )}
            {item.whatYouDo && (
              <p>
                <strong>What You Do:</strong> {item.whatYouDo}
              </p>
            )}

            {item.benefits && (
              <>
                <h4>Benefits:</h4>
                <ul>
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}

            {item.whatYouGet && (
              <>
                <h4>What You Get:</h4>
                <ul>
                  {item.whatYouGet.map((get, idx) => (
                    <li key={idx}>{get}</li>
                  ))}
                </ul>
              </>
            )}

            {item.whatWeOffer && (
              <>
                <h4>What We Offer:</h4>
                <ul>
                  {item.whatWeOffer.map((offer, idx) => (
                    <li key={idx}>{offer}</li>
                  ))}
                </ul>
              </>
            )}

            {item.whoItsFor && (
              <p>
                <strong>Who It's For:</strong> {item.whoItsFor}
              </p>
            )}
            {item.whyItsIdeal && (
              <p>
                <strong>Why It's Ideal:</strong> {item.whyItsIdeal}
              </p>
            )}

            <Link to={item.link}>
              <button className={styles.ctaButton}>{item.cta}</button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipOppoSection;
