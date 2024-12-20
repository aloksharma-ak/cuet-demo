import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/CUETPlus_logo.png";
import styles from "./Footer.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const footerArr = [
  {
    title: "Quick Links",
    titleContent: [
      { text: "Know About Us", link: "/about-company" },
      { text: "Contact Us", link: "/contact-us" },
      { text: "Career With Us", link: "/become-an-employee" },
      { text: "Partner With Us", link: "/become-a-partner" },
      { text: "Media Coverage", link: "/media" },
      { text: "Read Blogs", link: "/blogs" },
    ],
  },
];

function Footer() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[+]?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(number);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only digits
    setMobile(value);
    setError("");
  };

  const Submit = (e) => {
    e.preventDefault();

    // Validate the phone number
    if (!validatePhoneNumber(mobile)) {
      setError("Please enter a valid phone number.");
      return;
    }

    const formData = new FormData();
    formData.append("Mobile", mobile);

    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL_NUMBERS;

    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        alert(
          "Thank you! Your form has been submitted. We’ll contact you soon."
        );
        setMobile("");
        // Check if handleOverlayClick exists before calling it
        if (typeof closeOverlay === "function") {
          closeOverlay();
        }
      })
      .catch((error) => {
        alert("Submission failed. Please try again or contact support.");
        console.error("Fetch error: ", error);
      });
  };

  const handleRedirect = (latitude, longitude) => {
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      latitude
    )},${encodeURIComponent(longitude)}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerCol}>
          <div className={styles.logo}>
            <img src={logo} alt="CUETPlus Logo" />
            <h3 className={styles.courses}>
              XI, XII Board <span>+</span> CUET Preparation
            </h3>
          </div>
          <p className={styles.desc}>
            We understand that every student has different needs and
            capabilities, which is why we create such a wonderful and unique
            curriculum that is the best fit for every student.
          </p>
          <h3 className={styles.tagLine}>
            excellence beyond <span>education</span>
          </h3>
          <div className={styles.mediaLink}>
            <Link
              to="http://www.instagram.com/cuetplus"
              className={styles.mediaLinkIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              to="http://www.facebook.com/cuetplus"
              className={styles.mediaLinkIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="http://www.youtube.com/@cuetplus"
              className={styles.mediaLinkIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </Link>
            <Link
              to="http://www.x.com/cuetplus"
              className={styles.mediaLinkIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/in/cuetplus"
              className={styles.mediaLinkIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        {footerArr.map((section, index) => (
          <div className={styles.footerCol} key={index}>
            <h2>{section.title}</h2>
            <ul>
              {section.titleContent.map((item, idx) => (
                <li className={styles.item} key={idx}>
                  <Link
                    to={item.link}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.footerCol}>
          <form onSubmit={Submit}>
            <div className={styles.inputBox}>
              <div className={styles.callIcon}>
                <RiCustomerService2Fill />
              </div>
              <input
                type="tel"
                name="Mobile"
                value={mobile}
                onChange={handleInputChange}
                placeholder="Drop Your Number"
                inputMode="numeric"
                aria-label="Phone number"
                aria-describedby="phoneError"
              />
              <button
                type="submit"
                className={styles.submit}
                aria-label="Submit phone number"
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
            {error && (
              <p id="phoneError" className={styles.error}>
                {error}
              </p>
            )}
          </form>
          <div className={styles.contactLink}>
            <Link
              to="mailto:support@cuet.plus"
              className={styles.phoneLink}
              rel="noopener noreferrer"
            >
              <MdOutlineMail />
              <span>support@cuet.plus</span>
            </Link>
            <Link
              to="tel:7428989898"
              className={styles.phoneLink}
              rel="noopener noreferrer"
            >
              <BiSolidPhoneCall />
              <span>Call: +91 74289 89898</span>
            </Link>
            <h3
              className={styles.address}
              onClick={() => handleRedirect(28.4947, 77.1903)}
            >
              <MdLocationPin />
              <span>374, MG Road, South Delhi, New Delhi (IN)-110030</span>
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.termsConditions}>
          <Link
            to="/term-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions |
          </Link>
          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy |
          </Link>
          <Link
            to="/cancellation-and-refund"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refund Policy
          </Link>
        </div>
        <p>
          Copyright &#169; 2024 M/S INSTITUTORIAL | Developed by{" "}
          <Link
            to="https://www.linkedin.com/in/aloksharma-ak/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.developerLink}
          >
            Alok Sharma
          </Link>
        </p>
      </div>
    </>
  );
}

export default Footer;
