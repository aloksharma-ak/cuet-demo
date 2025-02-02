import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { useNavigate } from "react-router-dom";

function ContactForm({ onClick, className, formHead }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedClass, setSelectedClass] = useState("10th");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedCourseGoal, setSelectedCourseGoal] = useState("");
  const navigate = useNavigate();

  const handleCourseGoalChange = (goal) => {
    setSelectedCourseGoal((prev) => (prev === goal ? "" : goal)); // Toggle selection
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateMobile = (mobile) => /^\d{10,13}$/.test(mobile);

  function Submit(e) {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validateMobile(mobile)) {
      alert("Please enter a valid mobile number (10-13 digits).");
      return;
    }

    if (
      (selectedClass === "11th" || selectedClass === "12th") &&
      !selectedSubject
    ) {
      alert("Please select a subject.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Mobile", mobile);
    formData.append("Class", selectedClass);
    formData.append("Subject", selectedSubject);
    formData.append("State", state);
    formData.append("City", city);
    formData.append("Model", selectedCourseGoal);

    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL_COURSES;

    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to submit");
        }
        return res.json();
      })
      .then(() => {
        alert(
          "Thank you! Your form has been submitted. We’ll contact you soon."
        );
        setName("");
        setEmail("");
        setMobile("");
        setSelectedClass("10th");
        setState("");
        setCity("");
        setSelectedSubject("");
        setSelectedCourseGoal("");
        navigate("/");
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
        alert("Submission failed. Please try again or contact support.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div
      className={`${styles.formContainerDiv} ${className}`}
      onClick={onClick}
    >
      <h2>{formHead}</h2>
      <form onSubmit={(e) => Submit(e)} className={styles.contactForm}>
        <div className={styles.inputBox}>
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
        <div className={styles.inputBox}>
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

        <div className={styles.inputBox}>
          <input
            type="tel"
            name="Mobile"
            spellCheck="false"
            maxLength={13}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <span>Mobile No.</span>
        </div>

        <div className={styles.ClassStream}>
          <div className={`${styles.inputBox} ${styles.inputSelect}`}>
            <label htmlFor="classSelect">Class</label>
            <select
              id="classSelect"
              name="Class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              required
            >
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="12th Pass">12th Pass</option>
            </select>
          </div>

          {(selectedClass === "11th" ||
            selectedClass === "12th" ||
            selectedClass === "12th Pass") && (
            <div className={`${styles.inputBox} ${styles.inputSelect}`}>
              <label htmlFor="subjectSelect">Subject</label>
              <select
                id="subjectSelect"
                name="Subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
              >
                <option value="">Select a subject</option>
                <option value="Com">Commerce</option>
                <option value="Hum">Humanities</option>
                <option value="Sci">Science</option>
              </select>
            </div>
          )}
        </div>

        <div
          className={`${styles.inputBox} ${styles.inputCheckbox} ${styles.inputCheckboxGoal}`}
        >
          <h3 className={styles.checkBoxTitle}>
            Choose your preferred coaching model
          </h3>
          {[
            {
              title: "Subject-focused coaching for Class 11, 12, or both",
              desc: "(For students focusing on individual or combined subjects of Class 11, 12, or both.)",
            },
            {
              title: "CUET Preparation",
              desc: "(For students aiming to prepare for CUET starting in Class 11, 12, or after Class 12.)",
            },
          ].map((goal, index) => (
            <div key={index} className={styles.checkboxWrapper}>
              <label className={styles.checkboxBtn}>
                <input
                  type="checkbox"
                  name="Model"
                  value={goal.title}
                  onChange={() => handleCourseGoalChange(goal.title)}
                  checked={selectedCourseGoal === goal.title}
                />
                <h4
                  className={
                    selectedCourseGoal === goal.title ? styles.radioActive : ""
                  }
                >
                  {goal.title}
                </h4>
              </label>
              <p className={styles.checkboxDesc}>{goal.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.inputBox}>
          <input
            type="text"
            name="State"
            spellCheck="false"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <span>State</span>
        </div>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="City"
            spellCheck="false"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <span>City</span>
        </div>
        <button type="submit">{isSubmitting ? "Sending..." : "Send"}</button>
      </form>
    </div>
  );
}

export default ContactForm;
