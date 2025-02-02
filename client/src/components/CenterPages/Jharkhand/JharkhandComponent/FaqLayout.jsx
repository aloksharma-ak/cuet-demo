import React, { useState } from "react";
import styles from "./FaqLayout.module.css";

const FaqLayout = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>{faqs.title}</h2>
      {faqs.description && (
        <p className={styles.description}>{faqs.description}</p>
      )}
      <div className={styles.faqs}>
        {faqs.faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            {/* Question Button */}
            <button
              className={styles.question}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
            </button>

            {/* Answer and Details */}
            <div
              className={`${styles.answerContainer} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              {openIndex === index && (
                <>
                  <p className={styles.answer}>{faq.answer}</p>
                  {faq.answer2 && (
                    <p className={styles.answer}>{faq.answer2}</p>
                  )}
                  {faq.details && faq.details.length > 0 && (
                    <ul className={styles.details}>
                      {faq.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className={styles.detailItem}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  {faq.conclusion && (
                    <p className={styles.answer}>{faq.conclusion}</p>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqLayout;
