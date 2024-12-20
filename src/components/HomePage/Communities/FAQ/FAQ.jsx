import React, { useState } from "react";
import styles from "./FAQ.module.css"; // Import the CSS module
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = ({ faqs1, faqs2, heading, customStyle }) => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const handleClick1 = (index) => {
    setActiveIndex1(index === activeIndex1 ? null : index);
  };

  const handleClick2 = (index) => {
    setActiveIndex2(index === activeIndex2 ? null : index);
  };

  return (
    <div className={styles.faq}>
      <div className={styles.faqContainer}>
        <h2>{heading}</h2>
        <div className={styles.faqCol}>
          {/* FAQ list 1 */}
          <ul className={styles.faqList} style={customStyle}>
            {faqs1 &&
              faqs1.map((faq, index) => (
                <li key={index} className={styles.faqItem}>
                  <button
                    className={`${styles.faqQuestion} ${
                      activeIndex1 === index ? styles.active : ""
                    }`}
                    onClick={() => handleClick1(index)}
                  >
                    <span className={styles.faqTitle}>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {activeIndex1 === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      activeIndex1 === index ? styles.show : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </li>
              ))}
          </ul>

          {/* FAQ list 2 */}
          {faqs2 && (
            <ul className={styles.faqList}>
              {faqs2.map((faq, index) => (
                <li key={index} className={styles.faqItem}>
                  <button
                    className={`${styles.faqQuestion} ${
                      activeIndex2 === index ? styles.active : ""
                    }`}
                    onClick={() => handleClick2(index)}
                  >
                    <span className={styles.faqTitle}>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {activeIndex2 === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      activeIndex2 === index ? styles.show : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
