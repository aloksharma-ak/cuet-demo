import React from "react";
import styles from "./ContactPageForm.module.css";

const ContactPageForm = ({ title }) => {
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      <section className={styles.ContactForm}>
        <form action="" className={styles.form}>
          <div className={styles.inputBox}>
            <input type="text" name="name" spellCheck="false" required />
            <span>Name</span>
          </div>
          <div className={styles.inputBox}>
            <input type="text" name="email" spellCheck="false" required />
            <span>Email</span>
          </div>
          <div className={styles.inputBox}>
            <input
              type="tel"
              name="mobile"
              spellCheck="false"
              maxLength={13}
              required
            />
            <span>Mobile No.</span>
          </div>
          <div className={styles.inputBox}>
            <input type="text" name="Course" spellCheck="false" required />
            <span>Course</span>
          </div>
          <div className={`${styles.inputBox} ${styles.inputMessage}`}>
            <textarea
              name="message"
              cols={10000}
              spellCheck="false"
              required
            ></textarea>
            <span>How can we help you?</span>
          </div>
          <div className={`${styles.inputBox} ${styles.inputButton}`}>
            <button type="submit" className={styles.button}>
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactPageForm;
