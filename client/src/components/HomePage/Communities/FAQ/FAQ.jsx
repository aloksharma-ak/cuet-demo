import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = ({ faqsGroup }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqContainer}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqsGroupContent}>
        {faqsGroup.map((faqs, groupIndex) => (
          <div key={groupIndex} className={styles.faqGroup}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                {/* Question */}
                <button
                  className={`${styles.question} ${
                    openIndex === `${groupIndex}-${index}` ? styles.active : ""
                  }`}
                  onClick={() => toggleFaq(`${groupIndex}-${index}`)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.icon}>
                    {openIndex === `${groupIndex}-${index}` ? "-" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`${styles.answerContainer} ${
                    openIndex === `${groupIndex}-${index}` ? styles.open : ""
                  }`}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
