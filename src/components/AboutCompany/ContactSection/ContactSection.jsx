import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import formStyles from "./AboutInquiryForm.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ContactSection = ({ handleStudentBtn, handlePartnerBtn }) => {
  const handleRedirect = (latitude, longitude) => {
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Let's Connect</h2>
      <p className={styles.subheading}>
        Whether you have a question, feedback, or simply want to say hello,
        we’re here to help!
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>STUDENT QUERY</h3>
          <h4 className={styles.cardSubTitle}>
            Have Queries? Get Expert Guidance Now!
          </h4>
          <p className={styles.cardDesc}>
            You can ask questions, get solutions, and receive guidance on
            studies and careers.
          </p>
          <div className={styles.icons}>
            <span onClick={() => handleRedirect(28.4947, 77.1903)}>
              <MdLocationPin />
            </span>
            <Link to="mailto:student@cuet.plus">
              <span>
                <MdOutlineMail />
              </span>
            </Link>
            <span>
              <RiCustomerService2Fill />
            </span>
            <Link to="tel:7428989898" className={styles.phoneLink}>
              <span>
                <FaPhoneAlt />
              </span>
            </Link>
          </div>
          <button className={styles.button} onClick={handleStudentBtn}>
            Make an Enquiry
          </button>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>PARTNER QUERY</h3>
          <h4 className={styles.cardSubTitle}>
            Interested in Partnering with Us?
          </h4>
          <p className={styles.cardDesc}>
            You can connect, collaborate, and get support for partnerships with
            CUET Plus programs.
          </p>
          <div className={styles.icons}>
            <span onClick={() => handleRedirect(28.4947, 77.1903)}>
              <MdLocationPin />
            </span>
            <Link to="mailto:partner@cuet.plus">
              <span>
                <MdOutlineMail />
              </span>
            </Link>
            <span>
              <RiCustomerService2Fill />
            </span>
            <Link to="tel:7428989898" className={styles.phoneLink}>
              <span>
                <FaPhoneAlt />
              </span>
            </Link>
          </div>
          <button className={styles.button} onClick={handlePartnerBtn}>
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

export const AboutInquiryForm = ({
  title,
  desc,
  desc2,
  query,
  GOOGLE_SHEET,
  onClick,
  closeOverlay,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SHEET_URL = GOOGLE_SHEET;

  const Submit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    console.log("Submitted");

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Mobile", mobile);
    formData.append("Message", message);

    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        alert(
          "Thank you! Your form has been submitted. We’ll contact you soon."
        );
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
        // Check if handleOverlayClick exists before calling it
        if (typeof closeOverlay === "function") {
          closeOverlay();
        }
      })
      .catch((error) => {
        alert("Submission failed. Please try again or contact support.");
        console.error("Fetch error: ", error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className={formStyles.aboutForm} onClick={onClick}>
      {title && <h2 className={formStyles.title}>{title}</h2>}
      {desc && <p className={formStyles.desc}>{desc}</p>}
      {desc2 && <p className={formStyles.desc2}>{desc2}</p>}

      <form onSubmit={Submit} className={formStyles.form}>
        <div className={formStyles.inputBox}>
          <input
            type="text"
            name="Name"
            spellCheck="false"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span>Name</span>
        </div>

        <div className={formStyles.inputBox}>
          <input
            type="email"
            name="Email"
            spellCheck="false"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>Email</span>
        </div>

        <div className={formStyles.inputBox}>
          <input
            type="tel"
            name="Mobile"
            spellCheck="false"
            maxLength={13}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <span>Mobile No</span>
        </div>

        <div className={`${formStyles.inputBox} ${formStyles.inputMessage}`}>
          <textarea
            name="Message"
            spellCheck="false"
            cols={50}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <span>{query}</span>
        </div>

        <div className={`${formStyles.inputBox} ${formStyles.inputButton}`}>
          <button type="submit" className={formStyles.button}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};
