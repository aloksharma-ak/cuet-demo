import React, { useState } from "react";
import styles from "./AboutConnect.module.css";
import formStyles from "./AboutForm.module.css";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import studentImg from "../../../assets/StudentsCont.jpg";
import partnerImg from "../../../assets/PartnerCont.jpg";

const AboutConnect = ({ title }) => {
  const handleRedirect = (latitude, longitude) => {
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
  };

  const STUDENT_QUERY_SHEET_URL = import.meta.env
    .VITE_GOOGLE_SHEET_API_URL_STUDENTS;
  const PARTNER_QUERY_SHEET_URL = import.meta.env
    .VITE_GOOGLE_SHEET_API_URL_PARTNERS;

  return (
    <div className={styles.AboutConnect}>
      <h2 className={styles.AboutConnectTitle}>{title}</h2>
      <p className={styles.AboutConnectDesc}>
        Whenever you have a question, feedback, or simply want to say hello,
        we're here to help!
      </p>
      <div className={styles.AboutConnectContact}>
        <div className={styles.student}>
          <img
            src={studentImg}
            className={styles.studentImg}
            alt="Contact CUET Plus Team"
            loading="lazy"
          />{" "}
          <div className={styles.overlay}>Student Query</div>
          <div className={styles.studentContent}>
            <ContactBox
              handleRedirect={handleRedirect}
              email="student@cuet.plus"
              phone="+917428989898"
            />
            <AboutForm
              title="Student Query"
              desc="Have Queries? Get Expert Guidance Now!"
              desc2="Ask us anything - we're here to help you succeed!"
              query="Your query"
              GOOGLE_SHEET={STUDENT_QUERY_SHEET_URL}
            />
          </div>
        </div>
        <div className={styles.partner}>
          <img
            src={partnerImg}
            className={styles.partnerImg}
            alt="Contact CUET Plus Team"
            loading="lazy"
          />
          <div className={styles.overlay}>Partner Query</div>
          <div className={styles.partnerContent}>
            <AboutForm
              title="Partner Query"
              desc="Interested In Partnering with us?"
              desc2="Contact us today to discuss how we can work together."
              query="How can we help you?"
              GOOGLE_SHEET={PARTNER_QUERY_SHEET_URL}
            />
            <ContactBox
              handleRedirect={handleRedirect}
              email="partner@cuet.plus"
              phone="+917428989898"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactBox = ({ handleRedirect, email, phone }) => (
  <div className={styles.box}>
    <div
      onClick={() => handleRedirect(28.4947, 77.1903)}
      className={styles.location}
    >
      <div className={styles.iconBox}>
        <div className={styles.icon}>
          <MdLocationPin />
        </div>
        <h3 className={styles.iconText}>Location</h3>
      </div>
      <p className={styles.desc}>
        374, MG Road, South Delhi, New Delhi (IN)-110030
      </p>
    </div>
    <Link to={`mailto:${email}`} className={styles.location}>
      <div className={styles.iconBox}>
        <div className={styles.icon}>
          <MdOutlineMail />
        </div>
        <h3 className={styles.iconText}>Email</h3>
      </div>
      <p className={styles.desc}>{email}</p>
    </Link>
    <Link to={`tel:${phone}`} className={styles.location}>
      <div className={styles.iconBox}>
        <div className={styles.icon}>
          <FaPhoneAlt />
        </div>
        <h3 className={styles.iconText}>Phone</h3>
      </div>
      <p className={styles.desc}>{phone}</p>
    </Link>
  </div>
);

export const AboutForm = ({
  title,
  desc,
  desc2,
  query,
  GOOGLE_SHEET,
  onClick,
  handleOverlayClick,
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
        if (typeof handleOverlayClick === "function") {
          handleOverlayClick();
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
      <div className={formStyles.mobileLogo}>
        <div className={styles.icon}>
          <MdLocationPin />
        </div>
        <div className={styles.icon}>
          <MdOutlineMail />
        </div>
        <div className={styles.icon}>
          <FaPhoneAlt />
        </div>
      </div>
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

export default AboutConnect;
